import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Resume from '../assets/Pranshu-Resume.docx';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Pranshu Sharma.
        </h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>
           Front End Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a Innovative front-end developer specializing in building exceptional digital experiences. 
          Strong Believer of mobile first development. 
          Aspiring to become a Full Stack Developer.
        </p>
        <div className='flex flex-row'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            
          </button>
          <a  href={Resume} download className='text-white group border-2 px-6 py-3 my-2 mx-5 flex items-center md:hidden hover:bg-pink-600 bg-[rgb(122,41,112)] '>
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
