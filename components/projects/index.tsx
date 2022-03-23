import { useTranslation } from "next-i18next";
import React from "react";
import ProjectsInfo from "./components/ProjectsInfo";
import ProjectsPreview from "./components/ProjectsPreview";
import ProjectsTechStack from "./components/ProjectsTechStack";
import { projectContent } from "../../assets/data";
import ProjectsLinks from "./components/ProjectsLinks";
import ProjectsTitle from "./components/ProjectsTitle";

function Projects() {
  const { t } = useTranslation("projects");
  return (
    <div className="gap-20  w-screen flex flex-col items-center justify-start py-48  text-center">
      {t("projects", { joinArrays: "+" })
        .split("+")
        .map((text, index) => {
          return (
            <div
              className="flex flex-col gap-6 w-screen bg-slate-300/95"
              key={index}
            >
              <ProjectsPreview preview={projectContent[index].preview} />
              <ProjectsTitle
                livelink={projectContent[index].livelink}
                title={projectContent[index].title}
              />
              <ProjectsInfo text={text} />
              <ProjectsTechStack techstack={projectContent[index].techstack} />
              <ProjectsLinks
                livelink={projectContent[index].livelink}
                github={projectContent[index].github}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Projects;
