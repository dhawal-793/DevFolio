import React from "react";
import GridLayout from "./GridLayout";
import SectionHeading from "./SectionHeading";
import skills from "../data/skills";
import Skill from "./Skill";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Skills = () => {
  return (
    <div
      name="Skills"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Skills"
            secondHeading="These are the Technologies I've worked with"
          />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <div className="py-2 xs:p-4 rounded-lg bg-gray-900">
            <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {skills.map((skill, i) => {
                return (
                  <AnimatedWrapper
                    key={skill.name}
                    animateFrom="bottom"
                    delay={1.0}
                  >
                    <Skill skill={skill} />
                  </AnimatedWrapper>
                );
              })}
            </GridLayout>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Skills;
