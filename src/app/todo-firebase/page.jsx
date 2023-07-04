import React from 'react';
import { SiNextdotjs, SiTailwindcss, SiFirebase } from 'react-icons/si';
import { AiFillCode } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import Link from 'next/link';
import ProjectHeader from '@/components/project-page/ProjectHeader';

const todofirebase = () => {
  return (
    <div className="w-full">
      <ProjectHeader title="To-Do App" />

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
                <SiFirebase className="mr-4 text-2xl" /> Firebase
              </p>
            </div>

            <div className="flex flex-col px-1 ml-12">
              <Link
                href="https://github.com/colincheungkm/nextjs-firebase-todo-app"
                target="_blank"
                className="flex justify-center items-center px-8 py-2 my-1 bg-zinc-100 rounded-lg text-xl"
              >
                <AiFillCode className="mr-1" /> Code
              </Link>
              <Link
                href="https://nextjs-firebase-todo-app-colincheungkm.vercel.app/"
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
            I have previously developed several To-Do apps using Vanilla JS, but this particular one was built with a
            specific focus on implementing CRUD functionalities through the Google Firebase backend. This integration
            enables the app to seamlessly synchronize data across multiple devices, offering a superior user experience
            compared to relying solely on the browser's local storage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default todofirebase;
