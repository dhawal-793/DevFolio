import React, { useState } from 'react';
import HamBurgerMenu from './HamBurgerMenu';
import Navigation from './Navigation';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const handleClick = () => {
        setNavOpen(prevValue => !prevValue)
    }
    return (
        <>
            <div className='fixed flex justify-between items-center px-5 w-full h-20 bg-gradient-to-b from-black via-black to-transparent z-50 bg-opacity-[0.9]'>
                <div className='font-signature text-3xl duration-500 text-white hover:text-cyan-400'>
                    <h1 className='px-3 w-max'>Dhawal </h1>
                </div>

                <Navigation ulClass="hidden md:flex" liClass="" />
                <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />

                <Navigation handleClick={handleClick} ulClass={`scale-0 animate-menu xs:origin-[292px_38px] duration-500 ${navOpen && "scale-100 "} flex flex-col h-screen bg-gradient-to-b from-black to-gray-800 w-screen xs:w-80  top-0 right-0 absolute items-center justify-center`} liClass="my-4 py-2 text-lg" />
            </div>
            <div className="md:hidden h-32 w-full bg-black"></div>
        </>
    )
}

export default Navbar;