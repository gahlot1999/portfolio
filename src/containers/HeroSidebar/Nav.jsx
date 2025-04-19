import { navList } from '../../utils/data';

function Nav({ activeSection }) {
  return (
    <nav className='hidden lg:block'>
      <ul className='mt-16 w-max'>
        {navList.map((item, i) => (
          <li key={i}>
            <a href={`#${item.name}`} className='group flex items-center py-3'>
              <span
                className={`mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none
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
  );
}

export default Nav;
