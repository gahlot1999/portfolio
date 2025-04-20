import Card from '../../components/Cards/PrimaryCard/Card';
import Heading from '../../components/Heading';
import { projects } from '../../utils/data';

function Projects() {
  return (
    <div>
      <div className='lg:sr-only mb-4 sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur'>
        <Heading type='h4'>PROJECTS</Heading>
      </div>
      <ol className='group/list'>
        {projects.map((item, index) => (
          <li key={index}>
            <Card>
              <Card.Header>
                <span className='order-4 w-[85%] mt-2'>
                  {item.imgSrc && <Card.HeroImg imgSrc={item.imgSrc} />}
                </span>
              </Card.Header>
              <Card.Content>
                <span className='order-1'>
                  <Card.Title link={item.title.link}>
                    {item.title.name}
                  </Card.Title>
                </span>
                <span className='order-2'>
                  <Card.Description>{item.description}</Card.Description>
                </span>
                <span className='order-3'>
                  {item.tags && <Card.Tags tags={item.tags} />}
                </span>
              </Card.Content>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Projects;
