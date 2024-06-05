'use client';

import { ReactTyped } from 'react-typed';
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const testimonials = [
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    testimony:
      'Highly skilled developer who brought our ideas to life perfectly.',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    testimony: "Ashish's design sense and technical skills are top-notch!",
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/67.jpg',
    testimony: 'Professional, efficient, and creative. Our go-to developer!',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    testimony:
      'Ashish transformed our vision into a beautiful, functional website.',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    testimony: 'Amazing work! Our website looks great and performs flawlessly.',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
    testimony:
      'Quick turnaround and excellent communication throughout the project.',
  },
];

function Hero() {
  return (
    <>
      <div className='max-w-7xl mx-auto h-full'>
        <div className='max-w-[42rem] mx-auto h-[calc(100dvh+2rem)] flex gap-6 flex-col items-center justify-center'>
          <h1 className='font-stylish text-stone-800 text-[4.35rem] tracking-wide font-extrabold leading-[1.15]'>
            Focused on design that works{' '}
            <ReactTyped
              className='text-blue-500'
              strings={[
                'efficiently',
                'intuitively',
                'inclusively',
                'beautifully',
              ]}
              typeSpeed={150}
              backSpeed={200}
              backDelay={1500}
              shuffle
              loop
            />
          </h1>
          <div className='flex gap-3 items-center'>
            <FiGithub
              size={32}
              color='rgb(41, 37, 36, .8)'
              style={{ cursor: 'pointer' }}
              className='hover:stroke-blue-500 hover:fill-blue-500'
            />
            <FiLinkedin
              size={32}
              color='rgb(41, 37, 36, .8)'
              style={{ cursor: 'pointer' }}
              className='hover:stroke-blue-500 hover:fill-blue-500'
            />
          </div>
        </div>
      </div>
      {testimonials.map((el, i) => (
        <React.Fragment key={i}>
          <TestimonialCard
            index={i}
            imgUrl={el.imageUrl}
            testimony={el.testimony}
          />
        </React.Fragment>
      ))}
    </>
  );
}

export default Hero;
