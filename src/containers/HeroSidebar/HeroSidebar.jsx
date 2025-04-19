import { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import { navList } from '../../utils/data';

function HeroSidebar({ sectionRefs }) {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    function handleScroll() {
      let currentSection = '';
      sectionRefs.current.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.pageYOffset;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <Heading type='h1'>
          <a href='#'>Ashish Gahlot</a>
        </Heading>
        <Heading type='h2'>Front End Engineer</Heading>
        <p className='mt-4 max-w-xs leading-normal font-primary'>
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <nav className='hidden lg:block'>
          <ul className='mt-16 w-max'>
            {navList.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.name}`}
                  className='group flex items-center py-3'
                >
                  <span
                    className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none
                    ${
                      activeSection === item.name
                        ? 'w-16 bg-slate-200'
                        : 'w-8 bg-slate-600'
                    }`}
                  ></span>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                      activeSection === item.name
                        ? 'text-slate-200'
                        : 'text-slate-500'
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className='mt-8 flex gap-5'>
        <li>Icon 1</li>
        <li>Icon 2</li>
        <li>Icon 3</li>
        <li>Icon 4</li>
        <li>Icon 5</li>
      </ul>
    </header>
  );
}

export default HeroSidebar;
