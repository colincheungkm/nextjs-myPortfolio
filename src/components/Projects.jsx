import React from 'react';
import netflixImg from '../../public/assets/projects/netflix.jpg';
import twitchImg from '../../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const Projects = () => {
  return (
    <div id="projects" className="w-full flex p-2">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className={`${playfairDisplay.className} text-4xl mb-2 tracking-widest`}>PROJECTS</h2>
        <p className="py-2 text-zinc-100">Cool things I've built so far...</p>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem title="Netflix App" backgroundImg={netflixImg} projectUrl="/netflix" tech="React JS" />
          <ProjectItem title="Twitch UI" backgroundImg={twitchImg} projectUrl="/twitch" tech="Next JS" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
