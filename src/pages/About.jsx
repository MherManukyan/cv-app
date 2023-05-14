import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link} from "react-scroll"
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#333] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Programming</p>
            </div>
            <div>
              <p>
              Programming involves writing instructions for computers to execute specific tasks. It encompasses designing, coding, and maintaining software programs. Popular programming languages in recent years include Python, JavaScript, and C++. Object-oriented programming (OOP) is a widely used approach that organizes code into reusable modules. Web development has seen significant advancements with HTML, CSS, and frameworks like React and Angular. Additionally, mobile app development has grown with platforms like iOS and Android. Collaboration and sharing of code through open-source platforms such as GitHub have become prevalent. Programming skills are in high demand across industries, making it a valuable and rewarding field for individuals to pursue.
                </p>  
            </div>
          </div>
          <Link to='advantages' smooth={true} duration={500}  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          Advantages of Programming
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
      </div>
     
    </div>
    
  );
};

export default About;


