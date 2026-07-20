import { JobOpening, IndustryVertical, FAQItem, Testimonial } from '../types';

export const siteConfig = {
  name: "Viraat Workforce Solutions",
  shortName: "Viraat Workforce",
  tagline: "Connecting Industries with Reliable Workforce",
  subheadline: "Trusted Blue-Collar Workforce Solutions for Manufacturing, Warehousing, Logistics, and Industrial Companies across India.",
  description: "Viraat Workforce Solutions is India's leading workforce partner for manpower sourcing, industrial staffing support, and blue-collar talent recruitment.",
  domain: "https://viraatworkforce.com",
  
  contact: {
    phone: "+91 98765 43210",
    phoneAlt: "+91 80 4567 8900",
    whatsappNumber: "919876543210",
    whatsappUrl: "https://wa.me/919876543210?text=Hello%20Viraat%20Workforce%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20manpower%20solutions.",
    email: "contact@viraatworkforce.com",
    partnerEmail: "partnerships@viraatworkforce.com",
    address: "Plot 42, Sector 18, Industrial Area, Gurgaon, Haryana - 122015, India",
    hubs: ["Gurgaon", "Pune (Chakan)", "Chennai (Sriperumbudur)", "Ahmedabad (Sanand)", "Bangalore (Hosur)", "Pithampur"],
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.735817551062!2d77.0700!3d28.4800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1912f2c8db4b%3A0x2a0d1912f2c8db4b!2sSector%2018%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  forms: {
    candidateRegistration: "https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_CANDIDATE/viewform",
    agencyPartnership: "https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_AGENCY/viewform",
    employerRequirement: "https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_EMPLOYER/viewform"
  },

  stats: [
    { label: "Workers Deployed", value: "5,000+", iconName: "Users" },
    { label: "Partner Agencies", value: "50+", iconName: "Handshake" },
    { label: "Industrial Hubs Covered", value: "15+", iconName: "MapPin" },
    { label: "Fulfillment Support", value: "98.5%", iconName: "ShieldCheck" },
  ]
};

export const trustBadges = [
  {
    id: "1",
    title: "Genuine Job Opportunities",
    description: "100% verified industrial openings with transparent salary structures and no hidden terms.",
    icon: "CheckCircle2"
  },
  {
    id: "2",
    title: "Verified Hiring Partners",
    description: "Direct tie-ups with leading manufacturing plants, warehousing giants, and top manpower agencies.",
    icon: "Building2"
  },
  {
    id: "3",
    title: "Transparent Recruitment Process",
    description: "Zero fees charged to candidates. Simple, honest, and direct hiring steps.",
    icon: "ShieldAlert"
  },
  {
    id: "4",
    title: "Fast Hiring Support",
    description: "Deployment support within 48 to 72 hours for urgent industrial bulk worker requirements.",
    icon: "Zap"
  },
  {
    id: "5",
    title: "Candidate Assistance",
    description: "Full guidance on transport, hostel accommodation, canteen facilities, and joining formalities.",
    icon: "HeartHandshake"
  },
  {
    id: "6",
    title: "Reliable Workforce Solutions",
    description: "Dependable partner for staffing agencies needing candidate sourcing & screening pipelines.",
    icon: "Award"
  }
];

export const industryList: IndustryVertical[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Sourcing assembly operators, machine handlers, and quality inspectors for high-volume production lines.",
    iconName: "Factory",
    rolesSourced: ["Assembly Line Operators", "Machine Attendants", "Quality Inspectors", "Helper"],
    popularLocation: "Chakan (Pune) & Sanand (Gujarat)"
  },
  {
    id: "automobile",
    title: "Automobile & Auto Components",
    description: "Skilled & semi-skilled manpower for automotive manufacturing, stamping, body shops, and spare parts assembly.",
    iconName: "Car",
    rolesSourced: ["Welders (MIG/TIG)", "Fitters", "CNC Operators", "Paint Shop Helpers"],
    popularLocation: "Sriperumbudur (Chennai) & Gurgaon (Haryana)"
  },
  {
    id: "warehouse",
    title: "Warehousing & E-Commerce",
    description: "High-speed worker deployment for order fulfillment, sorting, material movement, and inventory management.",
    iconName: "Boxes",
    rolesSourced: ["Order Pickers", "Packers", "Forklift Operators", "Inventory Helpers"],
    popularLocation: "Bhiwandi (Mumbai) & Taoru (NCR)"
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "Dependable drivers, dock loaders, and transit handlers to keep supply chains moving seamlessly.",
    iconName: "Truck",
    rolesSourced: ["Heavy Drivers", "Dock Loaders", "Parcel Scanners", "Unloaders"],
    popularLocation: "Pan-India Logistics Hubs"
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    description: "Certified tradesmen and site helpers for commercial infrastructure and civil engineering projects.",
    iconName: "HardHat",
    rolesSourced: ["Masons", "Bar Benders", "Electricians", "Site Helpers"],
    popularLocation: "Delhi-NCR, Bangalore & Hyderabad"
  },
  {
    id: "pharma",
    title: "Pharmaceuticals",
    description: "Strictly trained cleanroom packing associates, chemical handlers, and utility staff for pharma plants.",
    iconName: "Pill",
    rolesSourced: ["Cleanroom Packers", "Machine Operators", "Utility Helpers"],
    popularLocation: "Baddi (HP) & Hyderabad"
  },
  {
    id: "engineering",
    title: "Heavy Engineering",
    description: "Specialized technicians, turners, fitters, and riggers for heavy equipment fabrication.",
    iconName: "Wrench",
    rolesSourced: ["Fitters", "Turners", "Riggers", "Maintenance Trainees"],
    popularLocation: "Coimbatore & Jamshedpur"
  },
  {
    id: "textile",
    title: "Textile & Garments",
    description: "Skilled tailors, cutting operators, and packing workers for export garment factories.",
    iconName: "Shirt",
    rolesSourced: ["Sewing Operators", "Cutting Helpers", "Ironing & Packing Staff"],
    popularLocation: "Tirupur & Surat"
  },
  {
    id: "chemical",
    title: "Chemical Process",
    description: "Safety-trained operators and material handlers equipped for process industries.",
    iconName: "FlaskConical",
    rolesSourced: ["Process Helpers", "Packaging Staff", "Material Handlers"],
    popularLocation: "Ankleshwar & Dahej"
  },
  {
    id: "fmcg",
    title: "FMCG & Consumer Goods",
    description: "Rapid onboarding for high-speed filling, packaging, and sorting lines.",
    iconName: "ShoppingBag",
    rolesSourced: ["Packaging Operators", "Sorting Helpers", "Line Staff"],
    popularLocation: "Haridwar & Indore"
  }
];

