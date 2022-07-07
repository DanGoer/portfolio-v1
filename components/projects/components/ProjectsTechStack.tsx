import Image from "next/image";
import { ProjectsTechStackI } from "../../../types/interfaces";

function ProjectsTechStack({ techstack }: ProjectsTechStackI) {
  return (
    <span className="flex flex-row flex-wrap justify-center gap-4 p-4">
      {techstack.map((icon) => {
        return (
          <div key={icon.name} className=" w-12 md:w-20">
            <Image
              className="mx-4"
              src={`/tech-icons/${icon.svg}`}
              alt="tech-icon"
              height="200"
              width="200"
            />
          </div>
        );
      })}
    </span>
  );
}

export default ProjectsTechStack;
