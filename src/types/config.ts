export interface OrgConfig {
  org: {
    name: string;
    tagline: string;
    logoText: string;
    primaryColor: string;
    accentColor: string;
    contact: {
      email: string;
      phone: string;
      address: string;
      formEndpoint?: string;
    };
    social: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  };
  nav: { label: string; href: string }[];
  hero: {
    rotating: {
      eyebrow: string;
      headline: string;
      subhead: string;
      ctaPrimary: string;
      ctaSecondary: string;
    }[];
  };
  services: {
    heading: string;
    subheading: string;
    items: { title: string; description: string; icon: string }[];
  };
  whyUs: {
    heading: string;
    items: { title: string; description: string }[];
  };
  industries: {
    heading: string;
    items: { name: string; description: string }[];
  };
  testimonials: {
    heading: string;
    items: { quote: string; author: string; role: string }[];
  };
  insights: {
    heading: string;
    subheading: string;
    items: { title: string; excerpt: string; href: string }[];
  };
  footer: {
    description: string;
    legal: { label: string; href: string }[];
    copyright: string;
  };
}
