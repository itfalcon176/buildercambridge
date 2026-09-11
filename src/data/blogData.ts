export interface BlogPost {
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
}

export const blogData: BlogPost[] = [
  {
    slug: "cambridge-house-extension-cost-guide-2026",
    title: "How Much Does a House Extension Cost in Cambridge? (2026 Detailed Guide)",
    excerpt: "A comprehensive breakdown of single-storey, double-storey, and wrap-around extension costs across Cambridge postcodes (CB1 to CB25), including architect fees and council regulations.",
    category: "Cost Guides",
    readTime: "6 min read",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "George Builder",
      role: "Senior Construction Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    content: [
      "Extending your property in Cambridge continues to be one of the smartest financial investments homeowners can make. With the average house price in Cambridge exceeding £540,000, adding 20 to 40 square meters of high-spec living space frequently adds significantly more equity than the cost of construction.",
      "In 2025 and 2026, typical construction costs for a single-storey rear extension in Cambridge range between £1,900 and £2,600 per square meter for standard to premium finishes. For high-end luxury specifications with 4-meter structural bifold doors, architectural roof lanterns, and high-efficiency underfloor heating, costs generally sit between £2,600 and £3,200 per square meter.",
      "Key factors influencing your budget include groundwork conditions (Cambridge clay often requires engineered 1.2m–1.5m trench foundations or engineered raft slabs), structural steel beam complexity for open-plan living, and planning constraints in conservation areas such as Newnham and De Freville.",
      "Contact Builder Cambridge today for an itemized feasibility study and exact fixed-price quotation tailored to your home.",
    ],
  },
  {
    slug: "permitted-development-rules-cambridge",
    title: "Permitted Development in Cambridge: What You Can Build Without Planning Permission",
    excerpt: "Everything you need to know about extending your home, converting your loft, or adding outbuildings under UK Permitted Development rights in Cambridge and South Cambridgeshire.",
    category: "Planning & Architecture",
    readTime: "5 min read",
    date: "February 2, 2025",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "George Builder",
      role: "Senior Construction Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    content: [
      "Permitted Development (PD) rights allow homeowners in Cambridge to extend and improve their properties without going through the lengthy 8-to-12 week full planning permission cycle.",
      "Under Class A of the General Permitted Development Order, you can construct a single-storey rear extension extending up to 6 meters from the original rear wall for attached houses, or up to 8 meters for detached properties, provided you undergo the Prior Approval Neighbour Consultation Scheme.",
      "For loft conversions (Class B), you can add up to 40 cubic meters of additional roof space for terraced houses, or 50 cubic meters for semi-detached and detached homes. The materials used must be similar in appearance to the existing dwelling.",
      "However, if your property is within a Conservation Area (such as Central Cambridge, Mill Road, or Grantchester), Article 4 Directions may restrict some PD rights. Our team checks local council records for free before designing your project.",
    ],
  },
  {
    slug: "loft-conversion-types-cambridge-victorian-semi",
    title: "Choosing the Right Loft Conversion for Your Cambridge Property",
    excerpt: "Compare Rear Dormer, Hip-to-Gable, Mansard, and Velux conversions. Discover which style suits Victorian terraces, 1930s semis, and modern detached homes.",
    category: "Design Trends",
    readTime: "7 min read",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "George Builder",
      role: "Senior Construction Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    content: [
      "Cambridge features a rich architectural tapestry, from Victorian terraces along Mill Road and Romsey Town to 1930s semi-detached homes in Chesterton and modern family houses in Trumpington.",
      "1. **Rear Dormer Conversion**: The most popular and versatile option. It creates maximum usable headroom and vertical wall space for bedroom furniture and full-height shower ensuites.",
      "2. **Hip-to-Gable Conversion**: Ideal for end-terrace, semi-detached, and detached homes with sloping hipped roofs. It straightens the side slope into a vertical gable wall, unlocking substantial floor area.",
      "3. **Mansard Conversion**: The ultimate luxury aesthetic, often preferred in sensitive urban settings. The rear roof pitch is altered to an 72-degree slope with vertical dormer windows.",
      "Builder Cambridge designs and builds every type of loft conversion, delivering turnkey luxury master suites with minimal fuss.",
    ],
  },
];
