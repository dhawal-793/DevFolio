import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import { Person, GMail, Chat, Submit } from './Icons'

const Contact = () => {
    const initialFormData = { name: "", email: "", message: "" };
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        setFormData(initialFormData)
    }, [])

    return (
        <div name="Contact" className='w-full h-screen bg-gradient-to-b to-gray-800 from-black'>
            <div className='section pb-8'>
                <SectionHeading heading="Contact" secondHeading="Fill the form to get in touch with me" />
                <div className='flex justify-center items-center'>
                    <form
                        action="https://getform.io/f/b6e07c9a-c5f3-4d99-8c12-753b18021208"
                        method='POST'
                        className='flex gap-3 flex-col w-full md:w-1/2 '
                    >
                        <div className="relative w-full">
                            <input type="text" name="name" placeholder="Enter Your Name" className='peer form-input' value={formData.name} onChange={handleChange} />
                            <span className="peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 top-1/2 -translate-y-1/2"><Person /></span>
                        </div>
                        <div className="relative w-full">
                            <input type="email" name="email" placeholder="Enter Your Email" className='peer form-input' value={formData.email} onChange={handleChange} />
                            <span className="peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 top-1/2 -translate-y-1/2"><GMail /></span>
                        </div>
                        <div className="relative w-full">
                            <textarea name="message" placeholder='Your Meaasge' rows="10" cols="30"
                                className="form-input peer" value={formData.message} onChange={handleChange} />
                            <span className="peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 top-[0.8rem] "><Chat /></span>
                        </div>

                        <button className='hover:text-blue-800 flex items-center justify-center mr-auto group text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md font-semibold px-12 py-2 hover:scale-[1.02] duration-500'>Let's Connect
                            <span className="scale-0 -translate-x-10 origin-left group-hover:scale-100 group-hover:translate-x-3 duration-300 transition-all delay-200 ease-in-out"> <Submit />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
