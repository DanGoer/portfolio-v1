import React from "react";

function ProjectsTitle({ title, livelink }: any) {
  return (
    <a href={livelink}>
      <h3 className="text-3xl hover:text-amber-500 hover:cursor-pointer font-semibold">
        {title}
      </h3>
    </a>
  );
}

export default ProjectsTitle;
