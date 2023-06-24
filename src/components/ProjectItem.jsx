'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full border-4 border-zinc-100 rounded-xl group hover:bg-gradient-to-r from-[#33e7ff] to-[#007e8f]">
      <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" />
      {/*  */}
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-zinc-100 tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-zinc-100 text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-zinc-100 text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
