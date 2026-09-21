export interface ExtensionTypeItem {
  name: string;
  badge?: string;
  description: string;
  features?: string[];
}

export interface CustomContentSection {
  heading?: string;
  intro?: string;
  bullets?: string[];
  text?: string;
  secondaryText?: string;
  paragraphs?: string[];
  isCallout?: boolean;
  calloutPhone?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: "Residential" | "Structural" | "Commercial" | "Groundworks";
  heroImage: string;
  galleryImages: string[];
  features?: string[];
  fullDescription: string[];
  whyChooseUsTitle?: string;
  whyChooseUsIntro?: string;
  whyChooseUsCards?: {
    title: string;
    description: string;
    badge?: string;
  }[];
  whyChooseUs?: string[];
  processSteps?: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
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
  dualSections?: {
    title: string;
    items: string[];
  }[];
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
  customSections?: CustomContentSection[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "extensions-cambridge",
    slug: "extensions-cambridge",
    title: "House Extensions Cambridge",
    shortDesc: "Bespoke single and double-storey home extensions designed to maximize living space, light, and property value across Cambridge.",
    category: "Residential",
    heroImage: "/services-images/House-Extension-London-1024x683.jpg",
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
    heroImage: "/services-images/loft-conversion.jpg",
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
    heroImage: "/services-images/Cambridge-refurbishment.jpg",
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
    title: "New Builds Cambridge",
    contentHeading: "New Builds Cambridge",
    shortDesc: "Comprehensive turnkey new build homes and residential construction across Cambridge. From initial design to full finish and landscaping.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Initial architectural design & full spatial planning",
      "Planning and wholesale supply of all materials",
      "Foundations, structural groundworks & drainage",
      "Bricklaying, structural masonry & precision roofing",
      "Complete plumbing, electric (NICEIC) & gas installations",
      "Decor-ready interior finish & optional tied-in landscaping",
    ],
    fullDescription: [
      "At Cambridge Builder we can offer our clients a whole range of new builds in Cambridge. Our builders have managed to gain a wide range of knowledge when it comes down to new builds for your house in Cambridge, this knowledge has improved for every year that we have been up and running.",
      "At Cambridge Builder we believe that the space inside your premise is just the start of everything, we have the know about and skill required to turn any empty space into a well used room that could not only add hours to the joy and fun into your life but also a great amount of value towards your house.",
      "We feel that new builds are the best way for any owner of a house to add a large amount of value towards their premise while still being able to enjoy the extra space.",
      "Our Builders will be able to take you through the entire process from start to finish.",
    ],
    weCoverTitle: "Here is what we cover in our full and in detail new builds Cambridge service:",
    weCoverBullets: [
      "Initial Design.",
      "Planning and Supply of Materials.",
      "Foundations and Groundwork.",
      "Bricklaying and Roof Building.",
      "Connections with primary house utilities.",
      "Plumbing, electric and gas supply installed.",
      "Finished ready for interior decoration.",
      "Optional tied in landscaping.",
    ],
    weCoverItems: [
      {
        name: "Initial Design",
        badge: "Architecture & Planning",
        description: "Full architectural concepts, 3D space modeling, structural engineering calculations, and planning permissions tailored to your exact lifestyle brief.",
        features: ["3D Spatial Concepts", "Building Regulations Approval", "Energy Efficiency Strategy"],
      },
      {
        name: "Planning & Supply of Materials",
        badge: "Trade Procurement",
        description: "Direct wholesale sourcing of certified bricks, timber, insulation, roofing slates, and luxury fittings with zero middleman markups.",
        features: ["Wholesale Trade Pricing", "Rigorous Quality Assurance", "Scheduled Delivery Logistics"],
      },
      {
        name: "Foundations and Groundwork",
        badge: "Substructure Engineering",
        description: "Precision site excavation, engineered concrete trench/raft foundations, damp-proof membranes, and deep underground drainage systems.",
        features: ["Engineered Foundations", "Ground Gas & Damp Membranes", "Drainage Utility Layouts"],
      },
      {
        name: "Bricklaying & Roof Building",
        badge: "Superstructure Integrity",
        description: "Traditional Cambridge cavity wall bricklaying, structural steel lintels, bespoke timber roof trusses, and weatherproof slate or clay tile roofing.",
        features: ["Matching Cambridge Brickwork", "Certified Timber Trusses", "Long-Life Weatherproofing"],
      },
      {
        name: "Connections with Primary Utilities",
        badge: "Main Infrastructure",
        description: "Coordination and hook-up with local Cambridge water, electricity, gas, and high-speed communications networks.",
        features: ["Mains Water & Sewage Tie-In", "Gas & Electric Grid Connect", "Fibre & Smart Conduits"],
      },
      {
        name: "Plumbing, Electric & Gas Installed",
        badge: "Certified Systems",
        description: "Comprehensive internal MEP services executed by NICEIC certified electricians and Gas Safe engineers, including central heating and heat pumps.",
        features: ["Gas Safe Certified Heating", "NICEIC Electrical Wiring", "Energy-Smart Climate Control"],
      },
      {
        name: "Finished Ready for Interior Decoration",
        badge: "Turnkey Finish",
        description: "Smooth skim plaster finish across all walls and ceilings, interior doors, skirting, architraves, and architectural ironmongery fitted.",
        features: ["Pristine Skim Plastering", "Joinery & Custom Woodwork", "Sparkle Clean Handover"],
      },
      {
        name: "Optional Tied-in Landscaping",
        badge: "Exterior Harmony",
        description: "Complete external hard and soft landscaping, stone patios, permeable driveways, lawn seeding, and boundary fencing.",
        features: ["Stone Patios & Pathways", "Permeable Resin/Block Drives", "Boundary Enclosures & Turf"],
      },
    ],
    secondaryDescription: [
      "We feel that because we can take on any project from start to finish and complete it to the the the very high standards we set here, that we are really saving our clients a lot of hassle by making sure that they do not have to go out and make sure to contract companies to take care of each and every single task as we can make sure that we cater for all of your needs.",
      "Our team of experts can tailor any job to our clients exact needs and wants for the job in hand and every single inch and centimetre is covered to make sure that nothing goes to waste, this helps you to make sure that you get great value for money on every job that we undertake. We are best in new builds Cambridge.",
      "We pride on making sure that our clients are always at peace of mind before we close any jobs and that they always have complete peace of mind when it comes down to the work that we do. If a client has a question or query about any of the work that we do then they are more than happy to ask one of our builders and they will use their know about with regards to new builds in Cambridge and  to help make sure that the client is always happy with our work. This work ethic has given us a great stream of referrals from the Cambridge area.",
    ],
    regulationsNotice: {
      heading: "Building Regulations & Quotation",
      text: "For more information about Building Regulations or to arrange a quotation call us on 01223 782 433 or email us at info@buildercambridge.com",
      phone: "01223 782 433",
      email: "info@buildercambridge.com",
    },
    whyChooseUs: [
      "Complete plot-to-key build under one roof - zero hassle finding separate trade contractors",
      "Tailor every inch and centimetre so not a single piece of space goes to waste",
      "Complete peace of mind with 10-Year structural warranty on new homes",
      "Free site visits, feasibility guidance, and detailed transparent quotations",
    ],
    processSteps: [
      { title: "1. Land Appraisal & Initial Design", desc: "Site evaluation, architectural planning, 3D modeling, and local council planning submission." },
      { title: "2. Groundwork & Utilities Infrastructure", desc: "Engineered foundations, damp membranes, and trenching for primary utility connections." },
      { title: "3. Superstructure & Watertight Roof", desc: "Structural brickwork, blockwork cavity walls, timber trusses, and slate or tile roof covering." },
      { title: "4. Internal First & Second Fix Trades", desc: "Certified electrical rewiring, gas/heat pump plumbing, insulation, and skim plastering." },
      { title: "5. Turnkey Completion & Landscaping", desc: "Joinery, decorative prep, optional exterior landscaping, and Building Control certification." },
    ],
    faqs: [
      {
        question: "What does your Cambridge new build service cover?",
        answer: "We cover every stage from start to finish: initial design, materials supply, groundwork, brickwork, roofing, utilities, plumbing, electrical, interior finishes, and optional landscaping.",
      },
      {
        question: "Do I need to hire separate subcontractors for utilities or groundwork?",
        answer: "No. Since we take on projects from start to finish, we save our clients the hassle of contracting separate companies. We manage all trades and utilities directly under one accountable team.",
      },
      {
        question: "How do I arrange a quotation for a new build in Cambridge?",
        answer: "Call us directly on 01223 782 433 or email info@buildercambridge.com to schedule a consultation with one of our builders and arrange a free feasibility review and quotation.",
      },
    ],
    typicalTimeline: "6 - 12 Months",
    typicalCostRange: "£1,800 - £2,800 per sq/m",
    badge: "Turnkey Plot-to-Key",
  },
  {
    id: "commercial-builders-cambridge",
    slug: "commercial-builders-cambridge",
    title: "Commercial Builders Cambridge",
    contentHeading: "Commercial Builders Cambridge",
    shortDesc: "Specialist domestic and commercial builders in Cambridge. From steel frame buildings and office refurbishments to complete facilities management.",
    category: "Commercial",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Steel frame construction, commercial offices & industrial units",
      "Full office CAT A & CAT B fit-outs, partitioning and reconfigurations",
      "Commercial concreting, car parks, roads and access infrastructure",
      "Complete facilities management, security, fire protection & M&E",
      "Out-of-hours scheduled works to ensure zero business downtime",
      "Same-day site visit and consultation across Cambridge",
    ],
    fullDescription: [
      "BuilderCambridge.com specialise in both domestic and commercial builds.",
      "We have gained experience through working with different architects and developers which gives us a well-rounded skill set to complete any job to beyond the contracted standard.",
      "Whether you need a whole new office block, car park or refurbishment of a dated property, BuilderCambridge.com are here to help.",
      "Contact us today on 01223 782433. Pick up the phone today to speak to one of our helpful advisors and arrange a same day site visit within Cambridge.",
    ],
    dualSections: [
      {
        title: "Commercial Construction",
        items: [
          "Steel Frame Buildings",
          "Industrial, Commercial and Office New Builds.",
          "Office Refurbishments",
          "Maintenance",
          "Industrial and Commercial Renovation",
          "Concreting",
          "Road Construction",
          "Optional tied in landscaping.",
        ],
      },
      {
        title: "Facilities Management",
        items: [
          "Office Cleaning.",
          "Security Staff",
          "Heating and ventilation. Upgrades and Service",
          "Security, CCTV and Alarm Installations, Monitoring and Management",
          "Lighting and Electrical, Portable Appliance Testing, Commercial Rewiring, supply and installations",
          "Fire Protection, Extinguishers, Alarms, Sprinklers, Lighting, Signage and Maintenance",
          "Waste Management and Recycling, Electrical, Plastic Waste Removal and Paper Shredding",
          "Relocation, Logistics and Management",
        ],
      },
    ],
    whyChooseUs: [
      "Experienced working with leading architects and commercial developers",
      "Well-rounded skill set delivering beyond the contracted standard",
      "Same-day site visits arranged within Cambridge on 01223 782433",
      "Full turnkey support from primary civil engineering to facilities management",
    ],
    regulationsNotice: {
      heading: "Same Day Site Visit & Commercial Quotation",
      text: "Contact us today on 01223 782433. Pick up the phone today to speak to one of our helpful advisors and arrange a same day site visit within Cambridge.",
      phone: "01223 782 433",
      email: "info@buildercambridge.com",
    },
    processSteps: [
      { title: "1. Same-Day Site Consultation", desc: "Our commercial surveyors meet at your facility to assess operational scope and technical requirements." },
      { title: "2. Cost Modeling & Value Engineering", desc: "Detailed tender pricing, programme scheduling, and material procurement strategies." },
      { title: "3. CDM 2015 Health & Safety Plan", desc: "Robust site safety management, risk assessments, and environmental impact planning." },
      { title: "4. Phased Master Construction", desc: "Execution with options for evening and weekend phasing to minimize commercial disruption." },
      { title: "5. Handover & Facilities Integration", desc: "Comprehensive O&M documentation, building control sign-off, and ongoing facilities support." },
    ],
    faqs: [
      {
        question: "Can work be performed outside of standard business hours?",
        answer: "Yes. We frequently schedule noisy or structural works during evenings and weekends to allow your business operations to continue uninterrupted.",
      },
      {
        question: "Do you offer facilities management alongside commercial building?",
        answer: "Yes. We provide complete facilities support including HVAC servicing, commercial electrical testing (PAT), fire protection, CCTV security, waste management, and office cleaning.",
      },
      {
        question: "How quickly can you arrange a site visit in Cambridge?",
        answer: "We offer same-day site visits within the Cambridge area. Simply call our office on 01223 782 433 to speak directly with an advisor.",
      },
    ],
    typicalTimeline: "3 - 16 Weeks",
    typicalCostRange: "Competitive Commercial Tender",
    badge: "Commercial & Domestic",
  },
  {
    id: "design-and-build",
    slug: "design-and-build",
    title: "Design and Build",
    contentHeading: "DESIGN AND BUILD",
    shortDesc: "End-to-end architectural design, planning permissions, cost engineering, and master construction under one seamless contract.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Single point of contact from initial architectural concept to completion",
      "Integrated cost control avoiding budget inflation and unexpected delays",
      "Full planning permission, building control & structural calculations handled",
      "3D architectural layouts, walkthroughs & material selection",
      "Installations carried out by fully trained staff to highest standards",
      "10-Year structural guarantee on all completed building works",
    ],
    fullDescription: [
      "When it comes to choosing a renovator to transform the interior of your home, quality and trust should never be compromised. Working with a professional is an absolute must. With over 10 years of experience and a real focus on customer satisfaction, you can rely on us for your next renovation, extension or roofing repair. Our installations are carried out by fully trained staff to the highest professional standards. Always on time and on budget.",
      "BuilderCambridge.com has proven results for setting exceptional standards in cost control, planning, scheduling and project safety. We have the experience that gives us a competitive advantage over others in our field.",
    ],
    whyChooseUsTitle: "WHY CHOOSE US",
    whyChooseUs: [
      "Financial Responsibility to Our Clients",
      "Superior Quality and Craftsmanship",
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
      { title: "1. Brief & Architectural Consultation", desc: "We meet on-site to understand your lifestyle goals, space aspirations, and financial framework." },
      { title: "2. Concept Design & Cost Engineering", desc: "Developing initial 3D plans matched against realistic construction cost data from day one." },
      { title: "3. Planning & Building Regulations", desc: "Submitting comprehensive drawings, structural engineering calculations, and council applications." },
      { title: "4. Precision Master Construction", desc: "Seamless project execution led by dedicated site managers, certified tradesmen, and milestone check-ins." },
      { title: "5. Sign-off & Quality Handover", desc: "Final building inspector sign-off, completion certificates, and 100% peace of mind handover." },
    ],
    faqs: [
      {
        question: "What are the benefits of a Design and Build approach?",
        answer: "Design and Build provides a single accountable team responsible for both architectural plans and physical construction. This eliminates disputes between architects and builders, keeps budgets locked-in, and significantly reduces delivery time.",
      },
      {
        question: "How does BuilderCambridge.com manage cost control?",
        answer: "We provide transparent, fixed-price itemized quotations based on vetted architectural calculations before breaking ground, avoiding cost surprises down the line.",
      },
      {
        question: "How do I start my Design and Build project in Cambridge?",
        answer: "Call our Cambridge team directly on 01223 782 433 or email info@buildercambridge.com to schedule a free feasibility consultation and site visit.",
      },
    ],
    typicalTimeline: "8 - 24 Weeks",
    typicalCostRange: "Fixed-Price Turnkey Quote",
    badge: "10+ Years Experience",
  },
  {
    id: "roofing",
    slug: "roofing",
    title: "Roofing",
    contentHeading: "ROOFING",
    shortDesc: "Specialist slate and tile roofing in Cambridge. Natural, artificial and zinc slate, durable clay and concrete tiles installed to BS 5534 standards.",
    category: "Structural",
    heroImage: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
    fullDescription: [
      "Slate is a durable material that's been used to build roofs for hundreds of years. It comes in three varieties – natural, artificial and zinc – and offers an authentic and beautiful roofing solution, especially for traditionally styled homes.",
      "Nowadays, tiles have been created with similar properties that make them almost as hardwearing and long-lasting. These are produced from either concrete or clay, and are more suited to modern houses, as they're available in an array of styles and colours.",
      "Both of these are popular options for roofing today. And there are plenty of fantastic reasons why:",
    ],
    customSections: [
      {
        heading: "Durability",
        text: "Did you know that slate roofs can last up to 150 years, and a tile roof can do so for 50 to 70? This is impressive, considering the usual lifespan of a roof is 20 to 30 years.",
      },
      {
        heading: "Long-term value",
        paragraphs: [
          "This durability means that despite requiring a slightly larger initial investment, a slate or tile roof will always prove greater value in the long term.",
          "Slate is mainly grey in colour but available in a variety of shades, textures and patterns, while tile comes in a wide range of designs and colours. We also offer several different fixing methods for each, to suit any roof. That means yours will be as stunning as it is sturdy.",
          "Not only is slate and tile roofing one of the most fire-resistant options that exists, but it also has environmental benefits. In fact, natural slate creates the lowest environmental impact and carbon footprint of all roofing materials.",
        ],
      },
      {
        heading: "What do we offer?",
        text: "To give you plenty of choice, we offer a wide variety of slate and tile roofing options, installed by our dedicated team.",
        secondaryText: "BuilderCambridge.com has proven results for setting exceptional standards in cost control, planning, scheduling and project safety. We have the experience that gives us a competitive advantage over others in our field.",
      },
    ],
    whyChooseUsTitle: "WHY CHOOSE US",
    whyChooseUsCards: [
      {
        title: "Flexibility",
        description: "Whatever your type of roof, whatever your style and whatever your budget, we're able to source the most appropriate slate, tiles and fittings to meet your unique requirements.",
      },
      {
        title: "Experience",
        description: "We have over 10 years' experience in fitting slate and tile roofs, but still follow all recommendations offered by today's leading manufacturers – using best practice and the best products.",
      },
      {
        title: "Peace of mind",
        description: "We don't just install roofs. We help you consider planning restrictions, aesthetic requirements, site exposure, roof pitch and cost – so you can have confidence your chosen slate or tile roof is the perfect fit for you.",
      },
      {
        title: "Quality, guaranteed",
        description: "All our slate and tile roofs are installed in accordance with the BS 5534 Slating & Tiling regulation.",
      },
    ],
    whyChooseUs: [
      "Financial Responsibility to Our Clients",
      "Superior Quality and Craftsmanship",
      "Quality and Value to the Projects We Deliver",
      "Highest Standards in Cost Control",
      "On Time and on Budget",
      "Real Focus on Customer Satisfaction",
    ],
    typicalTimeline: "1 - 3 Weeks",
    typicalCostRange: "Survey Dependent",
  },
  {
    id: "building-regulations",
    slug: "building-regulations",
    title: "Building Regulations",
    contentHeading: "Building Regulations",
    shortDesc: "Building Regulations are in place to ensure that whatever is built is done so safely and properly across Cambridge.",
    category: "Structural",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
    fullDescription: [
      "Building Regulations are in place to ensure that whatever is built is done so safely and properly. Each council has its own team of Building Control officers who come out and inspect that everything is in order during construction.",
      "BuilderCambridge.com has proven results for setting exceptional standards in cost control, planning, scheduling and project safety. We have the experience that gives us a competitive advantage over others in our field.",
    ],
    customSections: [
      {
        heading: "What does Building Regulations cover?",
        bullets: [
          "Structural Supports",
          "Health and Safety",
          "Fire Prevention and Fire Safety",
          "Ventilation",
          "Drainage and Waste Disposal",
          "Energy Conservation",
          "Energy Conservation",
          "Electrical and Gas Safety",
          "Workmanship and Materials",
        ],
        text: "A Building Control Officer oversees the construction of a project and makes sure that all the current Building Regulation Guidelines are followed correctly, a fee is payable to your local council in respect of the services they provide during inspections.",
        secondaryText: "Building Regulations are what guarantee safety and correctness in construction.",
      },
    ],
    regulationsNotice: {
      heading: "Building Regulations & Quotation",
      text: "For more information about Building Regulations or to arrange a quotation call us on 01223 782 433 or email us at info@buildercambridge.com",
      phone: "01223 782 433",
      email: "info@buildercambridge.com",
    },
    typicalTimeline: "Project Dependent",
    typicalCostRange: "Council Fee Dependent",
  },
  {
    id: "bifolding-doors",
    slug: "bifolding-doors",
    title: "Bifolding Doors",
    contentHeading: "BIFOLDING DOORS",
    shortDesc: "Leading installers of made-to-measure aluminium and engineered timber bifolding doors in Cambridge with over 200 colours and a full 10-year guarantee.",
    category: "Residential",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Made to measure in the UK to your personal specification",
      "Ultra-slim sight lines with over 200 RAL colours & gloss levels",
      "Engineered timber range available in softwood, hardwood or oak",
      "Fully compliant with current UK building regulations",
      "Comprehensive full 10-year guarantee included",
      "Multi-point PAS 24 security locking & thermal break technology",
    ],
    fullDescription: [
      "BuilderCambridge.com are leading installers of aluminium bifolding doors. Our aluminium bifold doors are made to measure in the UK. All our aluminium bifold doors are manufactured to your personal specification so you can be assured that they meet your own personal requirements. Available with slim sight lines and in over 200 colours and various gloss levels you can personalise your doors to compliment your project.",
      "We also supply a timber range of folding sliding doors that are manufactured from engineered timbers in softwood, hardwood or oak. Also available in a variety of finishes from a selection of stains and again from the extensive colour range.",
      "Our bifolding doors of course fully comply with current building regulations and come with a full 10 year guarantee.",
      "BuilderCambridge.com has proven results for setting exceptional standards in cost control, planning, scheduling and project safety. We have the experience that gives us a competitive advantage over others in our field.",
    ],
    whyChooseUsTitle: "WHY CHOOSE US",
    whyChooseUsIntro: "BuilderCambridge.com are leading installers of aluminium bifolding doors. Our aluminium bifold doors are made to measure in the UK.",
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
      { title: "1. Precision Site Survey", desc: "Laser measurement of structural opening, floor levels, and structural lintel assessment." },
      { title: "2. UK Custom Manufacture", desc: "Bespoke fabrication in your choice of aluminium or engineered timber with custom RAL colors." },
      { title: "3. Structural Opening Prep", desc: "Installation of steel RSJ lintels or opening expansion where required to building standards." },
      { title: "4. Professional Installation", desc: "Laser-levelled track fitting, flush threshold alignment, and weatherproof thermal perimeter sealing." },
      { title: "5. Testing & 10-Year Guarantee", desc: "Full glide roller calibration, multi-point locking sign-off, and handover with 10-year warranty." },
    ],
    faqs: [
      {
        question: "Are your bifolding doors made in the UK?",
        answer: "Yes, all our aluminium and timber bifolding doors are precision made-to-measure right here in the UK to your exact personal specifications.",
      },
      {
        question: "What guarantee do your bifold doors come with?",
        answer: "All our bifolding door installations comply fully with current Building Regulations and come with a full 10-year guarantee covering mechanisms, profiles, and glazing.",
      },
      {
        question: "Can I choose custom colours or timber finishes?",
        answer: "Yes. Our aluminium range is available in over 200 RAL colours and gloss levels, while our engineered timber range is offered in softwood, hardwood, or oak with custom stains.",
      },
    ],
    typicalTimeline: "1 - 3 Days (Installation)",
    typicalCostRange: "£3,200 - £11,500+",
    badge: "10-Year Guarantee",
  },
  {
    id: "underpinning",
    slug: "underpinning",
    title: "Underpinning Cambridge",
    contentHeading: "Underpinning Cambridge",
    shortDesc: "Underpinning is when extra support is provided underneath a structure due to subsidence to counter sinking or pre-emptively protect adjacent construction.",
    category: "Structural",
    heroImage: "/images/underpinning-excavation.jpg",
    galleryImages: [
      "/images/underpinning-excavation.jpg",
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80",
    ],
    fullDescription: [
      "Underpinning is when extra support is provided underneath a structure due to subsidence. This can be to directly counter subsidence where the building or structure is actually sinking, or it can be done pre-emptively if other construction works are taking place which may directly affect the structure",
      "We offer a full design and construction package for underpinning of subsidence affected properties from design and construction of piles through to design and construction of reinforced concrete rafts / needles. In every case we will offer a cost effective solution designed to support the area to be underpinned.",
    ],
    customSections: [
      {
        isCallout: true,
        heading: "Contact us today on 01223 782433",
        text: "Pick up the phone today to speak to one of our helpful advisors and arrange a same day site visit within Cambridge.",
        calloutPhone: "01223 782 433",
      },
    ],
    typicalTimeline: "Project Dependent",
    typicalCostRange: "Survey Dependent",
  },
  {
    id: "demolition",
    slug: "demolition",
    title: "Demolition Cambridge",
    contentHeading: "Demolition Cambridge",
    shortDesc: "Comprehensive building demolition process, building and structural surveying, removal of hazardous materials, and engineered demolition plans in Cambridge.",
    category: "Groundworks",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    ],
    fullDescription: [],
    customSections: [
      {
        heading: "Building Demolition Process",
        intro: "Different steps are involved in the process of demolition of building structures which are:",
        bullets: [
          "Surveying",
          "Removal of hazardous materials",
          "Preparation of plan",
          "Safety measures",
        ],
      },
      {
        heading: "Surveying of Buildings for Demolition",
        intro: "Surveying means study of different parameters of the structure and its surroundings. There are two types of surveying are mainly conducted. They are",
        bullets: [
          "Building surveying",
          "Structural surveying",
        ],
      },
      {
        heading: "1. Building Surveying",
        intro: "In survey of buildings for demolition, following process are carried out:",
        bullets: [
          "Types of construction material used",
          "Usage of building prior and present during demolition.",
          "The presence of wastewater, hazardous materials, matters arising from toxic chemicals, flammable or explosive and radioactive materials, etc.",
          "Drainage conditions and possible problems on water pollution, flooding and erosion.",
          "Shared facilities with adjoining building, including common staircases, partition walls.",
          "Adjoining pedestrian and vehicular traffic conditions",
          "The sensitivity of neighborhood with respect to noise, dust, vibration and traffic impact.",
        ],
      },
      {
        heading: "2. Structural Surveying",
        intro: "In structural survey, following process are involved in demolition:",
        bullets: [
          "The method of construction",
          "The structural system and structural conditions of basements, underground tanks or underground vaults.",
          "The original structural system employed in the design.",
          "The condition of the building.",
        ],
      },
      {
        heading: "Removal of Hazardous Materials",
        text: "If hazardous materials like asbestos minerals, petroleum contamination, and radioactive metals are found in the investigation of site for demolition. Specialized personals are called for the removal of the hazardous materials from the site prior to the demolition of structure.",
      },
      {
        heading: "Preparation of Demolition Plan for Structures:",
        intro: "A detailed demolition plan is made which illustrates the different process involved and they are:",
        bullets: [
          "The location of the building to be demolished.",
          "The distances from the building to be demolished to its adjacent buildings, streets, structures and significant street furniture.",
          "The structural support systems of the building.",
          "A plan showing the procedure for the demolition of the building; detailed sequence of demolishing structural members; and the method of demolition to be adopted.",
          "A plan showing all precautionary measures for the protection of the public including hoardings, covered walkways, catch platforms, catch fans, scaffolding, protective screens and safety nets.",
          "Method of handling demolished building debris.",
          "Time required for the complete demolition process etc.",
        ],
      },
    ],
    regulationsNotice: {
      heading: "Contact us today on 01223 782433",
      text: "Pick up the phone today to speak to one of our helpful advisors and arrange a same day site visit within Cambridge.",
      phone: "01223 782 433",
      email: "info@buildercambridge.com",
    },
    typicalTimeline: "Project Dependent",
    typicalCostRange: "Survey Dependent",
  },
  {
    id: "drainage",
    slug: "drainage",
    title: "Drainage",
    contentHeading: "Drainage",
    shortDesc: "BuilderCambridge.com offer drain installations carried out by fully trained engineers who will take the time to advise you on the best installation method for your property and requirements.",
    category: "Groundworks",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    ],
    fullDescription: [
      "BuilderCambridge.com offer drain installations carried out by fully trained engineers who will take the time to advise you on the best installation method for your property and requirements. Our professional drain installers know all there is to know about the positioning of drains, planning permission requirements, building regulations and effective drain installations.",
    ],
    customSections: [
      {
        heading: "About Drain Installation with BuilderCambridge.com",
        text: "If you are looking for one of the best drain installers in the UK, then you've come to the right place. Here at BuilderCambridge.com, we provide a variety of drain services to customers throughout the UK and we are leaders in drainage and watermains, priding ourselves on unrivalled customer service and professional and effective solutions.",
      },
      {
        isCallout: true,
        heading: "Contact us today on 01223 782433",
        text: "Pick up the phone today to speak to one of our helpful advisors and arrange a same day site visit within Cambridge.",
        calloutPhone: "01223 782 433",
      },
      {
        heading: "We offer the following services:",
        bullets: [
          "Blocked drain",
          "Drain installations",
          "Drain clearance",
          "Drain repair",
          "Grease traps",
          "Gully sucking",
          "High pressure jetting",
          "Main sewer connections",
          "Structural lining",
          "Private systems",
          "CCTV surveys",
          "Groundworks",
          "Pumps",
          "Watermains",
        ],
        secondaryText: "If you require any of the services listed above, or you would simply like to ask for further information, please do not hesitate to call our friendly team today. We would be more than happy to answer any questions you may have and advise you on the best drainage solution for your requirements.",
      },
      {
        heading: "Effective and Professional Drain Installations",
        text: "Here at BuilderCambridge.com, we offer drain installations to all our customers. Our drain installations are carried out by our fully trained and experienced professionals. This means you can rest assured that your drain installation is being completed effectively by a specialist, saving you time, money and stress. At BuilderCambridge.com, we use the latest drain installation technology to help install our drains and we also offer maintenance, repair and replacement services to all our customers who request them. So, if you require drain installation services, look no further than BuilderCambridge.com! We have the professionals, the products and the cost solutions to provide you with unbeatable drain installations that are effective, long-lasting and reasonably priced.",
      },
      {
        heading: "Commercial Drain Installation",
        text: "BuilderCambridge.com provide drain installations for commercial properties, offering customers cost-effective solutions to their drain installation needs. We even carry out thorough CCTV drain surveys to ensure minimal disruption to your business and members of staff. If you require drain installation for your commercial property, ASL Drainage are here for you. We provide a drain installation service that is minimally disruptive and highly effective.",
      },
      {
        heading: "Domestic Drain Installation",
        paragraphs: [
          "BuilderCambridge.com know how important drain installation is for domestic properties. Correct drain installation will ensure all waste from your property is removed effectively, safely and hygienically. When it comes to domestic drain installation, we would encourage our customers to call us and have a professional carry out the installation. Often, customers may try to install drains themselves without realising there are procedures that must be undertaken, planning permission requests made, and health and safety regulations followed.",
          "At BuilderCambridge.com, we work hard to install your new drain as quickly as possible and with minimal disruption to your family or home. Our professionals install a variety of domestic drains, including connections to public sewers and land drainage. Whatever kind of drain installation you require, call BuilderCambridge.com today, we have the solution for you!",
        ],
      },
      {
        heading: "Drain Installation Testing",
        text: "Once we have successfully installed your new drain, we test the pipework by flushing water through to determine all connections are watertight. If there are any problems that arise during the testing period, we will take the time to rectify the problem. We don't leave until we are sure your pipe installation is fully functional, and you are happy with the services we have provided.",
      },
    ],
    typicalTimeline: "Project Dependent",
    typicalCostRange: "Survey Dependent",
  },
  {
    id: "driveways",
    slug: "driveways",
    title: "Driveways",
    contentHeading: "Driveways",
    shortDesc: "A driveway is much more than just a practical, off-street place to park your car. An attractive, modern driveway can create a strong first impression. It also has the potential to increase the value of your home – especially if parking space is at a premium where you live.",
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
      "A driveway is much more than just a practical, off-street place to park your car. An attractive, modern driveway can create a strong first impression. It also has the potential to increase the value of your home – especially if parking space is at a premium where you live.",
      "At BuilderCambridge.com, we offer a comprehensive range of driveway paving stones to help you achieve a premium, long-lasting look with your new drive. With multiple styles, finishes and colours from which to choose, you'll find the perfect paving products to shape the driveway of your dreams.",
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
    title: "Kerbs and Drop Kerbs",
    contentHeading: "Kerbs and Drop Kerbs",
    shortDesc: "A dropped kerb provides access from the public highway to a domestic property. In order to have a dropped kerb installed to access the public highway, you must seek consent from the County Council.",
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
      "A dropped kerb provides access from the public highway to a domestic property. In order to have a dropped kerb installed to access the public highway, you must seek consent from the County Council. This consent is to ensure that any proposed crossing does not present a safety hazard to other users of the highway and to ensure that all works are carried out to the appropriate standard.",
      "If you would like to apply for a new dropped kerb or extend an existing dropped kerb, you must first check whether the road is public highway maintained by Cambridgeshire County Council. Please see our map of all our maintained roads below to double check the status of your road. We will only assess dropped kerb applications on roads we maintain.",
      "If Cambridgeshire County Council does maintain your road, planning permission may be required from your local District Council depending on the classification of the road:",
      "For properties on classified roads (ie. ‘A’, ‘B’, or ‘C’ roads) – before applying to the County Council for a dropped kerb, you must first contact your relevant District Council to assess whether planning permission from them is required. Please note that some district Councils will charge for this. Once this has been done, you may then apply to the County Council.",
      "For properties on unclassified roads (ie. Housing estates, etc) – you do not need permission from your District Council and can apply directly to the County Council for a dropped kerb.",
      "If you're intending to drive a vehicle across the pavement into your driveway, then you need a dropped kerb. Before we can begin the installation, you need permission from Cambridge county council. We can help you with the paperwork for permission, as well as installation of dropped kerbs. Contact BuilderCambridge.com for a quote today 01223 782433",
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
