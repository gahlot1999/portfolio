import Resume from '../../assets/files/AshishGahlot_Resume.pdf';
import Card from '../../components/Cards/PrimaryCard/Card';
import Heading from '../../components/Heading';
import { experience } from '../../utils/data';

function Experience() {
  return (
    <>
      <ol className='group/list'>
        {experience.map((item, index) => (
          <li key={index}>
            <Card>
              <Card.Header>
                <Card.Timeline date={item.date} />
                {item.imgSrc && <Card.HeroImg imgSrc={item.imgSrc} />}
              </Card.Header>
              <Card.Content>
                <Card.Title link={item.title.link}>
                  {item.title.position} · {item.title.company}
                </Card.Title>
                <Card.Description>{item.description}</Card.Description>
                <Card.RelatedLinks links={item.links} />
                <Card.Tags tags={item.tags} />
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
    </>
  );
}

export default Experience;
