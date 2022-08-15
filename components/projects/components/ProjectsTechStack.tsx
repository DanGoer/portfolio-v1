import Image from "next/image";

import { ProjectsTechStackI } from "../../../types/interfaces";

function ProjectsTechStack({ techstack }: ProjectsTechStackI) {
  return (
    <ul className="flex flex-row flex-wrap justify-center gap-8 p-4">
      {techstack.map((icon) => {
        return (
          <li
            key={icon.name}
            className="flex flex-col items-center justify-center w-12 md:w-20"
          >
            <Image
              src={`/tech-icons/${icon.svg}`}
              alt="tech-icon"
              height={100}
              width={100}
            />
            <p>{icon.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectsTechStack;
