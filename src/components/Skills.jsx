'use client';

import React from 'react';
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
import SkillCard from './SkillCard';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const Skills = ({}) => {
  return (
    <div id="skills" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16 px-2">
        <h2 className={`${playfairDisplay.className} text-4xl mb-2 tracking-widest`}>SKILLS</h2>

        <div className="grid py-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <SkillCard logo={<SiHtml5 className="w-[64px] h-[64px]" />} name="HTML" />
          <SkillCard logo={<SiCss3 className="w-[64px] h-[64px]" />} name="CSS" />
          <SkillCard logo={<SiJavascript className="w-[64px] h-[64px]" />} name="JavaScript" />
          <SkillCard logo={<SiReact className="w-[64px] h-[64px]" />} name="React.JS" />
          <SkillCard logo={<SiNextdotjs className="w-[64px] h-[64px]" />} name="Next.JS" />
          <SkillCard logo={<SiTailwindcss className="w-[64px] h-[64px]" />} name="Tailwind.CSS" />
          <SkillCard logo={<SiFigma className="w-[64px] h-[64px]" />} name="Figma" />
          <SkillCard logo={<SiGithub className="w-[64px] h-[64px]" />} name="GitHub" />
          {/* <SkillCard logo={<SiNodedotjs className="w-[64px] h-[64px]" />} name="Node.JS" /> */}
          <SkillCard logo={<SiMysql className="w-[64px] h-[64px]" />} name="MySQL" />
          <SkillCard logo={<SiMongodb className="w-[64px] h-[64px]" />} name="MongoDB" />
          <SkillCard logo={<SiFirebase className="w-[64px] h-[64px]" />} name="Firebase" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
