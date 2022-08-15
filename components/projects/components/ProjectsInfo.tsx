import { Trans } from "next-i18next";
import { ProjectsInfoI } from "../../../types/interfaces";

function ProjectsInfo({ text }: ProjectsInfoI) {
  return (
    <Trans i18nKey="projects">
      <p className="px-2 py-2 font-sans text-lg whitespace-pre-line">{text}</p>
    </Trans>
  );
}

export default ProjectsInfo;
