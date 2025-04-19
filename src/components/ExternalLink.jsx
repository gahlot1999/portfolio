function ExternalLink(props) {
  const { children, newTab = true, link, ariaLabel } = props;

  return (
    <a
      href={link}
      target={newTab ? '_blank' : '_self'}
      className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
      rel='noreferrer noopener'
      aria-label={ariaLabel || `${children} (open in a new tab)`}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
