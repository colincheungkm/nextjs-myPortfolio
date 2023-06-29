'use client';

import React from 'react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { CgMenuGridO } from 'react-icons/cg';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function MenuNav() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed w-full h-20 z-[100] p-4 mt-1">
      <button
        className={`${playfairDisplay.className} flex font-bold text-3xl text-zinc-100 border-[#00bcd4] border-b-2 rounded-xl p-1 text-center justify-center items-center`}
        onClick={handleOpen}
      >
        <CgMenuGridO
          className={
            open
              ? `mr-2 -rotate-45 transform transition-transform ease-in duration-300 text-4xl`
              : `mr-2 transform transition-transform ease-in duration-300 text-4xl`
          }
        />{' '}
        <span className="mr-2">C</span>
        <span className="mr-2">K</span>
        <span className="mr-2">M</span>
      </button>

      {/* Menu */}
      {open ? (
        <ul className="flex flex-col max-w-[130px]">
          <Link href="/#home">
            <li className="text-md uppercase mt-1 max-w-[130px] bg-zinc-100 rounded-md p-1 hover:bg-gradient-to-r from-[#00bbd47b] to-[#fff0]">
              🏠 Home
            </li>
          </Link>
          <Link href="/#about">
            <li className="text-md uppercase mt-1 max-w-[130px] bg-zinc-100 rounded-md p-1 hover:bg-gradient-to-r from-[#00bbd47b] to-[#fff0]">
              😊 About
            </li>
          </Link>
          <Link href="/#skills">
            <li className="text-md uppercase mt-1 max-w-[130px] bg-zinc-100 rounded-md p-1 hover:bg-gradient-to-r from-[#00bbd47b] to-[#fff0]">
              🚀 Skills
            </li>
          </Link>
          <Link href="/#projects">
            <li className="text-md uppercase mt-1 max-w-[130px] bg-zinc-100 rounded-md p-1 hover:bg-gradient-to-r from-[#00bbd47b] to-[#fff0]">
              💻 Projects
            </li>
          </Link>
          <Link href="/#contact">
            <li className="text-md uppercase mt-1 max-w-[130px] bg-zinc-100 rounded-md p-1 hover:bg-gradient-to-r from-[#00bbd47b] to-[#fff0]">
              ✉️ Contact
            </li>
          </Link>
        </ul>
      ) : null}
    </div>
  );
}
