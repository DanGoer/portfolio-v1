// Projects section

import React, { useState } from "react";

import { SectionChangeI } from "../../types/interfaces";

import { useTranslation } from "next-i18next";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

import ProjectsInfo from "./components/ProjectsInfo";
import ProjectsPreview from "./components/ProjectsPreview";
import ProjectsTechStack from "./components/ProjectsTechStack";
import ProjectsLinks from "./components/ProjectsLinks";
import ProjectsTitle from "./components/ProjectsTitle";
import ProjectsSectionTitle from "./components/ProjectsSectionTitle";
import { projectContent } from "../../assets/data";
import ProjectModal from "./components/ProjectModal";
import ProjectCarousel from "./components/ProjectCarousel";

function Projects({ handleSectionChange }: SectionChangeI) {
  const { t } = useTranslation("projects");
  const [modal, setModal] = useState<string[]>([]);

  return (
    <InView threshold={0.2} onChange={handleSectionChange}>
      {({ ref }) => (
        <div
          ref={ref}
          id="projects"
          className="gap-20 w-full flex flex-col items-center justify-start pt-48 text-center max-w-6xl relative"
        >
          <ProjectModal modal={modal} setModal={setModal} />
          <ProjectsSectionTitle title={t("title-projects")} />
          {t("projects", { joinArrays: "+" })
            .split("+")
            .map((text, index) => {
              return (
                <div key={index}>
                  <ProjectsTitle
                    livelink={projectContent[index].livelink}
                    title={projectContent[index].title}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${
                      index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-4 bg-slate-300/95 shadow-lg rounded-xl border-solid p-2 lg:p-8`}
                  >
                    {/*
                    <ProjectsPreview
                      setModal={setModal}
                      preview={projectContent[index].preview}
                    />*/}
                    <div className="lg:w-1/2 w-full max-h-full relative flex justify-center items-center h-96 lg:h-auto overflow-hidden grow">
                      <ProjectCarousel
                        setModal={setModal}
                        data={projectContent[index].preview}
                      />
                    </div>
                    <div className="flex flex-col justify-between lg:w-1/2 gap-8 ">
                      <ProjectsInfo text={text} />
                      <ProjectsTechStack
                        techstack={projectContent[index].techstack}
                      />
                      <ProjectsLinks
                        livelink={projectContent[index].livelink}
                        github={projectContent[index].github}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
        </div>
      )}
    </InView>
  );
}

export default Projects;
