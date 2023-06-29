import React from 'react';
import Link from 'next/link';
import { AiOutlineCodeSandbox } from 'react-icons/ai';

const ProjectItem = ({ title, projectUrl, logo }) => {
  return (
    <Link
      href={projectUrl}
      className="flex items-center justify-between my-6 py-2 px-4 h-auto w-full border-y-2 group text-zinc-100 border-zinc-100 rounded-xl hover:border-[#00bcd4]"
    >
      <h3 className="flex text-xl p-2 tracking-widest">
        <AiOutlineCodeSandbox className="text-3xl mr-3 group-hover:text-[#00bcd4] group-hover:rotate-180 ease-in duration-500" />
        {title}
      </h3>
      <div className="flex items-center px-2 text-3xl">{logo}</div>
    </Link>
  );
};

export default ProjectItem;
