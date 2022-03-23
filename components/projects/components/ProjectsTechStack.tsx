import Image from "next/image";
import React from "react";

function ProjectsTechStack({ techstack }: any) {
  return (
    <span className="flex flex-row flex-wrap justify-center gap-4 p-4">
      {techstack.map((icon: any) => {
        return (
          <Image
            key={icon.name}
            className="mx-4"
            src={`/tech-icons/${icon.svg}`}
            alt="tech-icon"
            width="50"
            height="50"
          />
        );
      })}
    </span>
  );
}

export default ProjectsTechStack;
