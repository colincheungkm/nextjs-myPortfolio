import React from "react";
import ProjectItem from "./ProjectItem";
import { Playfair_Display } from "next/font/google";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16 px-2">
        <h2 className={`${playfairDisplay.className} text-4xl text-[#00bcd4] mb-2 tracking-widest`}>
          PROJECTS
        </h2>

        <div className="flex flex-col mt-4">
          {/* portfolio */}
          <ProjectItem
            title="this.site :]"
            projectUrl="/#home"
            logo={
              <>
                <SiNextdotjs className="mx-1 text-[#fafafa]" />
                <SiTailwindcss className="mx-1 text-[#7dd3fc]" />
              </>
            }
          />

          {/* todo */}
          <ProjectItem
            title="To Do App w/ Firebase"
            projectUrl="/todo-firebase"
            logo={
              <>
                <SiNextdotjs className="mx-1 text-[#fafafa]" />
                <SiTailwindcss className="mx-1 text-[#7dd3fc]" />
                <SiFirebase className="mx-1 text-[#fb923c]" />
              </>
            }
          />

          {/* GITHUB FINDER */}
          <ProjectItem
            title="GitHub Finder App"
            projectUrl="/githubfinder"
            logo={
              <>
                <SiReact className="mx-1 text-[#22d3ee]" />
                <SiTailwindcss className="mx-1 text-[#7dd3fc]" />
                <AiFillApi className="mx-1 text-[#bef264]" />
              </>
            }
          />
          {/* ENTERPRISE DASH */}
          <ProjectItem
            title="Enterprise Dashboard App"
            projectUrl="/enterprise-dashboard"
            logo={
              <>
                <SiNextdotjs className="mx-1 text-[#fafafa]" />
                <SiTailwindcss className="mx-1 text-[#7dd3fc]" />
              </>
            }
          />
          {/* Weather App  */}
          <ProjectItem
            title="Weather App"
            projectUrl="/weather"
            logo={
              <>
                <SiNextdotjs className="mx-1 text-[#fafafa]" />
                <SiTailwindcss className="mx-1 text-[#7dd3fc]" />
                <AiFillApi className="mx-1 text-[#bef264]" />
              </>
            }
          />
          {/* Calculator App  */}
          <ProjectItem
            title="Calculator App"
            projectUrl="/calculator"
            logo={
              <>
                <SiHtml5 className="mx-1 text-[#f97316]" />
                <SiCss3 className="mx-1 text-[#1d4ed8]" />
                <SiJavascript className="mx-1 text-[#fbbf24]" />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
