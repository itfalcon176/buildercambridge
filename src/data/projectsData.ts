export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: "Extensions" | "Loft Conversions" | "Renovations" | "Commercial" | "New Builds";
  completionDate: string;
  duration: string;
  budgetRange: string;
  summary: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
  keyHighlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "trumpington-rear-extension",
    title: "Contemporary Open-Plan Wrap-Around Extension",
    location: "Trumpington, Cambridge (CB2)",
    category: "Extensions",
    completionDate: "October 2024",
    duration: "12 Weeks",
    budgetRange: "£78,000",
    summary: "Transformed a cramped 1930s semi into a breathtaking open-plan kitchen, dining, and living zone featuring 5-meter aluminium sliding doors, flush patio threshold, structural steel box frame, and polished concrete floor with underfloor heating.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    keyHighlights: [
      "5m slimline structural glass sliding system",
      "Large architectural roof lantern flooding natural light",
      "Bespoke handleless navy kitchen with quartz waterfall island",
      "Multi-zone wet underfloor heating system",
    ],
  },
  {
    id: "mill-road-loft-master-suite",
    title: "Victorian Mansard Loft Conversion & Ensuite",
    location: "Mill Road, Cambridge (CB1)",
    category: "Loft Conversions",
    completionDate: "August 2024",
    duration: "7 Weeks",
    budgetRange: "£52,000",
    summary: "Converted an unused dark attic of a period Victorian terrace into a sun-drenched master bedroom suite featuring a bespoke timber dormer, custom eaves wardrobes, and a luxury ensuite wetroom with Italian herringbone tiles.",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    ],
    keyHighlights: [
      "Custom staircase matching existing 1890s spindle detailing",
      "Dual Velux conservation rooflights with solar blackout blinds",
      "Crittall-style frameless glass shower enclosure",
      "Enhanced acoustic floor insulation dampening sound transmission",
    ],
  },
  {
    id: "newnham-complete-renovation",
    title: "Period Villa Restoration & Modernization",
    location: "Newnham, Cambridge (CB3)",
    category: "Renovations",
    completionDate: "December 2024",
    duration: "16 Weeks",
    budgetRange: "£135,000",
    summary: "Full turnkey restoration of a 4-bedroom Edwardian residence. Included full structural reconfiguration, removal of two chimney breasts with gallows brackets, complete rewiring, acoustic insulation, air source heat pump upgrade, and heritage sash restorations.",
    beforeImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    keyHighlights: [
      "Period cornice and ceiling rose replication by master plasterers",
      "Whole-house smart lighting and zoned climate control",
      "High-efficiency hybrid heat pump installation",
      "Solid European oak parquet throughout ground level",
    ],
  },
  {
    id: "chesterton-eco-new-build",
    title: "Architect-Designed Eco Passivhaus Residence",
    location: "Chesterton, Cambridge (CB4)",
    category: "New Builds",
    completionDate: "January 2025",
    duration: "34 Weeks",
    budgetRange: "£420,000",
    summary: "Turnkey design and construction of an ultra-low-energy 5-bedroom family home featuring structural insulated panels (SIPs), triple-glazed timber-aluminium composite windows, solar PV array with battery storage, and mechanical ventilation (MVHR).",
    beforeImage: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    keyHighlights: [
      "A-rated EPC rating with net-zero operational capability",
      "Zinc standing seam curved architectural roof profile",
      "Hand-finished Cambridge Gault brickwork facade",
      "Full 10-Year Premier Guarantee structural warranty",
    ],
  },
  {
    id: "science-park-commercial-fitout",
    title: "Tech Innovation Hub & Office Fit-Out",
    location: "Cambridge Science Park (CB4)",
    category: "Commercial",
    completionDate: "November 2024",
    duration: "5 Weeks",
    budgetRange: "£92,000",
    summary: "Turnkey commercial CAT B fit-out converting 4,500 sq ft of open shell space into acoustic meeting suites, video conference pods, breakout barista kitchen, and agile collaborative workstations.",
    beforeImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
    keyHighlights: [
      "48dB acoustic double-glazed partition suites",
      "Integrated airflow and air conditioning re-balancing",
      "Executed on tight 5-week schedule with zero client business downtime",
    ],
  },
];
