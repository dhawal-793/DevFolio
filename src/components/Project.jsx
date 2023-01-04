import React from 'react'
import Card from './Card';
import CardCover from './CardCover';
const Project = ({ project: { img, demo, code, description, style = { shadow: "shadow-gray-500", cover: "from-gray-500" } } }) => {
    return (
        <Card style={style} >

            <div className="group relative rounded-md cursor-pointer">
                <img src={img} alt="Projec-Image" className='rounded-t-md ' />
                <CardCover text={description} style={style} />
            </div>
            <div className='flex justify-center items-center rounded-b-md'>
                <ProjectsLink name="Demo" style={"rounded-bl-md " + style.cover} link={demo} />
                <ProjectsLink name="Code" style={"rounded-br-md " + style.cover} link={code} />
            </div>
        </Card>
    )
}

export default Project


const ProjectsLink = ({ name, link, style }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer"
            className={` w-1/2 py-3 text-center text-gray-400 font-bold text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 `}>
            {name}
        </a>
    )
}

