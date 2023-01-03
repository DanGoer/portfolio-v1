import Image from "next/image";

import { motion } from "framer-motion";

import { techIcons } from "../../../assets/data";

function TechIcons() {
  return (
    <motion.ul className="flex flex-wrap justify-center">
      {techIcons.map((icon, index) => {
        return (
          <motion.li
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.07 * index }}
            viewport={{ once: true }}
            key={icon.name}
            className="block m-4 w-[70px] lg:w-[80px]"
          >
            <Image
              src={`/tech-icons/${icon.svg}`}
              alt="tech-icon"
              layout="responsive"
              width={80}
              height={80}
              sizes="(min-width: 768px) 60px, 40px"
            />
            <h3 className="mt-2 text-base font-semibold lg:text-xl">
              {icon.name}
            </h3>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default TechIcons;
