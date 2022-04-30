import { ProjectSectionTitleI } from "../../../types/interfaces";

function ProjectsSectionTitle({ title }: ProjectSectionTitleI) {
  return <h2 className="color-hover text-white pb-8">{title}</h2>;
}

export default ProjectsSectionTitle;
