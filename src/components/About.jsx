import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import heroImg from "../../public/assets/hero.jpg";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center">
      <div className="max-w-[1240px] m-auto py-16 p-2 md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2
            className={`${playfairDisplay.className} text-4xl mb-2 tracking-widest text-[#00bcd4]`}
          >
            ABOUT
          </h2>

          <div className="py-2 text-zinc-100 ">
            <p className="py-2 tracking-wider text-base leading-relaxed">
              <br />
              I'm a results-driven professional with a strong background in finance and telecom.
              Over the past 8 years after graduating from the University of Toronto, I have excelled
              in various client-facing roles, focusing on enhancing the client experience, driving
              sales, and ensuring customer success.
              <br />
              <br />
              In early 2021, I joined Nest Wealth as a CX Specialist, where I leveraged my skillset
              to provide exceptional customer support. Working in this role and being part of a
              dynamic company sparked my interest in the technological aspects of an
              enterprise-grade SaaS company.
              <br />
              <br />
              Motivated to expand my knowledge, I delved into self-learning web development in April
              2022. Through online courses on platforms like Udemy, I gained valuable skills in web
              development and sharpened my understanding of this rapidly evolving field.
              <br />
              <br />
              Currently, I serve as a Technical Account Manager & Application Support Engineer at
              dacadoo in Toronto, where I lead technical delivery for client projects, coordinate
              with global teams, and manage complex roadmaps, migrations, and escalations. I set up
              white-label environments, resolve complex support issues, and contribute to product
              and sales initiatives with technical expertise.
              <br />
              <br />
              I am passionate about combining my client-focused mindset with cutting-edge
              technology to create impactful solutions.
              <br />
              <br />
              If you're looking for a dedicated professional with a diverse skillset and a drive for
              continuous learning, I would be thrilled to discuss how I can contribute to your
              organization.
            </p>
          </div>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hidden md:block lg:block">
          <Image
            className="rounded-xl sepia-[19%] border-y-2 border-[#00bcd4] p-2"
            src={heroImg}
            alt="/"
            width="600"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
