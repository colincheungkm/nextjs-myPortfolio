import React from 'react';
import Image from 'next/image';
import githubImg from '../../../public/assets/projects/githubImg.png';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { AiFillApi, AiFillCode } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const enterpriseDash = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10 overflow-hidden" />
        <Image className="absolute z-1 object-cover object-left-bottom" fill src={githubImg} alt="/" />
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
                <SiReact className="mr-4 text-2xl" /> React.JS
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <SiTailwindcss className="mr-4 text-2xl" /> Tailwind.CSS
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <AiFillApi className="mr-4 text-2xl" /> GitHub API
              </p>
            </div>

            <div className="flex flex-col px-2 ml-12">
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
            I built this application in React JS and is hosted Vercel. This application is pulling GitHub profiles from
            the GitHub API and displaying different users. The useContext hook is also being implemented for app-wide
            state management.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nesciunt quae? Voluptatem culpa inventore,
            cumque, sequi molestias vero excepturi adipisci non temporibus ex dignissimos veniam blanditiis, harum a
            doloremque nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat laudantium
            perferendis iure numquam perspiciatis corporis quidem molestias nam libero? Id, adipisci laboriosam ea porro
            facilis alias rerum officiis ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim sed
            numquam, odit placeat omnis? Quisquam impedit quam ut, cupiditate totam reiciendis a excepturi ducimus
            repudiandae itaque quidem dolores magnam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default enterpriseDash;