export const currentOpenings: JobOpening[] = [
  {
    id: "job-1",
    title: "Machine Operator (CNC / VMC Trainee)",
    category: "Manufacturing",
    location: "Chakan, Pune (Maharashtra)",
    salary: "₹18,500 - ₹23,000 / month",
    accommodation: "Hostel Provided (Subsidized)",
    foodFacility: "Canteen Available (Subsidized)",
    openPositions: 45,
    shift: "8 Hours Rotational",
    experience: "0 - 2 Years (ITI / Diploma preferred)",
    badge: "Immediate Hiring"
  },
  {
    id: "job-2",
    title: "Warehouse Associate & Packer",
    category: "Warehouse",
    location: "Gurgaon & Taoru (Haryana)",
    salary: "₹16,000 - ₹19,500 / month",
    accommodation: "Room Assistance Provided",
    foodFacility: "Subsidized Meals Provided",
    openPositions: 80,
    shift: "10 Hours Day/Night",
    experience: "Freshers Welcome (10th / 12th Pass)",
    badge: "Bulk Requirement"
  },
  {
    id: "job-3",
    title: "Industrial Electrician & Wireman",
    category: "Engineering",
    location: "Sriperumbudur, Chennai (Tamil Nadu)",
    salary: "₹21,000 - ₹26,000 / month",
    accommodation: "Free Company Accommodation",
    foodFacility: "Free Canteen on Shift",
    openPositions: 25,
    shift: "8 Hours Rotational",
    experience: "1 - 3 Years (ITI Electrician Mandatory)"
  },
  {
    id: "job-4",
    title: "MIG / TIG Welder & Fitter",
    category: "Automobile",
    location: "Sanand, Ahmedabad (Gujarat)",
    salary: "₹22,000 - ₹28,000 / month",
    accommodation: "Hostel Available",
    foodFacility: "Canteen Available",
    openPositions: 30,
    shift: "8 Hours Day Shift",
    experience: "1 - 4 Years (Certification Required)",
    badge: "High Salary"
  },
  {
    id: "job-5",
    title: "Forklift Operator & Dock Loader",
    category: "Logistics",
    location: "Bhiwandi, Thane (Maharashtra)",
    salary: "₹19,000 - ₹24,000 / month",
    accommodation: "Shared Room Provided",
    foodFacility: "Tea & Snacks Provided",
    openPositions: 20,
    shift: "9 Hours Shift",
    experience: "1+ Year (License Required)"
  },
  {
    id: "job-6",
    title: "Assembly Line Helper & General Worker",
    category: "Manufacturing",
    location: "Hosur, Bangalore Border (Karnataka)",
    salary: "₹15,500 - ₹18,500 / month",
    accommodation: "Company Hostel Provided",
    foodFacility: "Free Lunch Provided",
    openPositions: 100,
    shift: "8 Hours Rotational",
    experience: "Freshers Allowed (10th Pass)",
    badge: "100+ Vacancies"
  }
];

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    category: "candidates",
    question: "Is there any registration fee or charge to apply for jobs?",
    answer: "No! Viraat Workforce Solutions NEVER charges any fee from job candidates. Our services are 100% FREE for blue-collar workers. If anyone asks for money in our name, please report it to us immediately."
  },
  {
    id: "faq-2",
    category: "candidates",
    question: "How do I apply for live job openings?",
    answer: "Applying is simple. Click on any job opening card or the 'Apply for Jobs' button to open our simple candidate Google Form. Fill in your basic details (Name, Mobile Number, Qualification, Experience, Preferred Location), and our recruitment team will call you within 24 hours."
  },
  {
    id: "faq-3",
    category: "candidates",
    question: "Do you provide room accommodation and food facilities?",
    answer: "Yes, most of our industrial partner facilities offer subsidized or free hostel accommodation along with clean canteen food during work shifts. Detailed facilities are listed clearly on each job card."
  },
  {
    id: "faq-4",
    category: "agencies",
    question: "How do manpower recruitment agencies partner with Viraat Workforce?",
    answer: "Manpower staffing agencies can partner with us to co-source candidates for large industrial accounts. Click on 'Become Hiring Partner', fill in your agency details, and our Agency Partnership Lead will establish a operational tie-up."
  },
  {
    id: "faq-5",
    category: "agencies",
    question: "Can Viraat Workforce fulfill bulk worker demands of 50 to 500 workers?",
    answer: "Yes. We specialize in sourcing and candidate mobilization across key industrial corridors in India (Maharashtra, NCR, Gujarat, Tamil Nadu, Karnataka). We maintain active candidate pools for rapid deployment."
  },
  {
    id: "faq-6",
    category: "general",
    question: "How long does the recruitment process take from application to joining?",
    answer: "Our standard screening and interview process takes 48 to 72 hours. Once selected, candidates receive joining dates and travel guidance immediately."
  }
];

export const testimonialsList: Testimonial[] = [
  {
    id: "test-1",
    type: "agency",
    quote: "Partnering with Viraat Workforce helped our agency supply 200+ trained operators for an auto parts plant in Chakan on tight deadlines. Professional team and transparent terms.",
    authorName: "Rajesh Kumar",
    authorRole: "Director",
    companyOrLocation: "Jai Hanuman Staffing Services, Pune",
    rating: 5
  },
  {
    id: "test-2",
    type: "candidate",
    quote: "I applied online without paying any single rupee. Within 2 days, I got selected as a CNC Operator in Sanand with room accommodation. Very honest company.",
    authorName: "Vikram Singh",
    authorRole: "CNC Machine Operator",
    companyOrLocation: "Sanand Industrial Zone, Gujarat",
    rating: 5
  },
  {
    id: "test-3",
    type: "employer",
    quote: "When we needed 150 warehouse packers during festive peak season in NCR, Viraat Workforce delivered verified candidates quickly with full documentation.",
    authorName: "Sanjay Verma",
    authorRole: "Plant HR Manager",
    companyOrLocation: "Leading Logistics Enterprise, Gurgaon",
    rating: 5
  }
];
