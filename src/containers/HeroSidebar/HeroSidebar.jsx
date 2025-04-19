import { useEffect, useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import SocialMedia from './SocialMedia';

function HeroSidebar({ sectionRefs }) {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    function handleScroll() {
      let currentSection = '';
      sectionRefs.current.forEach((section) => {
        const sectionTop = Math.floor(section.offsetTop);
        const sectionHeight = section.offsetHeight;
        const scrollPosition = Math.floor(window.pageYOffset);
        const buffer = 5;

        if (
          scrollPosition + buffer >= sectionTop &&
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
        <Header />
        <Nav activeSection={activeSection} />
      </div>
      <SocialMedia />
    </header>
  );
}

export default HeroSidebar;
