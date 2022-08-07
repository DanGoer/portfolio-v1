import { ProjectsLinksI } from "../../../types/interfaces";

function ProjectsLinks({ livelink, github }: ProjectsLinksI) {
  return (
    <span className="flex flex-row justify-center pb-4">
      <a
        href={livelink}
        type="button"
        target="_blank"
        rel="noreferrer"
        className="border-buttonB border-2 hover:text-buttonAOn hover:bg-buttonA duration-300 bg-buttonB text-buttonBOn font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
      >
        Live
      </a>
      <a
        href={github}
        type="button"
        target="_blank"
        rel="noreferrer"
        className="border-buttonB border-2 text-buttonAOn bg-buttonA duration-300 hover:bg-buttonB hover:text-buttonBOn font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
      >
        Code
      </a>
    </span>
  );
}

export default ProjectsLinks;
