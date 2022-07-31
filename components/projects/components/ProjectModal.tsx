import Image from "next/image";
import { useState } from "react";
import { ModalI } from "../../../types/interfaces";

function ProjectModal({ modal, setModal }: ModalI) {
  const [idx, setIdx] = useState<number>(0);

  const handleForward = () => {
    if (idx === modal.length) return;
    setIdx((prevIdx) => prevIdx + 1);
  };

  const handleBack = () => {
    if (idx === 0) return;
    setIdx((prevIdx) => prevIdx - 1);
  };

  return (
    <>
      {modal.length > 0 && (
        <div className="fixed top-20 w-screen h-[60vh] md:inset-20 md:w-[90vw] md:h-[80vh] bg-white/70 z-50">
          <div
            onClick={() => handleBack()}
            className={`${
              idx === 0 && "bg-gray-400"
            } w-40 h-40 bg-green-600 absolute left-0 top-10`}
          ></div>
          <Image
            src={"/projects/" + modal[idx]}
            layout="fill"
            alt="project modal slider"
          />
          <div
            onClick={() => handleForward()}
            className={`${
              idx === modal.length && "bg-gray-400"
            } w-40 h-40 bg-black absolute right-0 top-10`}
          ></div>
        </div>
      )}
    </>
  );
}

export default ProjectModal;
