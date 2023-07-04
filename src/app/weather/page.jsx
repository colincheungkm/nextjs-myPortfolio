import React from 'react';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { AiFillApi, AiFillCode } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import Link from 'next/link';
import ProjectHeader from '@/components/project-page/ProjectHeader';

const weather = () => {
  return (
    <div className="w-full">
      <ProjectHeader title="Weather App" />

      <div className="max-w-[1240px] mx-auto p-2 flex flex-col gap-8 py-8">
        {/* tech box */}
        <div>
          <div className="flex w-full justify-start items-center px-2">
            <div className="flex flex-col justify-center items-start px-3">
              <p className="text-zinc-100 py-2 flex items-center">
                <SiNextdotjs className="mr-4 text-2xl" /> Next.JS
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <SiTailwindcss className="mr-4 text-2xl" /> Tailwind.CSS
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <AiFillApi className="mr-4 text-2xl" /> Open Weather API
              </p>
            </div>

            <div className="flex flex-col px-1 ml-12">
              <Link
                href="https://github.com/colincheungkm/nextjs-weatherApp"
                target="_blank"
                className="flex justify-center items-center px-8 py-2 my-1 bg-zinc-100 rounded-lg text-xl"
              >
                <AiFillCode className="mr-1" /> Code
              </Link>
              <Link
                href="https://nextjs-weather-app-colincheungkm.vercel.app"
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
            This project served as an ideal introductory endeavor when I was delving deeper into React and Next. It
            aimed to create a swift and responsive front-end application while also incorporating API calls using Axios.
            <br />
            <br />
            The primary emphasis of this project lies in its minimalist design, which leverages the capabilities of
            Tailwind and Next.js seamlessly. Additionally, it provided me with a valuable opportunity to enhance my
            comprehension of extracting data from JSON objects and effectively working with a free API.
            <br />
            <br />
            By simply entering a city name into the search bar, you'll instantly receive real-time weather information!
          </p>
        </div>
      </div>
    </div>
  );
};

export default weather;
