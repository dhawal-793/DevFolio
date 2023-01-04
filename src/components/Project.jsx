import React from 'react'
import Card from './Card';
import { FaRegEye, FaCode } from "react-icons/fa"
import { ImEye } from "react-icons/im"
import CardCover from './CardCover';
const Project = ({ project: { img, demo, code, description, style = { shadow: "shadow-gray-500", cover: "from-gray-500" } } }) => {
    return (
        <Card style={style} >

            <div className="group relative rounded-md cursor-pointer">
                <img src={img} alt="Projec-Image" className='rounded-t-md ' />
                <CardCover text={description} style={style} />
            </div>
            <div className='flex justify-center items-center rounded-b-md'>
                <ProjectsLink name="Code" style={"rounded-bl-md " + style.cover} link={code} />
                <ProjectsLink name="Demo" style={"rounded-br-md " + style.cover} link={demo} />
            </div>
        </Card>
    )
}

export default Project;


const ProjectsLink = ({ name, link, style }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer"
            className={` w-1/2 py-3 text-center  font-bold text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white`}>

            {name === "Code" ? <FaCode size={20} /> : <ImEye size={20} />} <span className='pl-2'>{name}</span>
        </a>
    )
}

