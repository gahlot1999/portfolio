function Footer() {
  return (
    <footer className='max-w-md mt-32 pb-16 text-sm text-slate-500 sm:pb-0'>
      <p>
        Loosely designed in{' '}
        <a
          href='https://www.figma.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
        >
          Figma
        </a>{' '}
        and coded in{' '}
        <a
          href='https://code.visualstudio.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
        >
          Visual Studio Code
        </a>{' '}
        by yours truly. Built with{' '}
        <a
          href='https://react.dev/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
        >
          React
        </a>{' '}
        and{' '}
        <a
          href='https://tailwindcss.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
        >
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a
          href='https://www.netlify.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
        >
          Netlify
        </a>
        . All text is set in the{' '}
        <a
          href='https://rsms.me/inter/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
        >
          Inter
        </a>{' '}
        typeface.
      </p>
    </footer>
  );
}

export default Footer;
