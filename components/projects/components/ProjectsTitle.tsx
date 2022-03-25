import React from "react";

function ProjectsTitle({ title, livelink }: any) {
  return (
    <a href={livelink}>
      <h3 className="color-hover text-4xl hover:cursor-pointer font-semibold">
        {title}
      </h3>
    </a>
  );
}

export default ProjectsTitle;
