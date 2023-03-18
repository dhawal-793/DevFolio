import React from 'react'
import { Hamburger, Menu, Cancel } from './Icons';
const HamBurgerMenu = ({ handleClick, navOpen }) => {
    return (

        <div className='group md:hidden z-50 cursor-pointer text-gray-500 hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300'
            onClick={handleClick}
        >
            {navOpen &&
                <div className='group'>
                    <span className="group-hover:hidden ">
                        <Cancel color="#6B7280" />
                    </span>
                    <span className="hidden group-hover:block">
                        <Cancel color="#EF4444" />
                    </span>
                </div>
            }
            {!navOpen &&
                <div>
                    <span className="group-hover:hidden ">
                        <Menu />
                    </span>
                    <span className="hidden transition-all delay-75 group-hover:block">
                        <Hamburger />
                    </span>
                </div>
            }
        </div>
    )
}

export default HamBurgerMenu;
