
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import resume from "../assets/resume.pdf"
import profile from "../assets/profile.jpg"
import SectionHeading from './SectionHeading';


const About = () => {
    return (
        <div name='About' className=' outline-blue-500 h-screen min-h-[80vh] w-full bg-gradient-to-b to-black via-black from-gray-800 '>
            <div className='py-20 section justify-between'>
                <SectionHeading heading="About Me" />
                <div className='mb-10  flex flex-col justify-center '>
                    <img src={profile} alt="" className='grayscale hover:grayscale-0 hover:scale-[1.02] duration-300 rounded-2xl w-1/2 mx-auto  md:w-[270px]' />
                </div>
                <div className='flex flex-col justify-center w-full px-10 md:px-24 lg:px-28 text-white'>
                    <h1 className=' text-4xl md:text-5xl lg:text-6xl font-semibold '>Hi, I'm <span className='text-cyan-500'>Dhawal</span></h1>
                    <p className='text-gray-400 py-4 md:pt-8 lg:pt-12 font-semibold '> I am a Computer Science Student, currently pursuing BCA from MohanLal Sukhadia University, Udaipur.
                        I love to make Web Applications using MERN stack, Tailwind, and NextJs.
                    </p>

                    <div>
                        <a href={resume} target="_blank" rel="noreferrer" download={true} className='group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center px-6 py-3 pl-8 rounded-lg ease-in duration-500 cursor-pointer w-fit'>
                            Resume
                            <span className="group-hover:rotate-90 duration-500 ml-2">
                                <MdKeyboardArrowRight size={25} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;
