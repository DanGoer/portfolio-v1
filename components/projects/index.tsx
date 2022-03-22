import { useTranslation } from "next-i18next";
import React from "react";
import ProjectsInfo from "./components/ProjectsInfo";
import ProjectsPreview from "./components/ProjectsPreview";
import ProjectsTechStack from "./components/ProjectsTechStack";
import { projectContent } from "../../assets/data";
import ProjectsLinks from "./components/ProjectsLinks";

function Projects() {
  const { t } = useTranslation("projects");
  return (
    <div className=" bg-fixed bg-center bg-cover bg-hero w-screen h-screen flex flex-col items-center justify-start py-48 gap-2 text-center">
      <section className="">
        {t("projects", { joinArrays: "+" })
          .split("+")
          .map((text, index) => {
            return (
              <div key={index}>
                <ProjectsPreview preview={projectContent[index].preview} />
                <ProjectsTechStack
                  techstack={projectContent[index].techstack}
                />
                <ProjectsInfo text={text} />
                <ProjectsLinks
                  livelink={projectContent[index].livelink}
                  github={projectContent[index].github}
                />
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Projects;
