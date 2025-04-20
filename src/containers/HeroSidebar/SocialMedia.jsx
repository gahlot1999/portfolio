import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const socialMediaLinks = [
  {
    icon: <FaGithub size={24} />,
    link: 'https://github.com/gahlot1999',
  },
  {
    icon: <FaLinkedin size={24} />,
    link: 'https://www.linkedin.com/in/ashish-gahlot-90b977198/',
  },
  {
    icon: <FaInstagram size={24} />,
    link: 'https://www.instagram.com/gahlot1999/',
  },
  {
    icon: <MdMail size={26} />,
    link: 'mailto:gahlo1999@gmail.com',
  },
];

function SocialMedia() {
  return (
    <ul className='ml-1 mt-8 flex items-center gap-5'>
      {socialMediaLinks.map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            target='_blank'
            className='block hover:text-slate-200'
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
