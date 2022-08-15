import { ProjectsLinksI } from "../../../types/interfaces";

function ProjectsLinks({ livelink, github }: ProjectsLinksI) {
  return (
    <span className="flex flex-row justify-center pb-4">
      <a
        href={livelink}
        type="button"
        target="_blank"
        rel="noreferrer"
        className="px-10 py-2 mb-2 mr-2 text-lg font-medium text-center duration-300 border-2 rounded-full border-buttonB hover:text-buttonAOn hover:bg-buttonA bg-buttonB text-buttonBOn"
      >
        Live
      </a>
      <a
        href={github}
        type="button"
        target="_blank"
        rel="noreferrer"
        className="px-10 py-2 mb-2 mr-2 text-lg font-medium text-center duration-300 border-2 rounded-full border-buttonB text-buttonAOn bg-buttonA hover:bg-buttonB hover:text-buttonBOn"
      >
        Code
      </a>
    </span>
  );
}

export default ProjectsLinks;
