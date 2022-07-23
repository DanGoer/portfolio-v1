import { ProjectsLinksI } from "../../../types/interfaces";

function ProjectsLinks({ livelink, github }: ProjectsLinksI) {
  return (
    <span className="flex flex-row justify-center pb-4">
      <a
        href={livelink}
        type="button"
        target="_blank"
        rel="noreferrer"
        className="border-black border-2 hover:text-white hover:bg-gray-800 duration-300 bg-white text-black font-medium rounded-full text-lg px-10 py-2 text-center  mr-2 mb-2"
      >
        Live
      </a>
      <a
        href={github}
        type="button"
        target="_blank"
        rel="noreferrer"
        className="hover:border-black hover:border-2 text-white bg-gray-800 duration-300 hover:bg-white hover:text-black font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
      >
        Code
      </a>
    </span>
  );
}

export default ProjectsLinks;
