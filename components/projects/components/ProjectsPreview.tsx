import Image from "next/image";
import { ProjectPreview } from "../../../types/interfaces";

function ProjectsPreview({ preview }: ProjectPreview) {
  return (
    <div className="lg:w-1/2 p-4 hover:p-2 transition-all duration-500">
      <Image
        src={`/projects/${preview}`}
        alt="project-preview"
        layout="responsive"
        width={400}
        height={300}
      />
    </div>
  );
}

export default ProjectsPreview;
