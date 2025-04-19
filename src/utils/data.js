import FinmateImg from '../assets/images/finmate.png';
import Montra from '../assets/images/montra.png';
import ResponsibleAI from '../assets/images/responsibleAI.png';
import TalentHR from '../assets/images/talentHR.jpg';

export const navList = [
  {
    name: 'about',
  },
  {
    name: 'experience',
  },
  {
    name: 'projects',
  },
];

export const experience = [
  {
    date: 'Mar 2023 — Present',
    imgSrc: ResponsibleAI,
    title: {
      position: 'Responsibile AI',
      company: 'Accenture',
      link: 'https://www.accenture.com',
    },
    description:
      'Built and optimized a user-friendly web app by following React and front-end best practices. Improved speed and performance with lazy loading and code splitting. Refactored large files into clean, modular components for better readability and faster debugging. Used central state management and dynamic forms to reduce repetition and boost development speed. Created reusable components to make the app easier to maintain and scale.',
    links: [
      {
        name: 'Accenture',
        link: 'https://www.accenture.com',
      },
      {
        name: 'Responsible AI',
        link: 'http://rai-beta.accenture.com/',
      },
    ],
    tags: [
      'React',
      'Redux',
      'Redux Saga',
      'Tailwind CSS',
      'Apex Charts',
      'Antd',
      'Performance Optimization',
    ],
  },
  {
    date: 'AUG 2021 — Feb 2023',
    imgSrc: TalentHR,
    title: {
      position: 'Talent HR',
      company: 'Accenture',
      link: 'https://www.accenture.com',
    },
    description:
      'Designed and built a clean, user-friendly interface for uploading and ranking resumes. Created dynamic forms with proper validations using React Hook Form, improving accuracy and user experience. Developed an admin panel to manage users and simplify access control. Followed best practices in component design to keep the app lightweight. Worked closely with backend developers to integrate APIs smoothly and ensure reliable data flow across the app.',

    tags: ['React', 'Tanstack Query', 'React PDF', 'MUI', 'Module CSS'],
  },
];

export const projects = [
  {
    imgSrc: FinmateImg,
    title: {
      name: 'FinMate',
      link: 'https://finmate.netlify.app/',
    },
    description:
      'Built a full-stack personal finance app, including user authentication and secure handling of user-specific data. Users can manage budgets, track expenses, and view spending by categories. Designed dynamic forms, reusable components, and used React Query for smooth, real-time API integration. Focused on clean UI, modular code, and performance for easy maintenance.',
    tags: [
      'React',
      'React Query',
      'Axios',
      'Yup',
      'Node.js',
      'Auth',
      'JWT',
      'Express.js',
      'MongoDB',
      'Recharts',
      'Module CSS',
    ],
  },
  {
    imgSrc: Montra,
    title: {
      name: 'Montra',
      link: 'https://ak-montra.netlify.app/',
    },
    description:
      'Built Montra, a personal finance management app using React for the frontend and Supabase for both backend and authentication. Functionally similar to Finmate, Montra focuses on simplifying backend and authentication with the ease of Supabase while providing a user-friendly experience.',
    tags: ['React', 'React Query', 'Supabase', 'Auth', 'Module CSS'],
  },
];
