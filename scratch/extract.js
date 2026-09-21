const fs = require('fs');

const file = 'C:/Users/User/.gemini/antigravity-ide/brain/5904c61e-2db2-4fa0-a982-94b8e4fe4eff/.system_generated/steps/803/content.md';
const content = fs.readFileSync(file, 'utf8');

const re = /<div class="[^"]*vc_toggle_title[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<div class="[^"]*vc_toggle_content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
let m;
const faqs = [];
while ((m = re.exec(content)) !== null) {
  let q = m[1].replace(/<[^>]+>/g, '').trim();
  let a = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Clean HTML entities
  q = q.replace(/&#8217;/g, "'")
       .replace(/&#8211;/g, "–")
       .replace(/&#8220;/g, '"')
       .replace(/&#8221;/g, '"')
       .replace(/&amp;/g, '&')
       .replace(/&quot;/g, '"')
       .replace(/&#038;/g, '&');

  a = a.replace(/&#8217;/g, "'")
       .replace(/&#8211;/g, "–")
       .replace(/&#8220;/g, '"')
       .replace(/&#8221;/g, '"')
       .replace(/&amp;/g, '&')
       .replace(/&quot;/g, '"')
       .replace(/&#038;/g, '&');

  faqs.push({ q, a });
}

console.log('Total FAQs found:', faqs.length);
fs.writeFileSync('scratch/extracted_faqs.json', JSON.stringify(faqs, null, 2));
