export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  highlights: string[];
  symptoms: string[];
  steps: string[];
  guaranteeText: string;
  materialsUsed: string;
}

export interface NeighborhoodItem {
  id: string;
  name: string;
  nameEn: string;
  distanceFromBase: string;
  coverageStatus: string;
  popularServices: string[];
  description: string;
}

export interface DiagnosticIssue {
  id: string;
  symptom: string;
  possibleCauses: string[];
  severity: 'عاجل' | 'متوسط' | 'صيانة وقائية';
  suggestedServiceId: string;
  advice: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  date: string;
  serviceTitle: string;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    paragraphs: string[];
    tips?: string[];
    warning?: string;
  }[];
  relatedServiceId?: string;
  relatedServiceTitle?: string;
}
