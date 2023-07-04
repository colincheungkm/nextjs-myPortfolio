import React from 'react';
import Image from 'next/image';
import codeImg from '../../../public/assets/projects/code.jpg';
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { AiFillCode } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const calculator = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10 overflow-hidden" />
        <Image className="absolute z-1 object-cover" fill src={codeImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-max border-[#00bcd4] border-y-4 rounded-lg left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className={`${playfairDisplay.className} py-2 text-4xl`}>Calculator App</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 flex flex-col gap-8 py-8">
        <div className="">
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

            <div className="flex flex-col px-2 ml-12">
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
            This is one of my first few projects when I was still mastering the foundations of Web development. This was
            built with the 3 main fundamentals - HTML, CSS and JavaScript. When I first tackled this project it was
            actually quite a complex project to undertake.
            <br />
            <br />
            Here I had used the "class" construct that is centered around object-oriented programming, to essentially
            build out the blueprint for this analog calculator. I would then later instantiate a new "calculator" from
            the "Calculator" class.
            <br />
            <br />
            This project allowed me to gain a better familiarity with the class syntax and with the Document Object
            Model (DOM).
          </p>
        </div>
      </div>
    </div>
  );
};

export default calculator;
