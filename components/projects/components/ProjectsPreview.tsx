import Image from "next/image";

import { ProjectPreviewI } from "../../../types/interfaces";

function ProjectsPreview({ preview }: ProjectPreviewI) {
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
