import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link} from "react-scroll"
const About = () => {
  return (
    <div name='advantages' className='w-full h-screen bg-[#333] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Advantages
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
              Programming offers several advantages. Firstly, it enables automation, allowing tasks to be performed quickly and accurately, increasing efficiency. Secondly, programming allows for customization, as software can be tailored to specific needs. It fosters problem-solving and logical thinking skills, improving cognitive abilities. Moreover, programming empowers creativity, enabling individuals to bring their innovative ideas to life. It provides opportunities for remote work and flexibility. Additionally, programming skills are in high demand, offering diverse career prospects and competitive salaries. It promotes continuous learning, as technology evolves rapidly. Finally, programming empowers individuals to contribute to the development of cutting-edge technologies, shaping the future and making a positive impact on society.
                </p>  
            </div>
          </div>
          <Link to='start' smooth={true} duration={500}  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          Start Programming now
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
      </div>
      
    </div>
  );
};

export default About;


