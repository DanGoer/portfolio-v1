import { useState } from "react";

import { ModalI } from "../../../types/interfaces";

import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },

  center: {
    zIndex: 50,
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
            <motion.div
              className="fixed left-0 top-32 w-screen h-[60vh] md:inset-20 md:w-[90vw] md:h-[80vh] lg:top-40 bg-container z-50  items-center justify-center overflow-hidden"
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
            >
              <Image
                src={"/projects/" + modal[imageIndex]}
                alt="project modal slider"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {modal.length > 0 && (
        <>
          <div
            className="fixed inset-0 z-40 w-screen h-screen"
            onClick={() => handleClose()}
          />
          <button
            onClick={() => paginate(-1)}
            className="fixed z-50 w-20 h-20 prev md:prev-fs bg-buttonB text-buttonBOn hover:bg-buttonB/70"
          >
            {"‣"}
          </button>
          <button
            onClick={() => paginate(1)}
            className="fixed z-50 w-20 h-20 next md:next-fs bg-buttonB text-buttonBOn hover:bg-buttonB/70"
          >
            {"‣"}
          </button>
          <button
            onClick={() => handleClose()}
            className="fixed z-50 w-20 h-20 exit bg-buttonB text-buttonBOn hover:bg-buttonB/70"
          >
            X
          </button>
        </>
      )}
    </>
  );
}

export default ProjectModal;
