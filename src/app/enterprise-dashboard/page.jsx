import Image from 'next/image';
import React from 'react';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const dashboard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
        {/* <Image className="absolute z-1" layout="fill" objectFit="cover" src={githubImg} alt="/" /> */}
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className={`${playfairDisplay.className} py-2 text-4xl underline-offset-8 tracking-widest`}>
            Enterprise Dashboard App
          </h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <div className="py-2 text-zinc-100 ">
            <p className="py-2 tracking-wider text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nisi deserunt ipsa laboriosam autem quas
              numquam, quibusdam dicta blanditiis eum beatae quasi sed mollitia labore nulla, aperiam velit. Rem,
              expedita.
            </p>
          </div>
        </div>
        {/* tech box */}
        <div className="border border-zinc-200 rounded-lg py-4">
          <div className="p-2">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-start">
                <p className="text-zinc-100 py-2 flex items-center">
                  <SiReact className="mr-4 text-2xl" /> React.JS
                </p>
                <p className="text-zinc-100 py-2 flex items-center">
                  <SiTailwindcss className="mr-4 text-2xl" /> Tailwind.CSS
                </p>
              </div>

              <div className="text-center mt-2 pt-2">
                <Link href="/" target="_blank" rel="noreferrer">
                  <button className="px-8 py-2 my-1 bg-zinc-200 rounded-lg">Code</button>
                </Link>
                <Link href="https://nextjs-dashboard-app-colincheungkm.vercel.app/" target="_blank" rel="noreferrer">
                  <button className="px-8 py-2 my-1 bg-zinc-200 rounded-lg">Demo</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
