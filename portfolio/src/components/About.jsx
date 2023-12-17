import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi I'm a Software Developer. I have 2+ yrs of experience in IT industry.
                        I have been experienced in Java.</p>
                    </div>
                    <div>
                        <p>Skilled Software Engineer effective at incorporating user requirements to
                        produce high-quality, clean and robust code. Excellent design and development
                        abilities. Work well with fellow developers, quality assurance team members and
                        engineers to produce flawless applications.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About