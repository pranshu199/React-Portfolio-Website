import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-[#1d2e47] text-gray-300 p-20'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-20'>
            <div className='sm:text-right text-4xl font-bold'>
              <p> Nice to meet you.<br/> Please take a look around.</p>
            </div>
            <div>
              <p>Creative Front End Developer with 2 years of experience building and 
                  maintaining responsive websites. Proficient in ReactJS, JavaScript, 
                  MaterialUI, NodeJS and Htmls, CSS plus modern libraries and frameworks. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
