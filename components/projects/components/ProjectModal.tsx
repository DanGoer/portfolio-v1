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
            <div className="fixed top-20 w-screen h-[60vh] md:inset-20 md:w-[90vw] md:h-[80vh] lg:top-40 bg-white/70 z-50">
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
                  idx === 0 && "bg-gray-400"
                } w-40 h-40 bg-green-600 absolute left-0 top-10`}
              ></div>
              <div
                onClick={() => handleForward()}
                className={`${
                  idx === modal.length - 1 && "bg-gray-400"
                } w-40 h-40 bg-black absolute right-0 top-10`}
              ></div>
              <div
                onClick={() => handleClose()}
                className="md:hidden absolute top-0 left-[50%] w-20 h-20 bg-red-400"
              ></div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectModal;
