import React from 'react';
import Link from 'next/link';

const ProjectItem = ({ title, projectUrl, logo }) => {
  return (
    <Link
      href={projectUrl}
      className="flex items-center justify-between my-6 py-2 px-4 h-auto w-full border-y-2 text-zinc-100 border-zinc-100 rounded-xl hover:border-[#00bcd4]"
    >
      <h3 className="flex text-xl p-2 tracking-widest">{title}</h3>
      <div className="flex items-center px-2">{logo}</div>
    </Link>
  );
};

export default ProjectItem;
