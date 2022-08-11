import { ProjectsInfoI } from "../../../types/interfaces";

function ProjectsInfo({ text }: ProjectsInfoI) {
  return (
    <pre>
      <p className="py-2 px-2 text-lg whitespace-pre-line font-sans">{text}</p>
    </pre>
  );
}

export default ProjectsInfo;
