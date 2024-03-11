import React from "react";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import Link from "next/link";
import ProjectHeader from "../../components/project-page/ProjectHeader";

const enterpriseDash = () => {
  return (
    <div className="w-full">
      <ProjectHeader title="Enterprise Dashboard App" />

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
            </div>

            <div className="flex flex-col px-1 ml-12 text-[#00bcd4]">
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
            I developed this front-end dashboard with a primary objective of experimenting with the
            Chart.js library to create visually appealing bar graphs using static JSON data. The
            project was constructed using Tailwind CSS, ensuring complete responsiveness through
            media queries that catered to small, medium, and large screens.
            <br />
            <br />
            Personally, I find Tailwind CSS to be an invaluable tool when working in conjunction
            with React and Next. It enables me to swiftly implement specific front-end designs and
            facilitates the creation of cleaner code by organizing all the necessary information
            within a single component's folder. Utilizing Tailwind CSS has significantly streamlined
            my development process while maintaining flexibility and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default enterpriseDash;
