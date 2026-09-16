export interface ExtensionTypeItem {
  name: string;
  badge?: string;
  description: string;
  features?: string[];
}

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
  whyChooseUsTitle?: string;
  whyChooseUs: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  typicalTimeline: string;
  typicalCostRange: string;
  badge?: string;
  contentHeading?: string;
  weCoverTitle?: string;
  weCoverIntro?: string;
  weCoverOutro?: string;
  weCoverBullets?: string[];
  weCoverItems?: ExtensionTypeItem[];
  secondaryDescription?: string[];
  competitiveAdvantage?: {
    heading: string;
    text: string;
    points: string[];
  };
  customSpecificationNote?: {
    heading: string;
    text: string;
    secondaryText?: string;
    points?: string[];
  };
  regulationsNotice?: {
    heading: string;
    text: string;
    phone: string;
    email: string;
  };
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
      "BuilderCambridge.com believe that the space you have around your house can be the start of something totally amazing. This can be used for almost everything and anything. The House Extensions Cambridge Division have the technical knowledge and know how that can be used to fully utilise the space that is found around your house. Adding a new Cambridge House Extension is a good solution for a bigger, more modern kitchen. A House Extension can be designed to create an amazing living area to entertain and dine or perhaps even office space for a home business. The House Extension division can ensure that you get the most out of your house.",
      "BuilderCambridge.com has proven results for setting exceptional standards in cost control, planning, scheduling and project safety. We have the experience that gives us a competitive advantage over others in our field.",
      "We understand that an extension for your house can be quite versatile, this is why we have trained our team to be able to deal with any customer specification for a Home Extension in Cambridge. So we will make sure that any work that the House Extension Cambridge Division perform for you is of the highest standards and also customised to your specifications and requirements.",
    ],
    weCoverTitle: "We cover",
    weCoverIntro: "Our House Extensions Cambridge Division delivers all major extension configurations across Cambridge and South Cambridgeshire:",
    weCoverItems: [
      {
        name: "Side Return Extension",
        badge: "Terraced & Semi-Detached",
        description: "Transform unused, narrow side alleyways on Victorian and Edwardian houses into expansive open-plan kitchen-diners with floor-to-ceiling glass and seamless garden integration.",
        features: ["Unlocks dead external space", "Maximizes kitchen width", "Architectural rooflights"],
      },
      {
        name: "Glass Extension",
        badge: "Maximum Daylight",
        description: "Contemporary structural glass boxes, ultra-slim aluminium bi-folding doors, and frameless roof lanterns that flood your home with natural light.",
        features: ["Ultra-slim sightline aluminium", "Solar-control low-E glazing", "Flush threshold indoor-outdoor transition"],
      },
      {
        name: "Single Storey Extension",
        badge: "Most Popular",
        description: "Our most requested Cambridge home extension. Extend outwards up to 6m to 8m under Permitted Development for spacious family living hubs.",
        features: ["Permitted Development handling", "Open-plan structural steel RSJs", "Custom kitchen & dining layouts"],
      },
      {
        name: "Double Storey Extension",
        badge: "Maximum Space & ROI",
        description: "Substantially expand both ground and upper floors simultaneously. Create expansive entertaining space below and master ensuite bedrooms above.",
        features: ["Highest value addition per sq/m", "Ensuite master suites & dressing rooms", "Full structural loading calculations"],
      },
      {
        name: "Over Structure Extension",
        badge: "Zero Footprint Loss",
        description: "Extend vertically above existing ground-floor garages or extensions with certified structural steel reinforcement without reducing garden area.",
        features: ["Preserves full garden footprint", "Reinforced RSJ steel framework", "Creates new bedrooms or home offices"],
      },
    ],
    competitiveAdvantage: {
      heading: "Exceptional Standards in Cost Control & Planning",
      text: "BuilderCambridge.com has proven results for setting exceptional standards in cost control, planning, scheduling and project safety. We have the experience that gives us a competitive advantage over others in our field.",
      points: [
        "Fixed-price itemized contracts with locked-in stage payments and zero hidden costs",
        "Dedicated site managers for daily trade updates and scheduled milestone tracking",
        "Strict UK Building Regulations and Health & Safety (CDM 2015) compliance",
        "Over 18 years of specialized Cambridge construction and planning experience",
      ],
    },
    customSpecificationNote: {
      heading: "Customised to Your Exact Specifications",
      text: "We understand that an extension for your house can be quite versatile, this is why we have trained our team to be able to deal with any customer specification for a Home Extension in Cambridge. So we will make sure that any work that the House Extension Cambridge Division perform for you is of the highest standards and also customised to your specifications and requirements.",
      points: [
        "Bespoke kitchen layouts, breakfast bars & luxury cabinetry",
        "Hydronic & electric underfloor heating systems with smart zone controls",
        "Structural knock-throughs & load-bearing partition removals",
        "Hand-matched Cambridge Gault brickwork and conservation detailing",
      ],
    },
    regulationsNotice: {
      heading: "Building Regulations & Quotation Support",
      text: "For more information about Building Regulations or to arrange a quotation call us on 01223 782 433 or email us at info@buildercambridge.com",
      phone: "+44 1223 782433",
      email: "info@buildercambridge.com",
    },
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
      "Loft Conversions are fast becoming the most popular of all conversions. They can add 30% of extra space to properties and can add £100,000 to the value of properties in some areas within Cambridge. On average they add around 20% to 25% and are seen as a wise investment by many home owners.",
      "Loft Conversions can be created for many uses including a Master Suite Bedroom, Kids Room, Home Office or a Guest Room. Some homes are converted to flats and even Kitchens and Living areas can be installed within the attic.",
      "The Loft Conversion Cambridge team can build a new Loft Conversion within a few months. They specialise in Loft Conversions only and are highly skilled at constructing new Lofts.",
      "The Loft Conversion Cambridge team keep the mess to a minimum by accessing the Loft Conversion area from outside the roof using the scaffolding for access. They use this area for access until they fully complete the Loft Conversion and lastly install the new staircase. This method keeps dust levels low and eliminate the need to transfer tools and dirt through the property.",
    ],
    weCoverTitle: "What does BuilderCambridge.com cover?",
    weCoverIntro: "Loft conversions fall into one of four basic types.",
    weCoverOutro: "Most lofts will not require planning permission but all must adhere to the current regulations set by Building Control.",
    weCoverItems: [
      {
        name: "Velux",
        badge: "Cost-Effective & Permitted",
        description: "Retains the existing roof shape with premium Velux rooflights fitted flush into the roof slope. Ideal for conservation areas and properties with ample existing ridge height.",
        features: ["Minimal structural changes", "Fast turnaround (4-6 weeks)", "Permitted Development compliant"],
      },
      {
        name: "Dormer",
        badge: "Most Popular & Spacious",
        description: "A flat-roof extension projecting vertically from the sloping roof plane, delivering maximum vertical headroom, standard window installation, and expansive floor space.",
        features: ["Maximum internal usable volume", "Full-height ceilings & vertical walls", "Accommodates luxury ensuites"],
      },
      {
        name: "Mansard",
        badge: "Classic Architectural Elegance",
        description: "Replaces one or both roof pitches with a steep 72-degree slope and flat top roof. Provides an exceptional aesthetic that blends with historic Cambridge streetscapes.",
        features: ["Maximum floor-to-ceiling space", "Suits period Victorian & Edwardian homes", "High property value addition"],
      },
      {
        name: "Hip to Gable",
        badge: "Semi-Detached & End-Terrace",
        description: "Extends the sloping side 'hip' roof outwards into a vertical gable wall, unlocking substantial extra staircase headroom and interior bedroom space.",
        features: ["Ideal for 1930s semis & chalets", "Accommodates full permanent staircase", "Combined with rear dormer for maximum space"],
      },
    ],
    customSpecificationNote: {
      heading: "Is My Roof Suitable?",
      text: "Most roofs can be converted as long as there is sufficient head room. A minimum height of at least 2.1 meters is required from floor to roof spine. If the height is low then we can still install a Loft Conversion by lowering the ceilings below to achieve more headroom above.",
      secondaryText: "BuilderCambridge.com has proven results for setting exceptional standards in cost control, planning, scheduling and project safety. We have the experience that gives us a competitive advantage over others in our field.",
      points: [
        "Minimum height of at least 2.1 meters required from floor to roof spine",
        "Ceiling lowering engineering available below to achieve more headroom",
        "Scaffolding exterior access keeping living area mess & dust to a minimum",
        "Dedicated team constructing new lofts within a few months",
      ],
    },
    regulationsNotice: {
      heading: "Building Regulations & Quotation",
      text: "For more information about Building Regulations or to arrange a quotation call us on 01223 782 433 or email us at info@buildercambridge.com",
      phone: "01223 782 433",
      email: "info@buildercambridge.com",
    },
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
    title: "Interior Renovation",
    contentHeading: "INTERIOR RENOVATION",
    shortDesc: "Complete high-end interior remodelling, bespoke luxury kitchens, designer bathrooms, and structural wall removals across Cambridge.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Load-bearing wall removals with RSJ steel beam insertion",
      "Luxury custom kitchen fitting and island breakfast bars",
      "Spa-grade bathrooms, wetrooms, and underfloor heating",
      "Plastering, microcement, and architectural LED lighting",
      "Hardwood, chevron parquet, and large format porcelain tiling",
      "All installations carried out by fully trained staff",
    ],
    fullDescription: [
      "When it comes to choosing a renovator to transform the interior of your home, quality and trust should never be compromised. Working with a professional is an absolute must. With over 10 years experience and a real focus on customer satisfaction, you can rely on us for your next renovation, extension or home repair. Our installations are carried out by fully trained staff to the highest professional standards. Always on time and on budget.",
      "BuilderCambridge.com has proven results for setting exceptional standards in cost control, planning, scheduling and project safety. We have the experience that gives us a competitive advantage over others in our field.",
    ],
    whyChooseUsTitle: "WHY CHOOSE US",
    whyChooseUs: [
      "Financial Responsibility to Our Clients",
      "Superior Quality and Craftsmanship",
      "Quality and Value to the Projects We Deliver",
      "Highest Standards in Cost Control",
      "On Time and on Budget",
      "Real Focus on Customer Satisfaction",
    ],
    regulationsNotice: {
      heading: "Building Regulations & Quotation",
      text: "For more information about Building Regulations or to arrange a quotation call us on 01223 782 433 or email us at info@buildercambridge.com",
      phone: "01223 782 433",
      email: "info@buildercambridge.com",
    },
    processSteps: [
      { title: "1. Spatial Planning & Design", desc: "Detailed CAD layout review and 3D concept planning to maximise living space and natural light." },
      { title: "2. Demolition & Structural Prep", desc: "Careful strip-out, non-structural and load-bearing partition removals with temporary Acrow propping." },
      { title: "3. First Fix Plumbing & Electrics", desc: "Rerouting pipework, smart LED lighting conduits, underfloor heating, and data cabling." },
      { title: "4. Installation & Tiling", desc: "Bespoke cabinetry fitting, precision porcelain tiling, luxury sanitaryware, and flooring." },
      { title: "5. Decoration & Sparkle Handover", desc: "Finishing coats, mastic sealants, hardware fitting, and professional sparkle clean." },
    ],
    faqs: [
      {
        question: "Can you knock down a load-bearing wall for open-plan living?",
        answer: "Yes, we specialize in structural knock-throughs. Our structural engineer specifies the correct steel RSJ, and we manage building control notifications and sign-offs seamlessly.",
      },
      {
        question: "How do you ensure projects stay on time and on budget?",
        answer: "We provide detailed, transparent milestone schedules and fixed-price itemized quotations with zero hidden surprises before any work commences.",
      },
      {
        question: "Do your staff carry certified trade credentials?",
        answer: "All our installations are carried out by fully trained staff to the highest professional standards, including NICEIC certified electricians and Gas Safe engineers.",
      },
    ],
    typicalTimeline: "3 - 8 Weeks",
    typicalCostRange: "£15,000 - £60,000+",
    badge: "10+ Years Experience",
  },
  {
    id: "refurbishments-cambridge",
    slug: "refurbishments-cambridge",
    title: "Refurbishments Cambridge",
    contentHeading: "Refurbishments Cambridge.",
    shortDesc: "Complete house and premise refurbishments across Cambridge. From initial design and materials supply to groundwork and full finish.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Initial Design, spatial planning & 3D concept visualization",
      "Planning and supply of materials with zero middleman markups",
      "Foundations, groundwork & structural load-bearing alterations",
      "Kitchen, bathroom, and entire premises transformations",
      "Tailored to every inch and centimetre of your specifications",
      "100% customer satisfaction & peace of mind guarantee",
    ],
    fullDescription: [
      "At BuilderCambridge.com we are constantly offering our clients a wide range of Refurbishments in Cambridge. Our builders in Cambridge have a wide range of knowledge when it comes down to refurbishing your house, this knowledge has increased greatly for every consecutive year that we have been up and running.",
      "At BuilderCambridge.com we believe that the space inside your premise is just the start of everything and anything. Our Builders have a vast amount of knowledge when it comes down to turning all of the empty space inside your house into a room which can be used and enjoyed for many hours, not only this but it will also add a great deal of value to your house.",
      "We feel that refurbishments are the best way for any house owner to add a large amount of value towards their property while still being able to enjoy the extra space provided.",
      "If they are required to do so then our BuilderCambridge.com will be able to talk you through the entire process of your refurbishment from the start to the finish of the project.",
      "Since we can take on a project from start to finish and complete it to the very high standards that we set here, this complete service allows us to be the perfect company for all of our clients who need many different tasks performed. We eliminate the process of finding a middle man for certain tasks and this makes sure that our clients do not have to go and  sub contract other tradesmen for tasks that we can perform for your kitchen in Cambridge.",
      "Due to the large amount of experience that our BuilderCambridge.com have acquired over the years we can tailor all of our work and projects from the initial design and concept all the way to the installation and completion of the work. We will not allow for any centimetre or inch of space to go to waste when refurbishing  your home in Cambridge.",
      "We strive to make sure that the clients we perform work on have complete peace of mind before we completely wrap up any work. If at any point during the work or initial design and concept you are not completely happy then please make sure to talk to one of our technicians as they will make to use their vast amount of knowledge to help answer that question so that you can achieve 100% customer satisfaction and have complete peace of mind. This kind of work ethic has given us a great stream of recommendations and referrals from the Cambridge area.",
    ],
    weCoverTitle: "Here is a list of what we will cover in a refurbishments Cambridge service:",
    weCoverBullets: [
      "Initial Design.",
      "Planning and Supply of Materials.",
      "Foundations and Groundwork.",
    ],
    weCoverItems: [
      {
        name: "Initial Design",
        badge: "Concept & Architecture",
        description: "Complete spatial planning, 3D concept designs, and architectural layout specifications. We tailor every inch and centimetre so that not a single bit of space goes to waste.",
        features: [
          "Architectural space planning & room conversion",
          "Concept development & layout optimization",
          "Full pre-construction client design consultations",
        ],
      },
      {
        name: "Planning and Supply of Materials",
        badge: "Turnkey Procurement",
        description: "Complete end-to-end planning and direct trade supply of all construction materials, luxury fixtures, and kitchen/interior fittings with no middleman markups.",
        features: [
          "Direct wholesale material procurement",
          "Eliminates finding middle men or sub-contractors",
          "Full trade coordination from start to finish",
        ],
      },
      {
        name: "Foundations and Groundwork",
        badge: "Structural Integrity",
        description: "Sub-structure repairs, underpinning, solid screed flooring, and structural load-bearing knock-throughs executed to strict Cambridge building control standards.",
        features: [
          "Sub-base ground preparation & screeding",
          "Load-bearing wall removals & steel RSJ installation",
          "100% Building Regulations sign-off",
        ],
      },
    ],
    secondaryDescription: [
      "We like to know that we look after our customers and we do this by making sure that our company can provide all of the services that you would ever need for a refurbishment. This helps us to save our clients a lot of time and money as we can completely cater for all of your needs when it comes down to having a refurbishments.",
      "The team of expert Builders who works with us can tailor any job that they perform to the exact needs of a client and can also tailor every inch and centimetre to the exact specifications of a client. All of these small tweaks and changes helps us to give our customers the best in refurbishments in Cambridge.",
      "We always pride our company on making sure that our customers achieve complete peace of mind before we completely wrap up any of the jobs that we do. If one of our clients has a query or question about any work that we do then please make sure to ask one of our technicians as they will be more than happy to give you complete peace of mind and 100% customer satisfaction. This type of work ethic has greatly helped our company over the last few years as we have received a wide range of successful and profitable stream of recommendations from our highly valued customers.",
      "If you feel like enquiring about a new refurbishments in Cambridge then please make sure to contact us and we will arrange it so that one of our technicians visits your location and gives you a free no obligation quote which you can then review to your own liking and then contact us whenever it suits you best.",
    ],
    regulationsNotice: {
      heading: "Building Regulations & Quotation",
      text: "For more information about Building Regulations or to arrange a quotation call us on 01223 782 433 or email us at info@buildercambridge.com",
      phone: "01223 782 433",
      email: "info@buildercambridge.com",
    },
    whyChooseUs: [
      "Comprehensive end-to-end service with zero need for middle men or external sub-contractors",
      "Tailor every inch and centimetre of space to your exact personal specifications",
      "Free no-obligation on-site surveys and detailed transparent quotation",
      "100% customer satisfaction and complete peace of mind work ethic",
    ],
    processSteps: [
      { title: "1. Initial Design & Space Planning", desc: "We evaluate your property layout, listening to your exact specifications to ensure not a single centimetre goes to waste." },
      { title: "2. Planning & Materials Procurement", desc: "Direct trade sourcing and coordination of all premium building materials, fixtures, and fittings at wholesale rates." },
      { title: "3. Foundations & Groundwork", desc: "Sub-floor preparation, underpinning, load-bearing partition knock-throughs, and structural steel reinforcement." },
      { title: "4. Turnkey Installation & Trades", desc: "In-house joinery, plumbing, NICEIC electricals, plastering, kitchen cabinetry, and tiling without any middle men." },
      { title: "5. Sign-off & Peace of Mind Handover", desc: "Comprehensive quality checks, Building Regulations certification, and complete client satisfaction sign-off." },
    ],
    faqs: [
      {
        question: "What does your Cambridge refurbishment service cover?",
        answer: "We cover every phase of property refurbishments: initial spatial design, planning and wholesale supply of materials, groundwork and structural knock-throughs, kitchen and bathroom installations, electrical rewiring, plumbing, and pristine decorative finishes.",
      },
      {
        question: "Do I need to hire separate tradesmen or middle men?",
        answer: "No. Since we manage projects from start to finish, we eliminate the need for middle men or third-party sub-contractors. This ensures faster timelines, better communication, and cost savings passed directly to you.",
      },
      {
        question: "How do I arrange a quotation for my refurbishment in Cambridge?",
        answer: "Simply contact us on 01223 782 433 or email info@buildercambridge.com. We will arrange for one of our technicians to visit your location and provide a free, no-obligation quote.",
      },
    ],
    typicalTimeline: "6 - 14 Weeks",
    typicalCostRange: "£25,000 - £90,000+",
    badge: "Full Turnkey",
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
    heroImage: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=800&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
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
