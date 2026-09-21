const fs = require('fs');

const faqs = JSON.parse(fs.readFileSync('scratch/cleaned_faqs.json', 'utf8'));

faqs.forEach(f => {
  f.answer = f.answer.replace(/Toggle content goes here, click edit button to change this text\./gi, '').trim();
  f.question = f.question.trim();
});

const tsContent = `export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = ${JSON.stringify(faqs, null, 2)};
`;

fs.writeFileSync('src/data/faqsData.ts', tsContent, 'utf8');
console.log('Cleaned faqsData.ts written with', faqs.length, 'FAQs.');
console.log('First answer:', faqs[0].answer);
