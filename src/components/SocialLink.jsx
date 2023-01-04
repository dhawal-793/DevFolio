import React from 'react'
const SocialLink = ({ social: { name, icon, style, link ,download} }) => {
    return (
        <li className={`bg-[#1b063c] text-white flex justify-between items-center px-[0.3rem]  ml-[-95px]  hover:ml-[-10px] w-32 h-8 xl:px-[0.5rem] xl:ml-[-105px] xl:hover:ml-[-10px] xl:w-36 xl:h-10 hover:bg-white hover:text-red-500 hover:rounded-r-md  duration-500 ${style}`}>
            <a className='flex justify-between items-center w-full'
                href={link} target="_blank" rel="noreferrer" download={download}>
                <div className='pl-3 font-semibold  xl:text-lg'>
                    {name}
                </div>
                <div>
                    {icon}
                </div>
            </a>
        </li>
    )
}

export default SocialLink;
