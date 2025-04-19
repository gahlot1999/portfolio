import Card from '../../components/Cards/PrimaryCard/Card';
import { projects } from '../../utils/data';

function Projects() {
  return (
    <ol className='group/list'>
      {projects.map((item, index) => (
        <li key={index}>
          <Card>
            <Card.Header>
              <Card.HeroImg imgSrc={item.imgSrc} />
            </Card.Header>
            <Card.Content>
              <Card.Title link={item.title.link}>{item.title.name}</Card.Title>
              <Card.Description>{item.description}</Card.Description>
            </Card.Content>
          </Card>
        </li>
      ))}
    </ol>
  );
}

export default Projects;
