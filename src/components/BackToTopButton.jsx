import React, { useEffect, useState } from 'react'
import { ArrowUp } from "./Icons"
import { Link } from 'react-scroll'

const BackToTopButton = () => {
    const [btnVisiblity, setBtnVisiblity] = useState(false)
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const toggleVisiblity = () => {
            window.pageYOffset > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
        }
        window.addEventListener('scroll', toggleVisiblity);
        return () => {
            window.removeEventListener('scroll', toggleVisiblity);
        }
    }, [])


    return (
        <Link onClick={handleScroll} to="Home" smooth duration={500} className='' >
            <div className={`-translate-y-[100vh] transition-all delay-100 ${btnVisiblity && "translate-y-0"} z-[49] fixed bottom-2 right-2 xs:bottom-[1.3rem] xs:right-[1.3rem] md:bottom-4 md:right-4 w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 cursor-pointer  hover:scale-[1.08] duration-500 text-white`}>
                <ArrowUp />
            </div>
        </Link>
    )
}

export default BackToTopButton;
