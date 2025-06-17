import { Activity, Code, Palette, Wrench } from 'lucide-react';

export const servicesContent: ServicesContent = {
  design: {
    title: 'DESIGN',
    description:
      'Crafting modern and intuitive interfaces tailored to specific requirements. Capable of initiating projects from scratch or enhancing existing designs, ensuring consultation throughout the process.',
  },
  development: {
    title: 'DEVELOPMENT',
    description:
      'Building high-performance and responsive web applications using cutting-edge technologies. Solutions are developed to be robust and scalable, adhering to specified requirements',
  },
  maintenance: {
    title: 'MAINTENANCE',
    description:
      'Offering continuous maintenance for projects, including regular updates, bug fixes and optimisations, to ensure peak performance and reliability.',
  },
  monitoring: {
    title: 'MONITORING',
    description:
      'Providing real-time performance monitoring of applications, analysing key metrics and anticipating potential issues to ensure maximum availability and user satisfaction.',
  },
};

export const servicesConfig = [
  { key: 'design', icon: Palette },
  { key: 'development', icon: Code },
  { key: 'maintenance', icon: Wrench },
  { key: 'monitoring', icon: Activity },
] as const;
