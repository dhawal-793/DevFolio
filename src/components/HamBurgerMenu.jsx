import React from 'react'
import { FaBars, FaHamburger, RxCross1 } from "../data/icons";
const HamBurgerMenu = ({handleClick ,navOpen}) => {
    return (

        <div className='group md:hidden z-50 cursor-pointer text-gray-500 hover:scale-110 hover:text-gray-300 ease-in-out duration-200'
            onClick={handleClick}
        >
            {navOpen && <RxCross1 size={25} className="hover:text-red-500" />}
            {!navOpen &&
                <div>
                    <FaBars size={25} className="group-hover:hidden" />
                    <FaHamburger size={25} className="hidden group-hover:block" />
                </div>
            }
        </div>
    )
}

export default HamBurgerMenu;
