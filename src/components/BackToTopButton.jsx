import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from "../data/icons"
import { Link } from 'react-scroll'

const BackToTopButton = () => {
    const [btnVisiblity, setBtnVisiblity] = useState(false)
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const toggleVisiblity = () => {
            window.pageYOffset >250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
        }
        window.addEventListener('scroll', toggleVisiblity);
        return () => {
            window.removeEventListener('scroll', toggleVisiblity);
        }
    }, [])


    return (
        <>

            {btnVisiblity &&
                <Link onClick={handleScroll} to="Home" smooth duration={500} className='' >
                    <div className=' z-[60] fixed bottom-4 right-4 w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 cursor-pointer hover:scale-105 duration-500 text-white'>
                        <MdKeyboardArrowUp size={22} />

                    </div>
                </Link>
            }
        </>
    )
}

export default BackToTopButton
