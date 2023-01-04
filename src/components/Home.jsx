import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { MdKeyboardArrowRight } from "../data/icons";
import Avatar from "../assets/Avatars/Avatar.svg"
const Home = () => {
    const work = ['Frontend Development', 2000, 'Backend Development',2000,'Android Development',2000, 'Web Designing', 2000, 'UI/UX Designing', 2000]

    return (
        <div name='Home' className=' outline-blue-500 h-screen min-h-[80vh] w-full bg-gradient-to-b from-black via-black to-gray-800 '>
            <div className='section gap-28 md:gap-1 md:justify-between items-center md:flex-row'>

                <div className='flex flex-col gap-3 justify-center text-gray-200 w-max md:w-3/5'>
                    <h2 className=' text-6xl lg:text-7xl font-bold '>Hi There,</h2>
                    <h2 className=' text-6xl lg:text-7xl font-bold '>I'm <span className='text-transparent bg-gradient-to-br from-cyan-300 to-blue-600 bg-clip-text'> Dhawal </span></h2>
                    <p className='text-gray-400 text-2xl font-semibold py-4 min-w-[25rem] max-w-[26rem]'>
                        I am into 

                        <span className='text-cyan-400 pl-2'>
                            <TypeAnimation
                                sequence={work}
                                speed={1}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </span>
                    </p>
                    <div>
                        <Link to="About" smooth duration={500} className='group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center px-6 py-3 pl-8 rounded-lg ease-in duration-500 cursor-pointer w-fit'>
                            About Me
                            <span className="group-hover:rotate-90 duration-500 ml-2">
                                <MdKeyboardArrowRight size={25} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:w-2/5 max-w-[320px]'>
                    <img src={Avatar} alt="" className=' rounded-full mx-auto w-full ' />
                </div>
            </div>
        </div>
    )
}

export default Home;
