"use client";

import React from "react";
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
  SiExpress,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import SkillCard from "./SkillCard";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const Skills = ({}) => {
  return (
    <div id="skills" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16 px-2">
        <h2 className={`${playfairDisplay.className} text-4xl text-[#00bcd4] mb-2 tracking-widest`}>
          SKILLS
        </h2>

        <div className="grid py-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <SkillCard logo={<SiHtml5 className="text-[#f97316]" />} name="HTML" />
          <SkillCard logo={<SiCss3 className="text-[#1d4ed8]" />} name="CSS" />
          <SkillCard logo={<SiJavascript className="text-[#fbbf24]" />} name="JavaScript" />
          <SkillCard logo={<SiReact className="text-[#22d3ee]" />} name="React.js" />
          <SkillCard logo={<SiNextdotjs className="text-[#fafafa]" />} name="Next.js" />
          <SkillCard logo={<SiTailwindcss className="text-[#7dd3fc]" />} name="Tailwind.css" />
          <SkillCard logo={<SiGithub className="text-[#fafafa]" />} name="Github" />
          <SkillCard logo={<AiFillApi className="text-[#bef264]" />} name="APIs" />
          <SkillCard logo={<SiNodedotjs className="text-[#166534]" />} name="Node.js" />
          <SkillCard logo={<SiExpress className="text-[#a1a1aa]" />} name="Express.js" />
          <SkillCard logo={<SiMysql className="text-[#fdba74]" />} name="MySQL" />
          <SkillCard logo={<SiMongodb className="text-[#059669]" />} name="MongoDB" />
          <SkillCard logo={<SiFirebase className="text-[#fb923c]" />} name="Firebase" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
