import React from 'react'

const SectionHeading = ({ heading,secondHeading }) => {
    return (
        <div className="pb-8 text-white">
            <h3 className='text-4xl px-1 inline border-b-4 border-gray-400  font-bold '>{heading}</h3>
            {secondHeading && <p className='py-6 text-lg'>
                {secondHeading}
            </p>}
        </div>
    )
}

export default SectionHeading;
