const fs = require('fs');

const file = 'C:/Users/User/.gemini/antigravity-ide/brain/5904c61e-2db2-4fa0-a982-94b8e4fe4eff/.system_generated/steps/862/content.md';
const content = fs.readFileSync(file, 'utf8');

console.log('File size:', content.length);

// Look for links to blog posts or buildercambridge.com
const links = content.match(/href="(https:\/\/buildercambridge\.com\/[^"]+)"/g) || [];
const uniqueLinks = [...new Set(links.map(l => l.replace(/href="|"/g, '')))];

console.log('Unique internal links:', uniqueLinks.filter(l => !l.endsWith('.css') && !l.endsWith('.js') && !l.endsWith('.png') && !l.endsWith('.jpg')));

// Look for headings
const headings = content.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi) || [];
console.log('Headings found:');
headings.slice(0, 20).forEach(h => console.log(' -', h.replace(/<[^>]+>/g, '').trim()));
