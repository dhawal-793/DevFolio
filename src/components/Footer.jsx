import React from 'react'
import { GMail, Map, CopyRight, ArrowRightLong } from './Icons'
import { Link } from 'react-scroll'
import navLinks from '../data/navlinks'
import contactInfo from '../data/contactInfo'
const Footer = () => {
    const year = new Date().getFullYear().toString()
    return (
        <div className='bg-gradient-to-t from-gray-500 to-black w-full text-white'>
            <div className="section pb-5">
                <div className="flex flex-wrap justify-between ">
                    <div className="w-1/2 sm:w-3/5 md:w-1/3 pr-2">
                        <h3 className='text-3xl font-bold pb-2'>Dhawal Vijayvargiya</h3>
                        <p className='text-lg text-cyan-400 pb-5'>FullStack Developer</p>
                        <p className='text-gray-300'>Thank you for visiting my personal portfolio website. Connect with me over socials</p>
                    </div>
                    <div className="w-1/2 sm:w-2/5 md:w-auto lg:w-1/3 pl-16 md:pl-5 lg:pl-[5.5rem] justify-start">
                        <h3 className=' text-2xl font-bold pb-4'>Quick Links</h3>
                        {navLinks.map(({ link, id }) => {
                            return (
                                <div key={id} className="group w-fit px-3">
                                    <Link href={link} >
                                        <div className="flex items-center justify-between w-fit gap-2 font-semibold text-white cursor-pointer">
                                            <ArrowRightLong />
                                            <span className='bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500 group-hover:text-transparent duration-500 '>
                                                {link}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-fit lg:w-1/3 md:pl-8 lg:pl-0">
                        <h3 className='text-2xl font-bold'>Contact info</h3>
                        <div className="flex flex-col sm:flex-row md:flex-col py-3 gap-5 md:gap-10 justify-between">
                            <div className='text-[0.9rem] font-advanced'>
                                <p className='flex items-center gap-3 mb-1'>
                                    <GMail /> vijaydhawal9001@gmail.com</p>
                                <p className='flex items-center gap-3 '> <Map /><span className="pt-1">Udaipur, Rajasthan, India</span></p>
                            </div>
                            <ul className="flex items-center  gap-5 md:gap-2 lg:gap-4 justify-start ">
                                {contactInfo.map(({ id, link, name, icon, download }) => {
                                    return (
                                        <li key={id} link={link} className={`group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale  cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105`}>
                                            <a href={link} download={download} target="_blank" rel='noferrer'>{icon}</a>
                                            <div className="flex scale-0 group-hover:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                                                {name}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section py-2 text-black font-advanced">
                <div className="">
                    <h4 className=' text-sm text-gray-300 flex justify-center items-center  '>
                        <CopyRight /> <span className="px-1 text-cyan-400 opacity-90 font-bold"> Dhawal Vijayvargiya  </span> {year} | All Rights Reserved</h4>
                </div>
            </div>
        </div >
    )
}

export default Footer
