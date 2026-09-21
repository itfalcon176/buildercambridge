const fs = require('fs');

const file = 'C:/Users/User/.gemini/antigravity-ide/brain/5904c61e-2db2-4fa0-a982-94b8e4fe4eff/.system_generated/steps/803/content.md';
const content = fs.readFileSync(file, 'utf8');

// Look for vc_toggle or accordion
const re = /<div class="[^"]*vc_toggle_title[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<div class="[^"]*vc_toggle_content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
let m;
const faqs = [];
while ((m = re.exec(content)) !== null) {
  const q = m[1].replace(/<[^>]+>/g, '').trim();
  const a = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  faqs.push({ q, a });
}

console.log(`Found ${faqs.length} FAQs via vc_toggle`);
if (faqs.length > 0) {
  console.log(JSON.stringify(faqs, null, 2));
} else {
  // Try other accordion patterns
  const re2 = /<div class="[^"]*accordion[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  console.log('Searching other patterns...');
  // Find all questions with ?
  const matches = content.match(/>([^<>\n\r]{10,200}\?)\s*</g);
  console.log('Matches with ?:', matches);
}
