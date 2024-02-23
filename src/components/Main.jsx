"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaSoundcloud,
  FaInstagram,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const Main = () => {
  return (
    <div id="home" className="flex w-full h-[100vh] md:h-[98vh] text-center">
      <div className="max-w-[1240px] w-full h-[99%] mx-auto p-2 py-16 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-wider text-zinc-300 mt-10 mb-10">
            HELLO I AM
          </p>
          <h1
            className={`${playfairDisplay.className} py-4 mb-10 tracking-widest text-5xl md:text-6xl lg:text-7xl`}
          >
            COLIN <span className="text-zinc-100">C</span>HEUNG{" "}
            <span className="text-zinc-100">KM</span>
          </h1>

          <div
            className={`text-zinc-100 max-w-[80%] m-auto tracking-widest leading-loose`}
          >
            <p>Support Engineer</p>
            <p>Web Developer</p>
            <p>Music Producer</p>
          </div>
          <div className="flex items-center justify-between max-w-[400px] m-auto py-4 mt-12">
            <Link
              href="https://www.linkedin.com/in/colincheungkm/"
              target="_blank"
              className="text-3xl rounded-full border-2 border-zinc-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="https://github.com/colincheungkm"
              target="_blank"
              className="text-3xl rounded-full border-2 border-zinc-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://soundcloud.com/cc-ckm"
              target="_blank"
              className="text-3xl rounded-full border-2 border-zinc-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaSoundcloud />
            </Link>

            <Link
              href="mailto:hello@colincheungkm.com"
              target="_blank"
              className="text-3xl rounded-full border-2 border-zinc-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BiMailSend />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
