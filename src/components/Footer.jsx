import React from 'react'
import { BsFillArrowRightCircleFill, FaMapMarkedAlt, HiOutlineMail, FaRegCopyright } from "../data/icons"
import { Link } from 'react-scroll'
import navLinks from '../data/navlinks'
import contactInfo from '../data/contactInfo'
const Footer = () => {
    const year = new Date().getFullYear().toString()
    console.log(typeof year)
    return (
        <div className='bg-gradient-to-t from-gray-500 to-black w-full text-white'>
            <div className="section pb-5">
                <div className="flex flex-wrap justify-between ">
                    <div className="w-1/2 sm:w-2/3 md:w-1/3 pr-2">
                        <h3 className='text-3xl font-bold pb-2'>Dhawal Vijayvargiya</h3>
                        <p className='text-lg text-cyan-400 pb-5'>FullStack Developer</p>
                        <p className='text-gray-300'>Thank you for visiting my personal portfolio website. Connect with me over socials</p>
                        {/* <p className='text-sm'> Connect with me over live chat!</p> */}
                    </div>
                    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 pl-20 xs:pl-6 lg:pl-12">
                        <h3 className=' text-2xl font-bold pb-4'>Quick Links</h3>
                        {navLinks.map(({ link, id }) => {
                            return (
                                <div key={id} link={link} className="group w-fit px-3">
                                    <Link to={link} smooth duration={500}>
                                        <div className="flex items-center justify-between w-fit gap-2 font-semibold text-white cursor-pointer">
                                            <BsFillArrowRightCircleFill sixe={20} className="group-hover:text-cyan-500 duration-500" />
                                            <span className='bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500 group-hover:text-transparent duration-500 '>
                                                {link}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-5/12 lg:w-1/3">
                        <h3 className='text-2xl font-bold'>contact info</h3>
                        <div className="flex flex-col sm:flex-row md:flex-col py-3 gap-5 md:gap-10 justify-between">
                            <div className='text-[0.9rem] font-advanced'>
                                <p className='flex items-center gap-3 '>
                                    <HiOutlineMail className="text-red-500" size={18} /> vijaydhawal9001@gmail.com</p>
                                <p className='flex items-center gap-3 '> <FaMapMarkedAlt className="text-blue-500" size={18} />Udaipur, Rajasthan, India</p>
                            </div>
                            <div className="flex items-center  gap-5 md:gap-0 lg:gap-4 justify-start ">
                                {contactInfo.map(({ id, link, icon, style }) => {
                                    return (
                                        <div key={id} link={link} className={`w-8 h-8 flex justify-center items-center rounded-full p-1 bg-gray-700 text-white  ${style} cursor-pointer duration-500`}>
                                            <a href={link} target="_blank" rel='noferrer'>{icon}</a>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section py-2 text-black font-advanced">
                <div className="">
                    <h4 className=' text-sm text-gray-300 flex justify-center items-center  '>
                        <FaRegCopyright size={14} /> <span className="px-1 text-cyan-400 opacity-90 font-bold"> Dhawal Vijayvargiya  </span> {year} | All Rights Reserved</h4>
                </div>
            </div>
        </div >
    )
}

export default Footer
