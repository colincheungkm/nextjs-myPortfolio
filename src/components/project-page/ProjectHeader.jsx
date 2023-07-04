import React from 'react';
import Image from 'next/image';
import codeImg from '../../../public/assets/projects/code.jpg';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const ProjectHeader = ({ title }) => {
  return (
    <div className="w-screen h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10 overflow-hidden" />
      <Image className="absolute z-1 object-cover object-left-bottom" fill src={codeImg} alt="/" />
      <div className="absolute top-[70%] max-w-[1240px] w-max bg-[#18181b] border-[#00bcd4] border-y-2 rounded-lg left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
        <h2 className={`${playfairDisplay.className} py-2 text-4xl`}>{title}</h2>
      </div>
    </div>
  );
};

export default ProjectHeader;
