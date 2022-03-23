import Image from "next/image";
import React from "react";

function ProjectsPreview({ preview }: any) {
  return (
    <div className="w-screen p-2">
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
