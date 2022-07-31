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
            className="flex flex-col m-4"
          >
            <Image
              src={`/tech-icons/${icon.svg}`}
              alt="tech-icon"
              width="100"
              height="100"
            />
            <h3 className="color-hover text-xl font-semibold mt-2">
              {icon.name}
            </h3>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default TechIcons;
