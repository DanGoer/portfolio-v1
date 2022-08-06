import { ProjectsTitleI } from "../../../types/interfaces";

function ProjectsTitle({ title, livelink }: ProjectsTitleI) {
  return (
    <a target="_blank" rel="noreferrer" href={livelink}>
      <h3 className="text-4xl hover:cursor-pointer font-semibold">{title}</h3>
    </a>
  );
}

export default ProjectsTitle;
