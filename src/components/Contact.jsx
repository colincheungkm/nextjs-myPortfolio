import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const Contact = () => {
  return (
    <div id="contact" className="w-full flex p-2 lg:h-[70%]">
      <div className="max-w-[1240px] m-auto p-2 py-16 w-full ">
        <h2 className={`${playfairDisplay.className} text-4xl mb-2 tracking-widest`}>CONTACT</h2>

        <div className="w-full h-full">
          <div>
            <h2 className="py-4 tracking-wider text-zinc-100">
              📍TORONTO, CANADA <br />
              ✉️colincheungkm@outlook.com{' '}
            </h2>

            <p className="py-2 mt-6 text-zinc-100 tracking-wider text-base max-w-[990px]">
              Currently located in the awesome city of Toronto 🍁, I am eager to connect with like-minded individuals
              and open to explore exciting opportunities.
              <br />
              <br /> Whether you have a thought-provoking project, a potential collaboration, or simply wish to engage
              in meaningful conversations, I encourage you to reach out!
            </p>
          </div>
          <div>
            <p className="mt-10 text-zinc-100">CONNECT WITH ME</p>
            <div className="flex justify-around max-w-[400px] py-4">
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
                href="mailto:colincheungkm@outlook.com"
                target="_blank"
                className="text-3xl rounded-full border-2 border-zinc-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <BiMailSend />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
