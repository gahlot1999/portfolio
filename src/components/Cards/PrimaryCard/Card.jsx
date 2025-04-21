import Chip from './Chip';
import Description from './Description';
import HeroImg from './HeroImg';
import RelatedLink from './RelatedLink';
import Timeline from './Timeline';
import Title from './Title';

function Card({ children }) {
  return (
    <div className='group flex flex-col lg:flex-row lg:gap-4 relative mb-12 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
      <div className='absolute z-0 -inset-x-4 -inset-y-4 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
      {children}
    </div>
  );
}

Card.Header = function ({ children }) {
  return <div className='z-10 w-40 shrink-0 contents sm:block'>{children}</div>;
};

Card.Content = function ({ children }) {
  return <div className='flex-1 z-10 contents sm:block'>{children}</div>;
};

Card.Timeline = function ({ date }) {
  return <Timeline date={date} />;
};

Card.HeroImg = function ({ imgSrc }) {
  return <HeroImg imgSrc={imgSrc} />;
};

Card.Title = function ({ link, children }) {
  return <Title link={link}>{children}</Title>;
};

Card.Description = function ({ children }) {
  return <Description>{children}</Description>;
};

Card.RelatedLinks = function ({ links = [] }) {
  return (
    <ul className='mt-2 flex flex-wrap'>
      {links.map((item, index) => (
        <li key={index} className='mr-4'>
          <RelatedLink link={item.link}>{item.name}</RelatedLink>
        </li>
      ))}
    </ul>
  );
};

Card.Tags = function ({ tags = [] }) {
  return (
    <ul className='mt-2 flex flex-wrap'>
      {tags.map((tag, index) => (
        <li key={index} className='mr-1.5 mt-2'>
          <Chip>{tag}</Chip>
        </li>
      ))}
    </ul>
  );
};

export default Card;
