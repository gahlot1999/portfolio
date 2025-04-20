function HeroImg(props) {
  return (
    <img
      src={props.imgSrc}
      className='mb-2 mt-1 self-start aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:translate-y-1'
    />
  );
}

export default HeroImg;
