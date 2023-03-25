import React from 'react'
import Card from './Card'
import CardCover from './CardCover'
const Skill = ({ skill: { style, name, icon } }) => {
    return (
        <Card style={style}>
            <div className="rounded-md w-full bg-black bg-opacity-40 
             group relative flex flex-col justify-between duration-500 py-2 h-24 border-black">
                <CardCover style={{ display: "hidden group-hover:block", ...style }} />
                <div className=" flex justify-center w-fit mx-auto z-20">
                    {icon}
                </div>
                <div className=' text-center text-white z-20'>
                    <p >{name}</p>
                </div>
            </div>
        </Card>
    )
}

export default Skill;
