import Image from "next/image";

import { ProjectsTechStackI } from "../../../types/interfaces";

function ProjectsTechStack({ techstack }: ProjectsTechStackI) {
  return (
    <ul className="flex flex-row flex-wrap justify-center gap-8 p-4">
      {techstack.map((icon) => {
        return (
          <li key={icon.name} className="block w-12 md:w-20">
            <Image
              src={`/tech-icons/${icon.svg}`}
              alt="tech-icon"
              layout="responsive"
              width={100}
              height={100}
              sizes="(min-width: 768px) 80px, 60px"
            />
            <p>{icon.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectsTechStack;
