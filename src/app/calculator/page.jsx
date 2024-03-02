import React from "react";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import Link from "next/link";
import ProjectHeader from "../../components/project-page/ProjectHeader";

const calculator = () => {
  return (
    <div className="w-full">
      <ProjectHeader title="Calculator App" />

      <div className="max-w-[1240px] mx-auto p-2 flex flex-col gap-8 py-8">
        <div>
          <div className="flex w-full justify-start items-center px-2">
            <div className="flex flex-col justify-center items-start px-3">
              <p className="text-zinc-100 py-2 flex items-center">
                <SiHtml5 className="mr-4 text-2xl" /> HTML
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <SiCss3 className="mr-4 text-2xl" /> CSS
              </p>
              <p className="text-zinc-100 py-2 flex items-center">
                <SiJavascript className="mr-4 text-2xl" /> JavaScript
              </p>
            </div>

            <div className="flex flex-col px-1 ml-12 text-[#00bcd4]">
              <Link
                href="https://github.com/colincheungkm/calculator-Project"
                target="_blank"
                className="flex justify-center items-center px-8 py-2 my-1 bg-zinc-100 rounded-lg text-xl"
              >
                <AiFillCode className="mr-1" /> Code
              </Link>
              <Link
                href="https://vanillajs-calculator-project-colincheungkm.vercel.app"
                target="_blank"
                className="flex justify-center items-center px-8 py-2 my-1 bg-zinc-100 rounded-lg text-xl"
              >
                <MdWeb className="mr-1" /> Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <p className="py-2 text-zinc-100 tracking-wider text-base leading-relaxed">
            This was one of my first few projects when I was still mastering the foundations of web
            development. It was built using the three main fundamentals: HTML, CSS, and JavaScript.
            Tackling this project initially posed quite a complex challenge.
            <br />
            <br />
            Here, I used the "class" construct, which is centered around object-oriented
            programming, to essentially build the blueprint for this analog calculator. Later on, I
            would instantiate a new "calculator" from the "Calculator" class.
            <br />
            <br />
            Throughout this endeavor, I not only deepened my understanding of class syntax but also
            delved into the intricacies of the Document Object Model (DOM). This project provided an
            invaluable opportunity for me to gain hands-on familiarity with manipulating elements
            within web pages and enhanced my overall proficiency in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default calculator;
