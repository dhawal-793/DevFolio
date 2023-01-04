import React from 'react'
import SectionHeading from './SectionHeading'
import { BsPersonFill, HiOutlineMail, AiOutlineMessage, FaTelegramPlane } from "../data/icons"

const Contact = () => {
    return (
        <div name="Contact" className='w-full h-screen bg-gradient-to-b to-gray-800 from-black'>
            <div className='section pb-8'>
                <SectionHeading heading="Contact" secondHeading="Fill the form to get in touch with me" />
                <div className='flex justify-center items-center'>
                    <form
                        action="https://getform.io/f/b6e07c9a-c5f3-4d99-8c12-753b18021208"
                        method='POST'
                        className='flex gap-3 flex-col w-full md:w-1/2 '>
                        <div className="relative w-full">
                            <input type="text" name="name" placeholder="Enter Your Name" className='form-input' />
                            <BsPersonFill size={20} className="text-white absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                        <div className="relative w-full">
                            <input type="email" name="email" placeholder="Enter Your Email" className='form-input' />
                            <HiOutlineMail size={20} className="text-white absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                        <div className="relative w-full">
                            <textarea name="message" placeholder='Your Meaasge' rows="10" cols="30"
                                className="form-input"
                            /><AiOutlineMessage size={20} className=" text-white absolute left-3 top-[0.8rem] " />
                        </div>

                        <button className='hover:text-blue-800 flex items-center justify-center mr-auto text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md font-semibold px-12 py-2 hover:scale-[1.02] duration-500'>Let's Connect <FaTelegramPlane size={28} className="pl-3 group-hover:scale-110 " /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
