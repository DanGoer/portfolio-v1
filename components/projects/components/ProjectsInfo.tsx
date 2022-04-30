import { ProjectsInfoI } from "../../../types/interfaces";

function ProjectsInfo({ text }: ProjectsInfoI) {
  return <p className="py-2 px-2 text-lg">{text}</p>;
}

export default ProjectsInfo;
