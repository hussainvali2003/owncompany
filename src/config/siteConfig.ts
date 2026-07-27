import { JobOpening, IndustryVertical, FAQItem, Testimonial } from '../types';

export const siteConfig = {
  name: "Jobtrica Workforce Solutions",
  shortName: "Jobtrica",
  tagline: "Connecting Industries with Reliable Workforce",
  subheadline: "Trusted Blue-Collar Workforce Sourcing for Manufacturing, Warehousing, Logistics and Auto-Ancillary Companies across Ahmedabad's Industrial Belt.",
  description: "Jobtrica is Ahmedabad's blue-collar workforce sourcing partner connecting manufacturing, warehousing, automobile & logistics companies in Sanand, Naroda, Vatva, Odhav & Changodar with reliable manpower. Zero-fee jobs for candidates.",
  domain: "https://jobtrica.com",
  
  contact: {
    phone: "+91 63059 32569",
    phoneAlt: "",
    whatsappNumber: "916305932569",
    whatsappUrl: "https://wa.me/916305932569?text=Hello%20Jobtrica%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20manpower%20solutions.",
    email: "jobtrica@gmail.com",
    partnerEmail: "jobtrica@gmail.com",
    address: "Based in Ahmedabad, Gujarat",
    hubs: ["Sanand", "Naroda", "Vatva", "Odhav", "Changodar"],
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29910970977!2d72.43965584999999!3d23.0202434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd11d087798c9!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
  },

  forms: {
    candidateRegistration: "https://docs.google.com/forms/d/e/1FAIpQLSd4rUqdNYHQwRcI24m1vT4p9lroJzHW_-JwJUHfITMTjtCyYQ/viewform",
    agencyPartnership: "https://docs.google.com/forms/d/e/1FAIpQLSdhnG47IphUk4kk_kO5wmkhROm-Lnnd8VVOiqIDZnPQDp5i2Q/viewform",
    employerRequirement: "https://docs.google.com/forms/d/e/1FAIpQLSdhnG47IphUk4kk_kO5wmkhROm-Lnnd8VVOiqIDZnPQDp5i2Q/viewform"
  },

  stats: [
    { label: "Ahmedabad Operations", value: "Newly Launched", iconName: "Users" },
    { label: "Candidate Fees — Always", value: "0% Fees", iconName: "Handshake" },
    { label: "Ahmedabad Sourcing Hubs", value: "5 Targeted", iconName: "MapPin" },
    { label: "Response Commitment", value: "48-Hour", iconName: "ShieldCheck" },
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
    title: "Direct Outreach to Manufacturing Plants & Agencies",
    description: "Actively building direct relationships with manufacturing plants, warehousing operators, and manpower agencies across Ahmedabad.",
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
    description: "A dedicated, responsive partner for staffing agencies needing candidate sourcing & screening support in Ahmedabad's industrial belt.",
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
    popularLocation: "Sanand & Naroda (Ahmedabad)"
  },
  {
    id: "automobile",
    title: "Automobile & Auto Components",
    description: "Skilled & semi-skilled manpower for automotive manufacturing, stamping, body shops, and spare parts assembly.",
    iconName: "Car",
    rolesSourced: ["Welders (MIG/TIG)", "Fitters", "CNC Operators", "Paint Shop Helpers"],
    popularLocation: "Sanand GIDC — Ahmedabad's Auto-Ancillary Belt"
  },
  {
    id: "warehouse",
    title: "Warehousing & E-Commerce",
    description: "High-speed worker deployment for order fulfillment, sorting, material movement, and inventory management.",
    iconName: "Boxes",
    rolesSourced: ["Order Pickers", "Packers", "Forklift Operators", "Inventory Helpers"],
    popularLocation: "Changodar & Sanand (Ahmedabad)"
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "Dependable drivers, dock loaders, and transit handlers to keep supply chains moving seamlessly.",
    iconName: "Truck",
    rolesSourced: ["Heavy Drivers", "Dock Loaders", "Parcel Scanners", "Unloaders"],
    popularLocation: "Ahmedabad–Vatva–Changodar Logistics Corridor"
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    description: "Certified tradesmen and site helpers for commercial infrastructure and civil engineering projects.",
    iconName: "HardHat",
    rolesSourced: ["Masons", "Bar Benders", "Electricians", "Site Helpers"],
    popularLocation: "Ahmedabad & Gandhinagar"
  },
  {
    id: "pharma",
    title: "Pharmaceuticals",
    description: "Strictly trained cleanroom packing associates, chemical handlers, and utility staff for pharma plants.",
    iconName: "Pill",
    rolesSourced: ["Cleanroom Packers", "Machine Operators", "Utility Helpers"],
    popularLocation: "Ahmedabad & Vatva Industrial Estate"
  },
  {
    id: "engineering",
    title: "Heavy Engineering",
    description: "Specialized technicians, turners, fitters, and riggers for heavy equipment fabrication.",
    iconName: "Wrench",
    rolesSourced: ["Fitters", "Turners", "Riggers", "Maintenance Trainees"],
    popularLocation: "Odhav & Naroda (Ahmedabad)"
  },
  {
    id: "textile",
    title: "Textile & Garments",
    description: "Skilled tailors, cutting operators, and packing workers for export garment factories.",
    iconName: "Shirt",
    rolesSourced: ["Sewing Operators", "Cutting Helpers", "Ironing & Packing Staff"],
    popularLocation: "Naroda (Ahmedabad) & Surat"
  },
  {
    id: "chemical",
    title: "Chemical Process",
    description: "Safety-trained operators and material handlers equipped for process industries.",
    iconName: "FlaskConical",
    rolesSourced: ["Process Helpers", "Packaging Staff", "Material Handlers"],
    popularLocation: "Vatva (Ahmedabad), Ankleshwar & Dahej"
  },
  {
    id: "fmcg",
    title: "FMCG & Consumer Goods",
    description: "Rapid onboarding for high-speed filling, packaging, and sorting lines.",
    iconName: "ShoppingBag",
    rolesSourced: ["Packaging Operators", "Sorting Helpers", "Line Staff"],
    popularLocation: "Ahmedabad & Vadodara"
  }
];

