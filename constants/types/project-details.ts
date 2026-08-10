export interface TechCategory {
  title: string;
  items: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface AddOnPackage {
  id: string;
  title: string;
  price: number;
  description: string;
  badge?: string;
}

export interface ProjectFAQ {
  question: string;
  answer: string;
}

export interface DeliveryStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  price: string;
  priceNum: number;
  originalPrice: string;
  deliveryTime: string;
  heroBadge: string;
  description: string;
  overview: string;
  useCases: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloud: string[];
    tools: string[];
  };
  addOnPackages: AddOnPackage[];
  features: ProjectFeature[];
  adminFeatures: string[];
  userFeatures: string[];
  databaseEntities: string[];
  integrations: string[];
  securitySpecs: string[];
  deliverySteps: DeliveryStep[];
  deliverables: string[];
  faqs: ProjectFAQ[];
}
