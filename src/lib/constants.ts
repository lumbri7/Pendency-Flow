export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/demo', label: 'Demo' },
  { href: '/pricing',label: 'Pricing' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: '#', icon: 'Twitter' },
  { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
  { name: 'Facebook', href: '#', icon: 'Facebook' },
];

export const FEATURES = [
  {
    icon: 'Timer',
    title: 'Case Duration Prediction',
    description: 'Leverage AI to forecast case timelines, enabling better resource allocation and scheduling.',
  },
  {
    icon: 'CalendarClock',
    title: 'Auto-Scheduling',
    description: 'Automatically schedule hearings and deadlines based on predicted durations and judicial availability.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Urgent Case Prioritization',
    description: 'AI algorithms identify and flag high-priority cases that require immediate attention.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Workload Dashboards',
    description: 'Visualize case distributions, backlogs, and performance metrics for judges and court staff.',
  },
  {
    icon: 'GitBranch',
    title: 'e-Courts Integration',
    description: 'Seamlessly and securely sync with e-Courts services, ensuring data integrity and privacy.',
  },
  {
    icon: 'Users',
    title: 'Collaborative Tools',
    description: 'Facilitate communication and task management between judges, lawyers, and administrative staff.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'PendencyFlow has been a game-changer for our district. The ability to predict case durations has cut our scheduling conflicts by over 40%.',
    name: 'Hon. Judge Smith',
    title: 'District Court Judge',
  },
  {
    quote:
      'The workload dashboards provide an incredible overview of our firm\'s caseload. We can now allocate resources more effectively and anticipate bottlenecks before they happen.',
    name: 'Jane Doe, Esq.',
    title: 'Partner at a Law Firm',
  },
];

export const PRICING_TIERS = [
  {
    name: 'Free Trial',
    price: 'Free',
    period: 'for 30 days',
    description: 'A risk-free way for courts to experience the power of PendencyFlow.',
    features: [
      'Case Duration Prediction (up to 50 cases)',
      'Basic Workload Dashboard',
      'Email Support',
    ],
    cta: 'Start Free Trial',
    isFeatured: false,
  },
  {
    name: 'Standard',
    price: 'Contact Us',
    period: 'for a quote',
    description: 'Ideal for individual law firms and smaller court systems.',
    features: [
      'Unlimited Case Duration Predictions',
      'Full Workload Dashboards',
      'Auto-Scheduling Module',
      'Urgent Case Prioritization',
      'Priority Email & Phone Support',
    ],
    cta: 'Request a Quote',
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'for large-scale deployment',
    description: 'Comprehensive solution for large judicial systems and government bodies.',
    features: [
      'All features in Standard',
      'e-Courts Integration',
      'Dedicated Account Manager',
      'On-site Training & Implementation',
      'Custom Feature Development',
    ],
    cta: 'Contact Sales',
    isFeatured: false,
  },
];

export const BLOG_POSTS = [
  {
    slug: 'the-future-of-law',
    title: 'The Future of Law: How AI is Reshaping the Legal Landscape',
    excerpt: 'Explore the transformative impact of artificial intelligence on legal research, case management, and judicial processes.',
    image_id: 'blog-future-of-law',
  },
  {
    slug: 'ai-in-courts',
    title: 'Unlocking Efficiency: The Role of AI in Modern Courtrooms',
    excerpt: 'A deep dive into how AI tools are helping reduce backlogs and streamline operations in courts worldwide.',
    image_id: 'blog-ai-in-courts',
  },
  {
    slug: 'data-privacy',
    title: 'Data Privacy in Legal Tech: A Non-Negotiable',
    excerpt: 'As technology advances, ensuring the security and privacy of sensitive legal data is more critical than ever.',
    image_id: 'blog-data-privacy',
  },
];
