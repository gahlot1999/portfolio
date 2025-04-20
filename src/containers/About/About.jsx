import ExternalLink from '../../components/ExternalLink';
import Heading from '../../components/Heading';

function About() {
  return (
    <div className='text-pretty'>
      <div className='lg:sr-only mb-4 sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur'>
        <Heading type='h4'>ABOUT</Heading>
      </div>
      <p className='mb-4 '>
        I’m a developer who loves building clean, accessible, and
        performance-focused user interfaces. I enjoy working at the sweet spot
        between design and development—where thoughtful design meets robust,
        maintainable code.
      </p>
      <p className='mb-4'>
        Currently, I work as a Front-End Developer at{' '}
        <ExternalLink link='https://www.accenture.com/'>Accenture</ExternalLink>
        , specializing in enhancing user experience across the platform,
        improving performance, and reusable UI components. Accessibility and
        clean code are always top priorities in everything I build.
      </p>
      <p className='mb-4'>
        Over the years, I’ve contributed to a range of projects from internal
        tools to{' '}
        <ExternalLink link='http://rai-uat.accenture.com/rai'>
          enterprise-scale applications
        </ExternalLink>
        , gaining experience across various domains and team dynamics. I’ve also
        taken the initiative on side projects, including building full-stack
        apps and learning through hands-on experimentation.
      </p>
      <p>
        Outside of work, you’ll find me exploring new tech, travelling, spending
        time with loved ones, or occasionally getting lost in an open-world
        game.
      </p>
    </div>
  );
}

export default About;
