import Heading from '../../Heading';

function Title(props) {
  const { children, link } = props;
  return (
    <Heading type='h3' link={link}>
      {children}
    </Heading>
  );
}

export default Title;
