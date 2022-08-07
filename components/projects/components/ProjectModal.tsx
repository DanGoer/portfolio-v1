import { useState } from "react";

import { ModalI } from "../../../types/interfaces";

import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },

  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },

  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function ProjectModal({ modal, setModal }: ModalI) {
  const handleClose = () => {
    setPage([0, 0]);
    setModal([]);
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, modal.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence>
        {modal.length > 0 && (
          <>
            <div
              className="fixed w-screen inset-0 h-screen z-40"
              onClick={() => handleClose()}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed left-0 top-20 w-screen h-[60vh] md:inset-20 md:w-[90vw] md:h-[80vh] lg:top-40 bg-impressum z-50 flex items-center justify-center overflow-hidden"
            >
              <motion.img
                key={modal[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                src={"/projects/" + modal[imageIndex]}
                alt="project modal slider"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
              <div
                onClick={() => paginate(-1)}
                className="prev h-20 w-20 bg-buttonB text-buttonBOn hover:bg-buttonB/70"
              >
                {"‣"}
              </div>
              <div
                onClick={() => paginate(1)}
                className="next h-20 w-20 bg-buttonB text-buttonBOn hover:bg-buttonB/70"
              >
                {"‣"}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectModal;
