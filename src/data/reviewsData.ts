export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: "Google" | "Trustindex" | "Direct";
  avatar: string;
  projectType: string;
  location: string;
  content: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "review-1",
    author: "B A Balmforth",
    rating: 5,
    date: "Verified Google Review",
    source: "Google",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW8seVCnq9v3MOOMFkmL6tsIFLU_PYNwVFopi6zeZQAXdc=w80-h80-c-rp-mo-br100",
    projectType: "Complete Flat Renovation & Services",
    location: "Cambridge",
    content: "BuilderCambridge.com completed a number of building, plumbing, and electrical works for a flat renovation I had done. The team did a great job. Hard working and speedy, they stripped the place back to the core, put in a new screed floor, new stud walls, fully insulated the roof cavity, and replastered the whole flat as well as putting in the shower and toilet. Prices were fair and the work very high quality. Very approachable and happy to help with little odd jobs. Overall very happy with the workmanship and final product. Would recommend to others.",
  },
  {
    id: "review-2",
    author: "Sarah Dingley",
    rating: 5,
    date: "Verified Google Review",
    source: "Google",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUbJ1Lib8K3hpgU8qkZfGIcuM0FpwYZir-KQw2c-2_YN3U=w80-h80-c-rp-mo-br100",
    projectType: "Rear House Extension",
    location: "Cambridge",
    content: "Very pleased with our beautiful extension. The team was reliable, hardworking, and kept the site clean every day. High quality finish and completed as promised. Recommended.",
  },
  {
    id: "review-3",
    author: "Shane Luck",
    rating: 5,
    date: "Verified Google Review",
    source: "Google",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUGGmlsFLb10OFye_hZczgqaGheoGNyuGnKu7mvD6ATBgh4=w80-h80-c-rp-mo-ba3-br100",
    projectType: "Garage Conversion",
    location: "Cambridgeshire",
    content: "Great work from Charlie and the team converting our garage into a habitable home office and gym. All really nice people, considerate builders, and great attention to detail.",
  },
  {
    id: "review-4",
    author: "Christian Brady",
    rating: 5,
    date: "Verified Google Review",
    source: "Google",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXcSJOL-iONGuFj_JdnyTG5_NECLRFoult_ixdapmXlHg=w80-h80-c-rp-mo-br100",
    projectType: "Home Modernization & Structural Works",
    location: "Cambridge",
    content: "George and the team provide truly exceptional service at a great price. They take anything in their stride, solving problems with sensible and knowledgeable advice that puts the customer first. Excellent communication throughout, great flexibility and pace. Costs are competitive and outstanding value considering their professionalism and high-quality work. Most importantly, they build trust through integrity and I certainly won't be using anyone else from now on.",
  },
  {
    id: "review-5",
    author: "Adam Badcock",
    rating: 5,
    date: "Verified Google Review",
    source: "Google",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    projectType: "Masonry & Front Steps Rebuild",
    location: "Cambridge",
    content: "George and the team were great. We needed our front steps removed and replacing. George listened to what we wanted, the team were professional and tidy. Our new steps match the house and look fantastic, very happy and would use again!",
  },
  {
    id: "review-6",
    author: "Andy Macey",
    rating: 5,
    date: "Verified Google Review",
    source: "Google",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    projectType: "Interior Plastering & Refurbishment",
    location: "Cambridge",
    content: "Excellent job, no mess and work completed under budget. Thanks to the whole team for a smooth and stress-free build.",
  },
  {
    id: "review-7",
    author: "Fabio Tuzza",
    rating: 5,
    date: "Verified Google Review",
    source: "Google",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX3aVTIaJcp6C2fgLwpkeXVz6YQlNVp9HQxGwhq6g1l6w=w80-h80-c-rp-mo-br100",
    projectType: "Property Feasibility & Estimation",
    location: "Cambridge",
    content: "I am interested in buying a property and I had few ideas in mind. I had some calls with different builders, but George has been definitely the most helpful. He gave me a rough estimation about the prices for the different options. Really kind and professional. Thanks.",
  },
];
