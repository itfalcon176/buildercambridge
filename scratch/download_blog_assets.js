const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const posts = JSON.parse(fs.readFileSync('scratch/wp_posts_embedded.json', 'utf8'));
const blogImgDir = path.join(__dirname, '..', 'public', 'blog-images');
if (!fs.existsSync(blogImgDir)) {
  fs.mkdirSync(blogImgDir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve) => {
    if (!url) return resolve(null);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      return resolve(dest);
    }
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed to download ${url}: status ${res.statusCode}`);
        return resolve(null);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    });
    req.on('error', (e) => {
      console.log(`Error downloading ${url}:`, e.message);
      resolve(null);
    });
    req.on('timeout', () => {
      req.destroy();
      resolve(null);
    });
  });
}

async function processAll() {
  console.log('Processing 30 blog posts...');

  const processed = [];

  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const media = p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0];
    let imgUrl = media ? media.source_url : null;

    // Check if post 29 or any post has image inside content
    if (!imgUrl) {
      const match = p.content.rendered.match(/src="([^"]+\.(jpg|jpeg|png|webp))"/i);
      if (match) {
        imgUrl = match[1];
      } else {
        // Use bifolding door service image if it's bifold door post
        if (p.slug.includes('bifold')) {
          imgUrl = '/services-images/bifolding-doors.jpg';
        } else {
          imgUrl = '/services-images/new-builds-cambridge.jpg';
        }
      }
    }

    let localImgPath = '';
    if (imgUrl.startsWith('http')) {
      const ext = path.extname(new URL(imgUrl).pathname) || '.jpg';
      const filename = `${p.slug}${ext}`;
      const dest = path.join(blogImgDir, filename);
      const res = await downloadImage(imgUrl, dest);
      if (res && fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
        localImgPath = `/blog-images/${filename}`;
      } else {
        localImgPath = imgUrl; // Fallback to remote if download fails
      }
    } else {
      localImgPath = imgUrl;
    }

    // Clean title
    let title = p.title.rendered
      .replace(/&#8217;/g, "'")
      .replace(/&#8211;/g, "–")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#038;/g, '&')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .trim();

    // Clean excerpt
    let excerpt = p.excerpt.rendered
      .replace(/<[^>]+>/g, ' ')
      .replace(/&#8217;/g, "'")
      .replace(/&#8211;/g, "–")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/\[&hellip;\]/g, '...')
      .replace(/\s+/g, ' ')
      .trim();

    // Clean content
    let contentHtml = p.content.rendered
      .replace(/&#8217;/g, "'")
      .replace(/&#8211;/g, "–")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#038;/g, '&')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .trim();

    // Split content into clean paragraphs for structured rendering
    const paragraphs = contentHtml
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .split(/<\/(?:p|h[1-6]|ul|ol|blockquote|div)>/i)
      .map(part => part.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
      .filter(part => part.length > 20 && !part.startsWith('©') && !part.includes('Toggle content'));

    // Category mapping
    let category = "Renovations & Building";
    const titleLower = title.toLowerCase();
    if (titleLower.includes('extension') || titleLower.includes('living space')) {
      category = "Extensions";
    } else if (titleLower.includes('loft')) {
      category = "Loft Conversions";
    } else if (titleLower.includes('smart') || titleLower.includes('technology') || titleLower.includes('trend')) {
      category = "Trends & Tech";
    } else if (titleLower.includes('budget') || titleLower.includes('spend') || titleLower.includes('cost') || titleLower.includes('value')) {
      category = "Costs & Value";
    } else if (titleLower.includes('kitchen')) {
      category = "Kitchens";
    } else if (titleLower.includes('roof')) {
      category = "Roofing";
    }

    // Date formatting: "February 19, 2024"
    const d = new Date(p.date);
    const dateFormatted = d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Estimate reading time based on word count
    const wordCount = contentHtml.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
    const readMinutes = Math.max(3, Math.ceil(wordCount / 200));

    processed.push({
      slug: p.slug,
      title,
      excerpt: excerpt || paragraphs[0] || "",
      category,
      readTime: `${readMinutes} min read`,
      date: dateFormatted,
      image: localImgPath,
      author: {
        name: "Builder Cambridge Editorial",
        role: "Senior Construction Experts",
        avatar: "/testimonials/avatar-1.jpg"
      },
      content: paragraphs.length > 0 ? paragraphs : [excerpt],
      contentHtml: contentHtml
    });
  }

  const tsContent = `export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
  contentHtml?: string;
}

export const blogData: BlogPost[] = ${JSON.stringify(processed, null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'blogData.ts'), tsContent, 'utf8');
  console.log(`Saved ${processed.length} complete blog posts to src/data/blogData.ts!`);
}

processAll();
