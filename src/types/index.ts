export interface JobOpening {
  id: string;
  title: string;
  category: string;
  location: string;
  salary?: string;
  accommodation?: string;
  foodFacility?: string;
  openPositions?: number;
  shift?: string;
  experience?: string;
  googleFormUrl?: string;
  badge?: string;
  description?: string;
}

export interface IndustryVertical {
  id: string;
  title: string;
  description: string;
  iconName: string;
  rolesSourced: string[];
  popularLocation: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'candidates' | 'agencies' | 'general';
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  companyOrLocation: string;
  type: 'agency' | 'employer' | 'candidate';
  rating: number;
}
