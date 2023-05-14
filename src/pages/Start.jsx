import React from 'react';

const About = () => {
  return (
    <div name='start' className='w-full h-screen bg-[#333] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Why you need to start programming?
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
              Starting programming can be highly beneficial for several reasons. Firstly, programming provides valuable skills that are in high demand across industries, opening up a wide range of career opportunities. It enhances problem-solving and logical thinking abilities, fostering a structured and analytical mindset. Programming allows individuals to create and bring their ideas to life, empowering them to develop innovative solutions. It promotes creativity and self-expression through coding. Additionally, programming encourages continuous learning, as technology evolves rapidly, ensuring a dynamic and engaging career path. Moreover, programming offers the potential for remote work and flexible schedules, providing a desirable work-life balance. Ultimately, starting programming can lead to personal growth, professional success, and the ability to contribute to the advancement of technology.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;


