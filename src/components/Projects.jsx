import React from 'react';
import ProjectItem from './ProjectItem';
import { Playfair_Display } from 'next/font/google';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiNodedotjs,
} from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16 px-2">
        <h2 className={`${playfairDisplay.className} text-4xl mb-2 tracking-widest`}>PROJECTS</h2>

        <div className="flex flex-col mt-4">
          <ProjectItem
            title="GitHub Finder App"
            projectUrl="/githubfinder"
            logo={
              <>
                <SiReact className="text-4xl mx-2" />
                <SiTailwindcss className="text-4xl mx-2" />
                <AiFillApi className="text-4xl mx-2" />
              </>
            }
          />
          {/*  */}
          <ProjectItem
            title="Enterprise Dashboard App"
            projectUrl="/enterprise-dashboard"
            logo={
              <>
                <SiNextdotjs className="text-4xl mx-2" />
                <SiTailwindcss className="text-4xl mx-2" />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
