import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { CarouselI } from "../../../types/interfaces";
import Image from "next/image";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },

  center: {
    zIndex: 20,
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

function ProjectCarousel({ data, setModal }: CarouselI) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, data.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          onClick={() => setModal(data)}
          className="absolute w-full h-full max-w-full lg:max-h-full max-h-96 cursor-zoom-in"
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
            src={"/projects/" + data[imageIndex]}
            alt="project carousel"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </AnimatePresence>
      <button
        className="z-30 next bg-buttonB prev-fs text-buttonBOn hover:bg-buttonB/70"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </button>
      <button
        className="z-30 prev bg-buttonB next-fs text-buttonBOn hover:bg-buttonB/70"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </button>
    </>
  );
}

export default ProjectCarousel;
