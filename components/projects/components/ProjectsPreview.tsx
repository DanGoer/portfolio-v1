import Image from "next/image";
import React from "react";

function ProjectsPreview({ preview }: any) {
  return (
    <div className="w-screen md:w-1/2 p-4 hover:p-2 transition-all duration-500">
      <Image
        src={`/projects/${preview}`}
        alt="project-preview"
        layout="responsive"
        width={400}
        height={300}
      />
    </div>
  );
}

export default ProjectsPreview;
