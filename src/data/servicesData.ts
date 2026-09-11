export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: "Residential" | "Structural" | "Commercial" | "Groundworks";
  heroImage: string;
  galleryImages: string[];
  features: string[];
  fullDescription: string[];
  whyChooseUs: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  typicalTimeline: string;
  typicalCostRange: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "extensions-cambridge",
    slug: "extensions-cambridge",
    title: "House Extensions Cambridge",
    shortDesc: "Bespoke single and double-storey home extensions designed to maximize living space, light, and property value across Cambridge.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Rear, side-return, and wrap-around extensions",
      "Full planning permission & permitted development handling",
      "Structural steelwork calculations & installation",
      "Open-plan kitchen diner transformations",
      "Architectural glazing & slimline aluminium bifolds",
      "10-Year structural guarantee on all building works",
    ],
    fullDescription: [
      "A house extension is one of the most cost-effective and transformative ways to create additional living space in Cambridge without the upheaval and stamp duty costs of moving. Whether you are looking to create a vast open-plan kitchen and family hub, add an ensuite master bedroom, or extend for a luxury garden room, Builder Cambridge delivers turnkey solutions from initial concept to turnkey completion.",
      "Our team of master builders, structural engineers, and project managers work closely with Cambridge City Council and South Cambridgeshire District Council planning departments to ensure smooth approvals and full compliance with UK Building Regulations.",
    ],
    whyChooseUs: [
      "Over 18 years of local Cambridge extension building experience",
      "Dedicated site manager for daily updates and seamless workflow",
      "Fixed-price itemized quotations with zero hidden surprises",
      "High standard of thermal efficiency exceeding Part L regulations",
    ],
    processSteps: [
      { title: "1. Consultation & Feasibility", desc: "We visit your property, review your vision, assess boundary constraints, and provide a clear feasibility report and ballpark budget." },
      { title: "2. Architectural & Engineering", desc: "Detailed drawings and structural steel calculations are produced and submitted for planning or lawful development certificate." },
      { title: "3. Groundwork & Structure", desc: "Foundations, drainage, brickwork matching, steel frame installation, and roof watertight construction." },
      { title: "4. First & Second Fix", desc: "Electricals, plumbing, underfloor heating, insulation, plastering, glazing, and flooring." },
      { title: "5. Sign-off & Handover", desc: "Final building control inspection, issue of completion certificate, and 10-year warranty delivery." },
    ],
    faqs: [
      {
        question: "Do I need planning permission for a house extension in Cambridge?",
        answer: "Many single-storey rear extensions up to 6m (or 8m for detached homes) fall under Permitted Development rights, subject to certain criteria. If your property is in a Cambridge conservation area or is listed, full planning permission will be required. We handle all planning checks and submissions on your behalf.",
      },
      {
        question: "How long does a typical extension take to build?",
        answer: "A standard single-storey rear or side extension typically takes between 10 and 14 weeks from ground breaking to final decorative finish.",
      },
    ],
    typicalTimeline: "10 - 14 Weeks",
    typicalCostRange: "£35,000 - £95,000+",
    badge: "Most Popular",
  },
  {
    id: "loft-conversions-cambridge",
    slug: "loft-conversions-cambridge",
    title: "Loft Conversions Cambridge",
    shortDesc: "Transform unused attic space into luxury master bedrooms, ensuites, home offices, or studio spaces with custom dormer and Velux solutions.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Rear dormer, hip-to-gable, and Mansard conversions",
      "Velux rooflight and Juliette balcony installations",
      "Custom bespoke staircase design matching existing timber",
      "Luxury ensuite bathrooms with walk-in showers",
      "High-spec thermal and acoustic insulation",
      "Complete Building Control sign-off for fire and structural safety",
    ],
    fullDescription: [
      "Unlocking your loft is one of the highest return-on-investment home improvements available in Cambridge, adding up to 20-25% to your property's market valuation. Whether you live in a Victorian terrace on Mill Road, a 1930s semi in Chesterton, or a detached home in Trumpington, we custom-engineer your roof space to maximize headroom, natural light, and storage.",
      "From steel beam insertion and floor reinforcement to fire doors, plumbing, and bespoke wardrobes built into the eaves, our craftsmen manage every detail with minimal disruption to your home below.",
    ],
    whyChooseUs: [
      "Specialists in Victorian, Edwardian, and contemporary roof spaces",
      "Work executed from exterior scaffolding where possible to keep living areas clean",
      "Comprehensive structural engineering calculation package included",
    ],
    processSteps: [
      { title: "1. Headroom & Roof Survey", desc: "Accurate laser measurement of ridge height and truss configuration to verify suitability." },
      { title: "2. Structural Calculations", desc: "Design of load-bearing steel flitch beams and floor joists certified by chartered engineers." },
      { title: "3. Scaffolding & Shell", desc: "Roof opening, steel hoisting, dormer framing, weatherproofing, and Velux installation." },
      { title: "4. Staircase & Interior Fit-out", desc: "Bespoke stairs installed, electricals, plumbing, sound insulation, and plasterboard." },
      { title: "5. Completion & Certification", desc: "Building inspector sign-off and Part P electrical safety certification." },
    ],
    faqs: [
      {
        question: "Is my Cambridge home suitable for a loft conversion?",
        answer: "Generally, you need a minimum head height of 2.2 meters measured from the top of the existing ceiling joists to the bottom of the roof ridge beam.",
      },
    ],
    typicalTimeline: "6 - 10 Weeks",
    typicalCostRange: "£38,000 - £75,000+",
    badge: "High ROI",
  },
  {
    id: "interior-renovation",
    slug: "interior-renovation",
    title: "Interior Renovation & Bathrooms/Kitchens",
    shortDesc: "Complete high-end interior remodelling, bespoke luxury kitchens, designer bathrooms, and structural wall removals.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Load-bearing wall removals with RSJ steel beam insertion",
      "Luxury custom kitchen fitting and island breakfast bars",
      "Spa-grade bathrooms, wetrooms, and underfloor heating",
      "Plastering, microcement, and architectural lighting",
      "Hardwood, chevron parquet, and large format porcelain tiling",
    ],
    fullDescription: [
      "Bring fresh elegance, open space, and modern functionality to your home with our full interior renovation services. Whether you want to reconfigure your ground floor layout into an expansive entertaining area or upgrade your bathroom to a hotel-standard sanctuary, our multi-skilled craftsmen deliver flawless finishes.",
    ],
    whyChooseUs: [
      "All trades in-house: carpenters, certified electricians, Gas Safe plumbers, and tilers",
      "Dust-suppression and careful protection of your existing furnishings",
      "Meticulous attention to detail and sharp joinery finishes",
    ],
    processSteps: [
      { title: "1. Spatial Planning", desc: "CAD layout planning and 3D visual review of your new interior." },
      { title: "2. Demolition & Prep", desc: "Removal of outdated fittings, non-structural and load-bearing partitions with temporary propping." },
      { title: "3. First Fix Services", desc: "Rerouting pipework, smart lighting conduits, and data cabling." },
      { title: "4. Installation & Tiling", desc: "Cabinetry fitting, precision tiling, plumbing fixtures, and flooring." },
      { title: "5. Decoration & Polish", desc: "Paints, sealant lines, architectural hardware, and professional sparkle clean." },
    ],
    faqs: [
      {
        question: "Can you knock down a wall to create an open-plan living space?",
        answer: "Yes, we specialize in structural knock-throughs. Our structural engineer specifies the correct steel RSJ, and we manage the building control notification and inspection seamlessly.",
      },
    ],
    typicalTimeline: "3 - 8 Weeks",
    typicalCostRange: "£15,000 - £60,000+",
  },
  {
    id: "refurbishments-cambridge",
    slug: "refurbishments-cambridge",
    title: "Complete Refurbishments Cambridge",
    shortDesc: "Full-property restorations and modernization for period houses, apartments, and buy-to-let investments across Cambridge.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Full strip-out and structural consolidation",
      "Complete electrical rewiring (NICEIC certified)",
      "Central heating & heat pump system installations",
      "Period sash window restoration & double glazing upgrades",
      "Damp proofing, re-plastering, and insulation upgrades",
    ],
    fullDescription: [
      "From dilapidated Victorian villas to dated 1970s residences, we breathe new life into older properties. Our full refurbishment service restores historic architectural charm while integrating 21st-century energy efficiency, smart climate control, and luxury finishes.",
    ],
    whyChooseUs: [
      "Proven track record working with Cambridge heritage and conservation guidelines",
      "One single accountable contractor managing all aspects of the build",
      "Rigorous timeline tracking to meet move-in or rental deadlines",
    ],
    processSteps: [
      { title: "1. Full Survey", desc: "Condition survey identifying structural defects, damp, plumbing, and electrical integrity." },
      { title: "2. Strip-back", desc: "Safe removal of redundant materials and deep structural repair." },
      { title: "3. Infrastructure Replacement", desc: "New wiring, new copper/PEX pipework, screeding, and thermal insulation." },
      { title: "4. Plaster & Joinery", desc: "Skim plastering, skirtings, architraves, doors, and custom cabinetry." },
      { title: "5. Final Handover", desc: "Comprehensive testing, certificates package, and key handover." },
    ],
    faqs: [
      {
        question: "Can I live in the house during a full refurbishment?",
        answer: "For full-house strip outs and rewires, we usually recommend arranging alternative accommodation for a smoother, faster build timeline.",
      },
    ],
    typicalTimeline: "8 - 18 Weeks",
    typicalCostRange: "£40,000 - £150,000+",
  },
  {
    id: "new-builds-cambridge",
    slug: "new-builds-cambridge",
    title: "New Builds & Custom Homes",
    shortDesc: "Ground-up construction of bespoke architect-designed homes, luxury residential developments, and Passivhaus energy-efficient builds.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Turnkey plot-to-key construction",
      "Contemporary and traditional masonry & timber frame construction",
      "Renewable energy integration (Solar PV, MVHR, Air Source Heat Pumps)",
      "Strict quality control and 10-Year structural warranty backed by major warranty providers",
      "Complete site management, health & safety compliance",
    ],
    fullDescription: [
      "Building a bespoke new home is an exhilarating journey. Builder Cambridge partners with clients and leading architects to bring exceptional residential projects to fruition. From site preparation and piling to high-specification internal finishes and landscaped gardens, we deliver perfection on every square meter.",
    ],
    whyChooseUs: [
      "Decades of combined master building expertise across Cambridgeshire",
      "Rigorous adherence to environmental and Passivhaus performance metrics",
      "Transparent milestone-based payment schedules tied to certified stages",
    ],
    processSteps: [
      { title: "1. Land & Planning", desc: "Review of planning conditions, soil test reports, and structural design." },
      { title: "2. Substructure", desc: "Excavation, ground bearing slabs/piled foundations, and underground utility connections." },
      { title: "3. Superstructure", desc: "Brickwork, blockwork, beam & block floors, roof trusses, and slate/tile roofing." },
      { title: "4. Interior Systems", desc: "Full M&E installation, renewable energy plant room, drywall, and plastering." },
      { title: "5. Luxury Finishes", desc: "Flooring, kitchens, sanitaryware, exterior paving, and landscaping." },
    ],
    faqs: [
      {
        question: "Do you build to Passivhaus or high energy efficiency standards?",
        answer: "Yes, we construct highly insulated, airtight buildings with Mechanical Ventilation with Heat Recovery (MVHR) and triple glazing to drastically lower operational heating costs.",
      },
    ],
    typicalTimeline: "6 - 12 Months",
    typicalCostRange: "£1,800 - £2,800 per sq/m",
  },
  {
    id: "commercial-builders-cambridge",
    slug: "commercial-builders-cambridge",
    title: "Commercial Builders & Fit-Outs",
    shortDesc: "Professional contracting for office fit-outs, retail refits, educational facilities, and science park laboratory adaptations.",
    category: "Commercial",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Office CAT A & CAT B fit-outs and space reconfigurations",
      "Retail, restaurant, and hospitality venue renovations",
      "Acoustic glazed partitioning and suspended ceiling systems",
      "Commercial electrical, data cabling, and HVAC integration",
      "Full CDM 2015 health & safety compliance",
    ],
    fullDescription: [
      "In Cambridge's thriving commercial, tech, and academic landscape, businesses require modern, flexible, and high-performance workspaces. Builder Cambridge delivers commercial refurbishments on time and on budget, with options for out-of-hours working to minimize business disruption.",
    ],
    whyChooseUs: [
      "Fully insured with comprehensive Public and Employers Liability cover",
      "Experience with Cambridge Science Parks, city-center retail, and institutional properties",
      "Fast turnaround times with strict adherence to programme schedules",
    ],
    processSteps: [
      { title: "1. Brief & Scope", desc: "Detailed requirements analysis, acoustic needs, and layout design." },
      { title: "2. Strip & Infrastructure", desc: "Strip-out, HVAC ducting, power/data floor boxes, and fire suppression." },
      { title: "3. Build & Partitioning", desc: "Demountable glass partitions, boardrooms, breakout hubs, and teapoints." },
      { title: "4. Finishes", desc: "Commercial carpet tiles, bespoke joinery, brand signage, and feature lighting." },
      { title: "5. Handover", desc: "O&M manuals, fire safety certificates, and client walk-through." },
    ],
    faqs: [
      {
        question: "Can work be performed outside of standard business hours?",
        answer: "Yes, we frequently schedule noisy works during evenings and weekends to allow your business operations to continue uninterrupted.",
      },
    ],
    typicalTimeline: "3 - 12 Weeks",
    typicalCostRange: "Custom Commercial Quote",
  },
  {
    id: "design-and-build",
    slug: "design-and-build",
    title: "Design and Build Services",
    shortDesc: "End-to-end architectural design, engineering, council approvals, and construction under one seamless contract.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Single point of contact from preliminary sketch to final handover",
      "Cost-optimized architectural design avoiding budget overruns",
      "Full management of planning applications and party wall notices",
      "3D architectural renders and interior layout walkthroughs",
    ],
    fullDescription: [
      "Our turnkey Design and Build service eliminates the common friction between separate architects and builders. By having our design team and construction managers collaborate from day one, we guarantee that designs are engineered for cost-effective buildability, realistic budgets, and rapid delivery.",
    ],
    whyChooseUs: [
      "No finger-pointing between designer and builder - single source accountability",
      "Accurate cost certainty before you commit to construction",
      "Accelerated project timelines with parallel planning and procurement",
    ],
    processSteps: [
      { title: "1. Architectural Concept", desc: "Initial designs and 3D mockups based on your exact aesthetic and functional brief." },
      { title: "2. Planning & Engineering", desc: "Submission to local planning authority with full structural calculations." },
      { title: "3. Specifications & Materials", desc: "Selection of all bricks, roofing, windows, fixtures, and interior specifications." },
      { title: "4. Precision Build", desc: "Seamless handover to our construction team with regular client review meetings." },
    ],
    faqs: [
      {
        question: "Why choose Design & Build over hiring an independent architect first?",
        answer: "Design & Build gives you fixed-price transparency from the start, preventing situations where an architect designs plans that subsequently cost far more to build than your budget allows.",
      },
    ],
    typicalTimeline: "Full Project Dependent",
    typicalCostRange: "Fixed-Price Turnkey",
  },
  {
    id: "roofing",
    slug: "roofing",
    title: "Roofing & Structural Repairs",
    shortDesc: "Specialist pitched slate and tile roofing, modern EPDM/GRP flat roofs, chimney repairs, and leadwork.",
    category: "Structural",
    heroImage: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Natural Welsh and Spanish slate, clay and concrete tile roofing",
      "Seamless EPDM rubber and GRP fibreglass flat roof systems (25-yr life expectancy)",
      "Traditional lead flashing, valleys, and chimney re-pointing",
      "Fascias, soffits, guttering, and breathable membrane installation",
      "Emergency roof leak repairs and storm damage restoration",
    ],
    fullDescription: [
      "Your roof is your property's first defense against the British weather. Builder Cambridge delivers master roofing services for both historic Cambridge properties requiring heritage-matched slate and contemporary architectural flat roofs. All our new roofs come backed with full insurance-backed guarantees.",
    ],
    whyChooseUs: [
      "Experienced with historic Cambridge heritage roofing requirements",
      "High-performance breathable roofing membranes and insulation upgrades",
      "Neat, safe scaffolding and meticulous waste disposal",
    ],
    processSteps: [
      { title: "1. Roof Inspection", desc: "Detailed drone or physical inspection assessing battens, felt, and tiles." },
      { title: "2. Stripping & Prep", desc: "Safe removal of old materials, installation of new high-grade breathable underlay." },
      { title: "3. Battens & Slating", desc: "Treated timber battens and precision tile/slate fixing with stainless nails." },
      { title: "4. Leadwork & Ridge", desc: "Code 4/5 lead flashing and dry ridge / mortar bedded ridge tiles." },
    ],
    faqs: [
      {
        question: "How long does a new pitched roof last?",
        answer: "A properly installed slate or tile roof with modern breathable membrane will easily protect your home for 50 to 80+ years.",
      },
    ],
    typicalTimeline: "1 - 3 Weeks",
    typicalCostRange: "£6,000 - £25,000+",
  },
  {
    id: "building-regulations",
    slug: "building-regulations",
    title: "Building Regulations & Planning Approvals",
    shortDesc: "Expert navigation of UK Building Regulations, Cambridge planning applications, lawful development certificates, and structural sign-offs.",
    category: "Structural",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Full Building Regulations plan checks and approvals",
      "Structural calculations (beams, lintels, foundations, roof trusses)",
      "Part L thermal efficiency, Part P electrical, and Part B fire compliance",
      "Party Wall surveyor coordination and notice drafting",
      "Liaison with Cambridge City Council & approved inspectors",
    ],
    fullDescription: [
      "Every major building project in the UK must adhere to strict Building Regulations covering structural stability, fire safety, drainage, ventilation, and energy conservation. Builder Cambridge handles the entire compliance cycle, arranging site inspections at key milestones and securing your formal Completion Certificate.",
    ],
    whyChooseUs: [
      "Zero failed inspections track record across Cambridge authorities",
      "Chartered structural engineering partnerships",
      "Guaranteed legally sound documentation for future property resale",
    ],
    processSteps: [
      { title: "1. Specification Review", desc: "Translating architectural plans into detailed building regulation specifications." },
      { title: "2. Structural Sign-Off", desc: "Chartered engineer signs off load-bearing calculations." },
      { title: "3. Application Filing", desc: "Submitting Full Plans application or Building Notice." },
      { title: "4. Milestone Inspections", desc: "Arranging inspector visits for foundations, steelwork, insulation, and drains." },
      { title: "5. Certificate Delivery", desc: "Securing final Building Control Completion Certificate." },
    ],
    faqs: [
      {
        question: "Why is a Building Regulations Completion Certificate essential?",
        answer: "When you eventually sell or remortgage your home, solicitors require this certificate as proof that structural alterations were executed lawfully and safely.",
      },
    ],
    typicalTimeline: "3 - 6 Weeks (Approvals)",
    typicalCostRange: "Included with full builds / Standalone available",
  },
  {
    id: "bifolding-doors",
    slug: "bifolding-doors",
    title: "Bifolding Doors & Architectural Glazing",
    shortDesc: "Ultra-slim aluminium bifolding doors, Crittall-style steel screens, roof lanterns, and large format sliding glass doors.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Thermally broken aluminium frames with low U-values",
      "Flush threshold options for seamless indoor-outdoor transition",
      "Multi-point high security locking systems (PAS 24 / Secured by Design)",
      "Solar control double and triple glazing",
      "Custom RAL colours (Anthracite Grey, Matt Black, Heritage Bronze)",
    ],
    fullDescription: [
      "Connect your interior living room or kitchen directly to your garden with bespoke architectural glazing. Our precision-engineered aluminium bifolding and sliding doors flood your home with natural light, offering effortless glide operation and superb thermal insulation year-round.",
    ],
    whyChooseUs: [
      "Precision laser surveying ensures millimetre-perfect fit",
      "Complete structural opening preparation and steel lintel installation included",
      "10-Year guarantee on mechanisms, glass, and powder coating",
    ],
    processSteps: [
      { title: "1. Survey & Opening Prep", desc: "Exact laser measuring and structural opening modification." },
      { title: "2. Custom Manufacture", desc: "Precision fabrication to your chosen RAL color and panel configuration." },
      { title: "3. Professional Fitting", desc: "Laser levelled installation, thermal perimeter sealing, and drainage setup." },
      { title: "4. Testing & Sign-off", desc: "Smooth roller adjustment, lock testing, and glass cleaning." },
    ],
    faqs: [
      {
        question: "Are aluminium bifold doors energy efficient?",
        answer: "Yes, our bifolding doors feature advanced polyamide thermal breaks and argon-filled Low-E glass, achieving U-values as low as 1.2 W/m²K, well exceeding current building regulations.",
      },
    ],
    typicalTimeline: "1 - 3 Days (Installation)",
    typicalCostRange: "£3,500 - £12,000+",
  },
  {
    id: "underpinning",
    slug: "underpinning",
    title: "Underpinning & Structural Stabilization",
    shortDesc: "Specialist foundation reinforcement, mass concrete underpinning, and subsidence repairs for Cambridge properties.",
    category: "Structural",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Traditional mass concrete bay underpinning",
      "Beam and base foundation reinforcement",
      "Subsidence crack stitching and helical tie-bars",
      "Basement deepening and headroom creation",
      "Certified structural engineer inspections throughout",
    ],
    fullDescription: [
      "Clay soil shrinkage and historic foundation movements are well known across parts of Cambridgeshire. When foundations shift or when you plan to add substantial additional storeys, our underpinning experts safely deepen and stabilize your property's load paths without risking structural damage.",
    ],
    whyChooseUs: [
      "Over 18 years experience handling complex Cambridge soil conditions",
      "Sequential bay excavation to maintain absolute building stability",
      "Insurance approved structural warranties provided",
    ],
    processSteps: [
      { title: "1. Geotechnical & Structural Survey", desc: "Soil test pits and engineer foundation assessment." },
      { title: "2. Sequential Bay Digging", desc: "Excavating alternate numbered pins to avoid undermining the structure." },
      { title: "3. High-Strength Concrete Pour", desc: "Pouring C35 concrete bases up to within 75mm of existing footings." },
      { title: "4. Non-Shrink Dry Packing", desc: "Ramming high-strength non-shrink mortar into the gap for 100% load transfer." },
    ],
    faqs: [
      {
        question: "How do I know if my property needs underpinning?",
        answer: "Diagonal cracks wider than 3mm around windows/doors, sticking doors, or sloping floors may indicate foundation settlement. We can carry out an initial site appraisal.",
      },
    ],
    typicalTimeline: "2 - 6 Weeks",
    typicalCostRange: "Structural Survey Dependent",
  },
  {
    id: "demolition",
    slug: "demolition",
    title: "Demolition & Site Clearance",
    shortDesc: "Safe, controlled residential and light commercial demolition, internal soft-strips, and recycled aggregate site preparation.",
    category: "Groundworks",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Controlled mechanical and manual building demolition",
      "Internal soft strip-out of redundant fixtures and partitions",
      "Asbestos surveys and licensed removal coordination",
      "Site levelling, concrete crushing, and muck-away services",
      "Dust and vibration monitoring for neighboring protection",
    ],
    fullDescription: [
      "Whether clearing a dilapidated bungalow to prepare for a multi-million-pound replacement dwelling or safely taking down an old garage and outbuildings, Builder Cambridge executes demolition with military precision, safety, and thorough recycling practices.",
    ],
    whyChooseUs: [
      "Full Section 80/81 Cambridge Council demolition notices handled",
      "Over 92% of demolition materials sorted and recycled locally",
      "Comprehensive public liability cover for adjacent structures",
    ],
    processSteps: [
      { title: "1. Utility Disconnections", desc: "Safe capping and certification of gas, water, and electric feeds." },
      { title: "2. Environmental Checks", desc: "Asbestos surveys and ecological/bat checks where required." },
      { title: "3. Controlled Demolition", desc: "Systematic top-down demolition using precision plant." },
      { title: "4. Clearance & Grading", desc: "Muck-away removal, ground crushing, and ready-to-build site handover." },
    ],
    faqs: [
      {
        question: "Do you handle council demolition notices?",
        answer: "Yes, we file all required Section 81 notices with the local authority and inform neighboring properties before site commencement.",
      },
    ],
    typicalTimeline: "1 - 3 Weeks",
    typicalCostRange: "£5,000 - £30,000+",
  },
  {
    id: "drainage",
    slug: "drainage",
    title: "Groundwork & Drainage Solutions",
    shortDesc: "Comprehensive foul and surface water drainage, soakaways, CCTV drain surveys, pump stations, and sewer connections.",
    category: "Groundworks",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "New foul and surface water pipework installations",
      "High-capacity attenuation crate soakaway systems",
      "Anglian Water Section 106 sewer connections",
      "CCTV camera surveys and drain unblocking/relining",
      "Aco channel drains and linear driveway water management",
    ],
    fullDescription: [
      "Proper water management is critical for preventing damp, subsidence, and foundation damage. Builder Cambridge installs robust, modern drainage systems for extensions, new builds, and problem-prone existing properties across Cambridgeshire.",
    ],
    whyChooseUs: [
      "Anglian Water approved connection practices",
      "CCTV diagnostic camera reports provided with every drainage job",
      "Laser-graded falls ensuring zero standing water or back-ups",
    ],
    processSteps: [
      { title: "1. Hydraulic Assessment", desc: "Calculating surface run-off and foul loading requirements." },
      { title: "2. Trenching & Pipe Laying", desc: "Excavating trenches, pea shingle bedding, and laser-guided pipe gradients." },
      { title: "3. Inspection Chambers", desc: "Installing modern polypropylene manholes and rodding access points." },
      { title: "4. Testing & Sign-off", desc: "Air and water pressure testing to confirm 100% airtight seals." },
    ],
    faqs: [
      {
        question: "Can you connect our new extension to the main sewer?",
        answer: "Yes, we manage Section 106 applications with Anglian Water and install fully compliant inspection chambers and non-return valves.",
      },
    ],
    typicalTimeline: "3 - 7 Days",
    typicalCostRange: "£2,500 - £12,000+",
  },
  {
    id: "driveways",
    slug: "driveways",
    title: "Driveways & Premium Paving",
    shortDesc: "Bespoke block paving, resin bound stone, porcelain patios, natural sandstone, and tarmac driveways.",
    category: "Groundworks",
    heroImage: "https://images.unsplash.com/photo-1584463699039-4458d697858c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "SUDS-compliant permeable block paving and gravel grids",
      "UV-stable resin bound aggregate surfaces with smooth finishes",
      "Italian outdoor porcelain and Indian sandstone patios",
      "Heavy-duty MOT Type 1 sub-base compaction (guaranteed no sinking)",
      "Brick retaining walls, integrated lighting, and kerb borders",
    ],
    fullDescription: [
      "Create magnificent curb appeal and durable off-street parking with a custom driveway designed and installed by Builder Cambridge. We specialize in permeable resin bound, classic block paving, and contemporary porcelain surfaces engineered to withstand decades of vehicular traffic.",
    ],
    whyChooseUs: [
      "Extra deep excavations with geotextile weed suppression membrane",
      "SUDS compliant designs requiring zero planning permission",
      "10-Year anti-sinking and workmanship warranty",
    ],
    processSteps: [
      { title: "1. Excavation", desc: "Digging out to 250mm depth to remove organic soil and unstable subgrades." },
      { title: "2. Sub-base Compaction", desc: "Laying and vibrating high-density MOT Type 1 crushed stone." },
      { title: "3. Edge Restraints", desc: "Concrete-haunched kerb stones and drainage aco channels." },
      { title: "4. Surface Laying", desc: "Precision laying of block paving, resin stone, or porcelain slabs with polymeric jointing." },
    ],
    faqs: [
      {
        question: "Do I need planning permission to pave my front garden in Cambridge?",
        answer: "If you use permeable surfaces (such as resin bound or permeable block paving) or direct water to a lawn/soakaway, planning permission is not required.",
      },
    ],
    typicalTimeline: "1 - 2 Weeks",
    typicalCostRange: "£5,000 - £20,000+",
  },
  {
    id: "kerb-and-kerb-dropping",
    slug: "kerb-and-kerb-dropping",
    title: "Kerbs & Drop Kerb Approved Works",
    shortDesc: "Cambridgeshire County Council approved vehicle crossover installations and drop kerb civil works.",
    category: "Groundworks",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1584463699039-4458d697858c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Cambridgeshire County Council Section 184 permit compliance",
      "NRSWA (Street Works Act) accredited operatives",
      "Heavy duty tactile paving and bullnose kerb installation",
      "Hot-rolled asphalt and tarmac footpath reinstatement",
      "Utility ducting protection (gas, water, telecom cables)",
    ],
    fullDescription: [
      "Driving across a public pavement without a legally approved drop kerb is illegal and can damage underground utility cables. As accredited Street Works contractors, Builder Cambridge assists with highway licence applications and installs council-compliant vehicle crossovers.",
    ],
    whyChooseUs: [
      "Fully qualified Street Works supervisors and operatives on site",
      "Direct coordination with Cambridgeshire Highways Department",
      "£10M Public Liability insurance required for working in public highway",
    ],
    processSteps: [
      { title: "1. Council Application", desc: "Assisting with Section 184 licence filing with Cambridgeshire County Council." },
      { title: "2. Traffic Management", desc: "Setting up Chapter 8 compliant barriers and pedestrian diversions." },
      { title: "3. Kerb Removal & Excavation", desc: "Excavating pavement to highway specification depth." },
      { title: "4. Kerb Laying & Tarmac", desc: "Laying dropped kerbs, transition kerbs, base course, and wearing course tarmac." },
    ],
    faqs: [
      {
        question: "How long does it take to get council approval for a dropped kerb?",
        answer: "Cambridgeshire County Council usually takes between 4 and 8 weeks to assess applications. Once approved, the physical drop kerb work takes just 2-3 days.",
      },
    ],
    typicalTimeline: "2 - 3 Days (On-site)",
    typicalCostRange: "£1,800 - £3,800",
  },
];
