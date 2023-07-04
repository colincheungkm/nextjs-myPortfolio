import React from 'react';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { AiFillApi, AiFillCode } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import Link from 'next/link';

import ProjectHeader from '@/components/project-page/ProjectHeader';

const githubfinder = () => {
  return (
    <div className="w-full">
      <ProjectHeader title="GitHub Finder App" />

      <div className="max-w-[1240px] mx-auto p-2 flex flex-col gap-8 py-8">
        {/* tech box */}
        <div>
          <div className="flex w-full justify-start items-center px-2">
            <div className="flex flex-col justify-center items-start px-3">
              <p className="text-zinc-100 py-2 flex items-center">
                <SiReact className="mr-4 text-2xl" /> React.JS
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <SiTailwindcss className="mr-4 text-2xl" /> Tailwind.CSS
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <AiFillApi className="mr-4 text-2xl" /> GitHub API
              </p>
            </div>

            <div className="flex flex-col px-1 ml-12">
              <Link
                href="https://github.com/colincheungkm/GitHub-Finder"
                target="_blank"
                className="flex justify-center items-center px-8 py-2 my-1 bg-zinc-100 rounded-lg text-xl"
              >
                <AiFillCode className="mr-1" /> Code
              </Link>
              <Link
                href="https://git-hub-finder-colincheungkm.vercel.app"
                target="_blank"
                className="flex justify-center items-center px-8 py-2 my-1 bg-zinc-100 rounded-lg text-xl"
              >
                <MdWeb className="mr-1" /> Demo
              </Link>
            </div>
          </div>
        </div>

        {/* summary */}
        <div className="">
          <p className="py-2 text-zinc-100 tracking-wider text-base leading-relaxed">
            This application retrieves GitHub profiles from the GitHub API and showcases various users. The primary
            objective of this project was to gain a comprehensive understanding of React's state management. It provided
            me with valuable insights into utilizing state management hooks such as useContext and useReducer, delving
            deeper into their functionality and applications within a React project. Through this endeavor, I acquired a
            deeper comprehension of managing state in React and explored advanced state management techniques.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default githubfinder;
