import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';

function Main({ sectionRefs }) {
  return (
    <main className='lg:w-[52%] mb-24'>
      <section
        id='about'
        ref={(el) => (sectionRefs.current[0] = el)}
        className='pt-24'
      >
        <About />
      </section>

      <section
        id='experience'
        ref={(el) => (sectionRefs.current[1] = el)}
        className='pt-24'
      >
        <Experience />
      </section>

      <section
        id='projects'
        ref={(el) => (sectionRefs.current[2] = el)}
        className='pt-24'
      >
        <Projects />
      </section>
    </main>
  );
}

export default Main;
