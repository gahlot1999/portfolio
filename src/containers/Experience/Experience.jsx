import Resume from '../../assets/files/AshishGahlot_Resume.pdf';
import Card from '../../components/Cards/PrimaryCard/Card';
import Heading from '../../components/Heading';
import { experience } from '../../utils/data';

function Experience() {
  return (
    <div>
      <div className='lg:sr-only mb-4 sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur'>
        <Heading type='h4'>EXPERIENCE</Heading>
      </div>
      <ol className='group/list'>
        {experience.map((item, index) => (
          <li key={index}>
            <Card>
              <Card.Header>
                <Card.Timeline date={item.date} />
                <span className='order-3 w-[85%]'>
                  {item.imgSrc && <Card.HeroImg imgSrc={item.imgSrc} />}
                </span>
              </Card.Header>
              <Card.Content>
                <span className='order-2'>
                  <Card.Title link={item.title.link}>
                    {item.title.position} · {item.title.company}
                  </Card.Title>
                </span>
                <span className='order-4'>
                  <Card.Description>{item.description}</Card.Description>
                </span>
                <span className='order-5'>
                  <Card.RelatedLinks links={item.links} />
                </span>
                <span className='order-6'>
                  <Card.Tags tags={item.tags} />
                </span>
              </Card.Content>
            </Card>
          </li>
        ))}
      </ol>

      <div className='relative'>
        <Heading type='h3' link={Resume}>
          View Full Resume
        </Heading>
      </div>
    </div>
  );
}

export default Experience;
