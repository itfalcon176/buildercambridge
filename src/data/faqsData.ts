export interface FAQItem {
  id: string;
  category: "Planning & Regulations" | "Costs & Payments" | "Build Process" | "Guarantees & Safety";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "Planning & Regulations",
    question: "Do I need planning permission for an extension or loft conversion in Cambridge?",
    answer: "Many single-storey rear extensions up to 6 meters (or 8m for detached homes) and loft conversions under 40-50m³ volume fall under Permitted Development rights, meaning full planning permission is not required. However, if your property is located within a designated Cambridge Conservation Area, is a listed building, or has had permitted development rights removed, a formal planning application will be necessary. We carry out full planning searches and manage all council submissions.",
  },
  {
    id: "faq-2",
    category: "Planning & Regulations",
    question: "How do Building Regulations inspections work during construction?",
    answer: "Building Regulations ensure structural integrity, fire safety, insulation, and proper drainage. We submit a Full Plans Building Control application prior to starting. An independent or local authority Building Control inspector visits your property at critical milestones: foundation excavation, damp-proof course, structural steel installation, roof timbers, insulation, and final completion. Upon passing, you receive an official Building Control Completion Certificate.",
  },
  {
    id: "faq-3",
    category: "Planning & Regulations",
    question: "What is a Party Wall Agreement and do I need one?",
    answer: "If you are excavating within 3 or 6 meters of a neighbour's foundation or carrying out structural work to a shared party wall (such as inserting steel RSJ beams for an extension or loft), you must serve a formal Party Wall Notice under the Party Wall etc. Act 1996. We provide standard notice templates and work with accredited Party Wall Surveyors.",
  },
  {
    id: "faq-4",
    category: "Costs & Payments",
    question: "How are project payments structured?",
    answer: "We operate on a transparent, milestone-based stage payment schedule agreed in advance. You never pay 100% upfront. Payments are divided into clearly defined completion stages (e.g., Deposit/Mobilization, Foundation Sign-off, Watertight Shell, Plaster/First Fix, and Final Retention on Handover). You only release funds once each stage is inspected and approved.",
  },
  {
    id: "faq-5",
    category: "Costs & Payments",
    question: "Will the initial quotation be fixed?",
    answer: "Yes. Our detailed written proposals are fixed-price contracts based on the approved architectural and engineering specifications. If you decide to add extra features or alter specifications during the build, we issue a clear written Variation Order with exact cost implications for your sign-off before any additional work commences.",
  },
  {
    id: "faq-6",
    category: "Build Process",
    question: "How long does a typical extension or loft conversion take?",
    answer: "A standard single-storey rear extension typically takes between 10 and 14 weeks. A dormer loft conversion usually takes 6 to 9 weeks. Full house renovations range between 8 and 18 weeks depending on scale. We provide an exact project Gantt chart schedule prior to site commencement.",
  },
  {
    id: "faq-7",
    category: "Build Process",
    question: "Can we remain living in our home while building work takes place?",
    answer: "For loft conversions and rear extensions, most homeowners remain living in the house. We seal off the work area with dust containment screens and temporary partitions, and where possible, access the roof space via exterior scaffolding to keep disruption to a minimum. For full-house electrical rewires or total ground floor structural reconfigurations, temporary accommodation can often speed up completion.",
  },
  {
    id: "faq-8",
    category: "Guarantees & Safety",
    question: "What warranties and insurances do you provide?",
    answer: "All structural building works are protected with a comprehensive 10-Year structural guarantee. We carry full £5,000,000 Public Liability Insurance and £10,000,000 Employers Liability Insurance. All electrical works are certified under NICEIC / Part P, and gas plumbing is certified by Gas Safe registered engineers.",
  },
];
