export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  category: string;
  year: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
  description: string;
}

export interface Experience {
  id: number;
  title: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface AIFeature {
  icon: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DevLens - Website Behavior Analyzer',
    description:
      'A JavaScript analysis tool that inspects page structure and user interaction patterns using DOM parsing, event tracking, and async workflows.',
    tech: ['JavaScript', 'DOMParser', 'Fetch API', 'Responsive UI'],
    liveUrl: 'https://github.com/Subhan46-web/Devlens-Website-Behavior-Analyzer',
    githubUrl: 'https://github.com/Subhan46-web/Devlens-Website-Behavior-Analyzer',
    featured: true,
    category: 'Web app',
    year: '2024',
    accent: 'from-[#222222] via-[#555555] to-[#ff8d2e]',
    image: '/projects/devlens-dark.png',
    imageAlt: 'DevLens dark theme homepage screenshot',
    imagePosition: 'center center',
  },
  {
    id: 2,
    title: 'Gym Management Website',
    description:
      'A responsive member and schedule management interface with dashboard-style UX for fitness businesses.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Responsive Design'],
    liveUrl: 'https://gym-management-site.vercel.app',
    githubUrl: 'https://github.com/Subhan46-web/gym-management-site',
    category: 'Dashboard',
    year: '2024',
    accent: 'from-[#2d2d2d] via-[#8c939e] to-[#ffffff]',
    image: '/projects/gym-site.png',
    imageAlt: 'Gym management website homepage screenshot',
  },
  {
    id: 4,
    title: 'E-Commerce Website',
    description:
      'A polished storefront UI focused on browsing, category discovery, and a clean shopping experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://ecommerce-website-blue-nine.vercel.app/',
    githubUrl: 'https://github.com/Subhan46-web/ecommerce-website',
    category: 'Web app',
    year: '2023',
    accent: 'from-[#101010] via-[#6e4d2f] to-[#ffd6a8]',
    image: '/projects/shop-ui.png',
    imageAlt: 'E-commerce website homepage screenshot',
  },
  {
    id: 3,
    title: 'Admin Dashboard',
    description:
      'A business dashboard with analytics cards, tables, and management views designed for clear data visualization.',
    tech: ['JavaScript', 'Dashboard UI', 'CSS', 'Responsive Design'],
    liveUrl: 'https://github.com/Subhan46-web/Admin-Dashboard',
    githubUrl: 'https://github.com/Subhan46-web/Admin-Dashboard',
    category: 'Dashboard',
    year: '2023',
    accent: 'from-[#141414] via-[#5a6472] to-[#ffb066]',
    image: '/projects/admin-ui.png',
    imageAlt: 'Admin dashboard desktop screenshot',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'UI / UX Design',
    icon: '01',
    description: 'Designing clean interfaces that are simple to use, mobile friendly, and easy to trust.',
    skills: [
      { name: 'Wireframes', icon: 'WF' },
      { name: 'Landing Pages', icon: 'LP' },
      { name: 'Responsive UI', icon: 'RS' },
    ],
  },
  {
    category: 'Front-End Development',
    icon: '02',
    description: 'Building fast, maintainable interfaces with modern React patterns and polished interactions.',
    skills: [
      { name: 'React', icon: 'RE' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind CSS', icon: 'TW' },
    ],
  },
  {
    category: 'Website Delivery',
    icon: '03',
    description: 'Turning ideas into launch-ready websites with testing, optimization, and smooth deployment.',
    skills: [
      { name: 'WordPress', icon: 'WP' },
      { name: 'Vercel', icon: 'VC' },
      { name: 'GitHub', icon: 'GH' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'React JS Intern',
    type: 'TMR Consulting Islamabad',
    period: 'July 2024 - Dec 2024',
    description:
      'Worked on building responsive and user-friendly web interfaces using React.js, JavaScript, HTML, and CSS. Assisted in developing reusable components, fixing UI bugs, improving mobile responsiveness, and integrating front-end features with clean and maintainable code.',
    highlights: [
      'Responsive and user-friendly interfaces',
      'Reusable component development',
      'UI bug fixes and mobile responsiveness',
      'Clean and maintainable front-end code',
    ],
  },
  {
    id: 2,
    title: 'Front-End Developer',
    type: 'TMR Consulting Islamabad',
    period: 'Jan 2025 - Dec 2025',
    description:
      'Built responsive and user-friendly web interfaces using HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS. Worked on creating reusable components, improving UI performance, fixing layout issues, and developing clean, modern, and mobile-friendly websites.',
    highlights: [
      'Reusable components with React and TypeScript',
      'UI performance improvements',
      'Layout issue fixes',
      'Modern and mobile-friendly websites',
    ],
  },
];

export const aiFeatures: AIFeature[] = [
  {
    icon: '01',
    title: 'Debug Faster',
    description: 'Use AI to identify issues faster, then manually test and validate the final fix.',
  },
  {
    icon: '02',
    title: 'Plan Better',
    description: 'Break large features into clear tasks and organize implementation before writing code.',
  },
  {
    icon: '03',
    title: 'Explore UI Ideas',
    description: 'Test layout directions and visual options faster without losing control of the final design.',
  },
  {
    icon: '04',
    title: 'Ship With Confidence',
    description: 'Use AI as a support layer while keeping code quality, structure, and testing decisions human-led.',
  },
];
