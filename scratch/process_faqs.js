const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('scratch/extracted_faqs.json', 'utf8'));

// Categories:
// 1. General & Estimates
// 2. Extensions & Conversions
// 3. Planning & Regulations
// 4. Costs & Budget
// 5. Eco & Energy Efficiency
// 6. Quality & Guarantees

function assignCategory(q, a) {
  const text = (q + ' ' + a).toLowerCase();

  if (/cost|price|budget|estimate|payment|financ|quote|deposit|fee|invoice|overrun/.test(text)) {
    return "Costs & Budget";
  }
  if (/planning|regulation|permit|compliance|building control|council|party wall|legal|approv|heritage|conservation area/.test(text)) {
    return "Planning & Regulations";
  }
  if (/eco|green|solar|energy|insulat|thermal|sustainab|environment|rainwater|heat pump/.test(text)) {
    return "Eco & Energy Efficiency";
  }
  if (/warrant|guarantee|insur|licens|safe|certif|quality|inspect|satisfaction|damage|defect/.test(text)) {
    return "Quality & Guarantees";
  }
  if (/extension|loft|renovat|remodel|kitchen|bathroom|roof|stair|basement|patio|deck|structural|piller|beam|wall|space|fenc|joinery|build/.test(text)) {
    return "Extensions & Renovations";
  }
  return "General & Process";
}

const cleaned = raw.map((item, index) => {
  const q = item.q.replace(/&#039;/g, "'").replace(/&amp;/g, "&").trim();
  const a = item.a.replace(/&#039;/g, "'").replace(/&amp;/g, "&").trim();
  const category = assignCategory(q, a);
  return {
    id: `faq-${index + 1}`,
    category,
    question: q,
    answer: a,
  };
});

const counts = {};
cleaned.forEach(f => {
  counts[f.category] = (counts[f.category] || 0) + 1;
});
console.log('Category breakdown:', counts);
console.log('Total items:', cleaned.length);

fs.writeFileSync('scratch/cleaned_faqs.json', JSON.stringify(cleaned, null, 2));
