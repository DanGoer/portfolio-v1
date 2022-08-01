import { useState } from "react";

import { ModalI } from "../../../types/interfaces";

import { AnimatePresence, motion } from "framer-motion";

function ProjectModal({ modal, setModal }: ModalI) {
  const [idx, setIdx] = useState<number>(0);

  const handleForward = () => {
    if (idx === modal.length - 1) return;
    setIdx((prevIdx) => prevIdx + 1);
  };

  const handleBack = () => {
    if (idx === 0) return;
    setIdx((prevIdx) => prevIdx - 1);
  };

  const handleClose = () => {
    setIdx(0);
    setModal([]);
  };

  return (
    <>
      <AnimatePresence>
        {modal.length > 0 && (
          <div className="">
            <div
              className="fixed w-screen inset-0 h-screen z-40"
              onClick={() => handleClose()}
            ></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed left-0 top-20 w-screen h-[60vh] md:inset-20 md:w-[90vw] md:h-[80vh] lg:top-40 bg-white/70 z-50 flex items-center justify-center overflow-hidden"
            >
              <motion.img
                key={modal[idx]}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                src={"/projects/" + modal[idx]}
                alt="project modal slider"
              />
              <div
                onClick={() => handleBack()}
                className={`${
                  idx === 0 && "bg-gray-400 cursor-not-allowed"
                }  prev h-20 w-20`}
              >
                {"‣"}
              </div>
              <div
                onClick={() => handleForward()}
                className={`${
                  idx === modal.length - 1 && "bg-gray-400 cursor-not-allowed"
                } next h-20 w-20`}
              >
                {"‣"}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectModal;
