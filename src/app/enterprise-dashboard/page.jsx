import React from 'react';
import Image from 'next/image';
import codeImg from '../../../public/assets/projects/code.jpg';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { AiFillCode } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const enterpriseDash = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10 overflow-hidden" />
        <Image className="absolute z-1 object-cover object-left-bottom" fill src={codeImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-max bg-[#18181b] border-[#00bcd4] border-y-2 rounded-lg left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className={`${playfairDisplay.className} py-2 text-4xl`}>Enterprise Dashboard App</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 flex flex-col gap-8 py-8">
        {/* tech box */}
        <div className="">
          <div className="flex w-full justify-start items-center px-2">
            <div className="flex flex-col justify-center items-start px-3">
              <p className="text-zinc-100 py-2 flex items-center">
                <SiNextdotjs className="mr-4 text-2xl" /> Next.JS
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <SiTailwindcss className="mr-4 text-2xl" /> Tailwind.CSS
              </p>
            </div>

            <div className="flex flex-col px-2 ml-12">
              <Link
                href="https://github.com/colincheungkm/nextjs-dashboardApp"
                target="_blank"
                className="flex justify-center items-center px-8 py-2 my-1 bg-zinc-100 rounded-lg text-xl"
              >
                <AiFillCode className="mr-1" /> Code
              </Link>
              <Link
                href="https://nextjs-dashboard-app-colincheungkm.vercel.app"
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
            I had built this front-end dashboard with the main focus to try out the Chart.JS library to the bar graphs
            using static JSON data. It was built with Tailwind CSS and is completely responsive with media queries for
            small, medium and large screens.
            <br />
            <br />
            From a personal preference Tailwind CSS has been a great tool for me to use in parallel with React and Next,
            as it allows me to build out specific front-end designs quickly and it also allows me to write cleaner code
            if all the needed info is in one specific components folder.
          </p>
        </div>
      </div>
    </div>
  );
};

export default enterpriseDash;
