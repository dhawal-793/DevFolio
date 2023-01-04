import React from 'react'
import SectionHeading from './SectionHeading'
import Project from './Project'
import personalProjects from '../data/projects'
import GridLayout from './GridLayout'
const Projects = () => {
    return (
        <div name="Projects" className='w-full bg-gradient-to-b py-5 from-black via-black to-gray-800 text-white'>
            <div className='section pb-8'>

                <SectionHeading heading="Projects" secondHeading="Check Out Some of my work" />

                <GridLayout style="sm:grid-cols-2 md:grid-cols-3">
                    {personalProjects.map((project) => {
                        return (
                            <Project key={project.id} project={project} />
                        )
                    })}

                </GridLayout>
            </div>
        </div>
    )
}

export default Projects
