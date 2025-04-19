import FinmateImg from '../assets/images/finmate.png';

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
    date: '2022 - Present',
    title: {
      position: 'Frontend Developer',
      company: 'Accenture',
      link: 'https://www.accenture.com',
    },
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, eum unde. Accusantium non sit aliquid consequuntur. Iste ratione eos, voluptatum aspernatur tempore minus eligendi dolorem modi natus obcaecati ipsa impedit quod numquam? Neque optio quae eveniet officiis, nisi nemo modi.',
    links: [
      {
        name: 'Accenture',
        link: 'https://www.accenture.com',
      },
    ],
    tags: ['React', 'JavaScript', 'Node.js'],
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
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, eum unde. Accusantium non sit aliquid consequuntur. Iste ratione eos, voluptatum aspernatur tempore minus eligendi dolorem modi natus obcaecati ipsa impedit quod numquam? Neque optio quae eveniet officiis, nisi nemo modi.',
  },
];
