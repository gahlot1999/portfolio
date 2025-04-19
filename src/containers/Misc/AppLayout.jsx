import { useRef } from 'react';
import BgGradient from '../../components/BgGradient';
import HeroSidebar from '../HeroSidebar/HeroSidebar';
import Main from '../Main/Main';

function AppLayout() {
  const sectionRefs = useRef([]);

  return (
    <>
      <div className='mx-auto max-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <HeroSidebar sectionRefs={sectionRefs} />
          <Main sectionRefs={sectionRefs} />
        </div>
      </div>
      <BgGradient />
    </>
  );
}

export default AppLayout;
