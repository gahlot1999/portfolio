function Heading(props) {
  const { children, type = 'h2', link } = props;

  if (type === 'h1') {
    return (
      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
        {children}
      </h1>
    );
  }

  if (type === 'h2') {
    return (
      <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
        {children}
      </h2>
    );
  }

  if (type === 'h3') {
    return (
      <h3 className='font-medium leading-snug text-slate-200'>
        <div>
          <a
            href={link}
            aria-label={`${children} (opens in a new tab)`}
            target='_blank'
            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base'
          >
            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
            <span>
              {children}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </h3>
    );
  }

  if (type === 'h4') {
    return (
      <h4 className='text-sm font-bold leading-snug text-slate-300 tracking-widest'>
        {children}
      </h4>
    );
  }
}

export default Heading;