export const currentOpenings: JobOpening[] = [
  {
    id: "job-1",
    title: "Machine Operator (CNC / VMC)",
    category: "Manufacturing",
    location: "Sanand, Ahmedabad",
    description: "One of the roles we regularly source for our partner agencies. Salary and openings depend on current employer requirements. Register your interest and we'll match you as live vacancies are confirmed.",
    experience: "ITI / Diploma preferred",
    badge: "Regular Sourcing"
  },
  {
    id: "job-2",
    title: "Warehouse Associate & Packer",
    category: "Warehouse",
    location: "Changodar, Ahmedabad",
    description: "One of the roles we regularly source for our partner agencies. Salary and openings depend on current employer requirements. Register your interest and we'll match you as live vacancies are confirmed.",
    experience: "10th / 12th Pass",
    badge: "Regular Sourcing"
  },
  {
    id: "job-3",
    title: "Industrial Electrician & Wireman",
    category: "Engineering",
    location: "Vatva, Ahmedabad",
    description: "One of the roles we regularly source for our partner agencies. Salary and openings depend on current employer requirements. Register your interest and we'll match you as live vacancies are confirmed.",
    experience: "ITI Electrician preferred",
    badge: "Regular Sourcing"
  },
  {
    id: "job-4",
    title: "MIG / TIG Welder & Fitter",
    category: "Automobile",
    location: "Sanand, Ahmedabad",
    description: "One of the roles we regularly source for our partner agencies. Salary and openings depend on current employer requirements. Register your interest and we'll match you as live vacancies are confirmed.",
    experience: "Welder Certification preferred",
    badge: "Regular Sourcing"
  },
  {
    id: "job-5",
    title: "Forklift Operator & Dock Loader",
    category: "Logistics",
    location: "Changodar, Ahmedabad",
    description: "One of the roles we regularly source for our partner agencies. Salary and openings depend on current employer requirements. Register your interest and we'll match you as live vacancies are confirmed.",
    experience: "Heavy License preferred",
    badge: "Regular Sourcing"
  },
  {
    id: "job-6",
    title: "Assembly Line Helper & General Worker",
    category: "Manufacturing",
    location: "Naroda, Ahmedabad",
    description: "One of the roles we regularly source for our partner agencies. Salary and openings depend on current employer requirements. Register your interest and we'll match you as live vacancies are confirmed.",
    experience: "Freshers Allowed",
    badge: "Regular Sourcing"
  }
];

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    category: "candidates",
    question: "Is there any registration fee or charge to apply for jobs?",
    answer: "No! Jobtrica Workforce Solutions NEVER charges any fee from job candidates. Our services are 100% FREE for blue-collar workers. If anyone asks for money in our name, please report it to us immediately."
  },
  {
    id: "faq-2",
    category: "candidates",
    question: "How do I apply for live job openings?",
    answer: "Applying is simple. Click on any job opening card or the 'Register Interest' button to open our simple candidate Google Form. Fill in your basic details (Name, Mobile Number, Qualification, Experience, Preferred Location), and our recruitment team will call you within 24 hours."
  },
  {
    id: "faq-3",
    category: "candidates",
    question: "Do you provide room accommodation and food facilities?",
    answer: "Yes, when live roles are confirmed, most of our industrial partner facilities offer subsidized or free hostel accommodation along with clean canteen food during work shifts."
  },
  {
    id: "faq-4",
    category: "agencies",
    question: "How do manpower recruitment agencies partner with Jobtrica?",
    answer: "Manpower staffing agencies can partner with us to co-source candidates for large industrial accounts. Click on 'Become Hiring Partner', fill in your agency details, and our Agency Partnership Lead will establish an operational tie-up."
  },
  {
    id: "faq-5",
    category: "agencies",
    question: "Can Jobtrica fulfill bulk worker demands of 50 to 500 workers?",
    answer: "Yes. We specialize in sourcing and candidate mobilization across key industrial corridors in Ahmedabad (Sanand, Naroda, Vatva, Odhav, Changodar). We maintain active candidate pools for rapid deployment."
  },
  {
    id: "faq-6",
    category: "general",
    question: "How long does the recruitment process take from application to joining?",
    answer: "Our standard screening and interview process takes 48 to 72 hours. Once selected, candidates receive joining dates and travel guidance immediately."
  }
];

export const testimonialsList: Testimonial[] = [];
