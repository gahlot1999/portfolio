import Link from 'next/link';

function Header() {
  return (
    <header className='fixed top-4 left-[50%] translate-x-[-50%] bg-white/60 flex items-center justify-between w-[70vw] pr-1 rounded-lg overflow-hidden shadow-lg z-50'>
      <ul className='flex items-center text-sm font-light text-stone-700'>
        <li className='cursor-pointer hover:bg-stone-300/40 py-4 px-3'>
          <Link href=''>Home</Link>
        </li>
        <li className='cursor-pointer hover:bg-stone-300/40 py-4 px-3'>
          <Link href=''>Work</Link>
        </li>
        <li className='cursor-pointer hover:bg-stone-300/40 py-4 px-3'>
          <Link href=''>Services</Link>
        </li>
        <li className='cursor-pointer hover:bg-stone-300/40 py-4 px-3'>
          <Link href=''>About</Link>
        </li>
      </ul>

      <p className='font-black text-lg text-stone-700'>ashish.dev</p>

      <button className='text-sm bg-blue-500 text-stone-50 px-5 py-3 rounded-lg font-semibold uppercase'>
        Contact
      </button>
    </header>
  );
}

export default Header;
