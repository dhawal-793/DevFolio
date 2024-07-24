import React from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import personalProjects from "../data/projects";
import GridLayout from "./GridLayout";
import AnimatedWrapper from "./ui/AnimatedWrapper";
const Projects = () => {
  return (
    <div
      name="Projects"
      className="pt-10 h-full min-h-screen w-full flex items-center  bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Projects"
            secondHeading="Check Out Some of my work"
          />
        </AnimatedWrapper>

        <GridLayout style="sm:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3 gap-2">
          {personalProjects.map((project, i) => {
              return (
                <AnimatedWrapper
                key={project.name}
                animateFrom="bottom"
                delay={0.8}
              >
                <Project key={project.name} project={project} />
              </AnimatedWrapper>
            );
          })}
        </GridLayout>
      </div>
    </div>
  );
};

export default Projects;
