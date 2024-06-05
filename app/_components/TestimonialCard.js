import Image from 'next/image';

const positions = {
  0: 'left-0 top-12 rotate-6',
  1: 'left-12 top-60 -rotate-6',
  2: '-left-4 top-[26rem] rotate-[12deg]',
  3: 'right-24 top-20 rotate-[12deg]',
  4: '-right-6 top-64 rotate-[12deg]',
  5: 'right-32 top-[26rem] -rotate-6',
};

function TestimonialCard({ imgUrl, testimony, index }) {
  return (
    <div
      className={`bg-stone-200 max-w-56 text-center p-4 rounded-3xl absolute shadow-lg ${positions[index]}`}
    >
      <Image
        height={50}
        width={50}
        className='mx-auto rounded-full'
        src={imgUrl}
        alt='user'
      />
      <p className='mt-2 text-[13px] font-bold text-stone-800 leading-[1.3]'>
        {testimony}
      </p>
    </div>
  );
}

export default TestimonialCard;
