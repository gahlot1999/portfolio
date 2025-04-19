import Heading from '../../components/Heading';

function Header() {
  return (
    <>
      <Heading type='h1'>
        <a href='#'>Ashish Gahlot</a>
      </Heading>
      <Heading type='h2'>Front End Engineer</Heading>
      <p className='mt-4 max-w-xs leading-normal font-primary'>
        I build accessible, pixel-perfect digital experiences for the web.
      </p>
    </>
  );
}

export default Header;
