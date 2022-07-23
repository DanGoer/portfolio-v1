import { InView } from "react-intersection-observer";
import { SectionChangeI } from "../../types/interfaces";
import TechIcons from "./components/TechIcons";
import TechInfo from "./components/TechInfo";
import TechLogo from "./components/TechLogo";
import { motion } from "framer-motion";

function Tech({ handleSectionChange }: SectionChangeI) {
  return (
    <InView threshold={0.1} onChange={handleSectionChange}>
      {({ ref }) => (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          ref={ref}
          id="tech"
          className="pt-48 flex items-center justify-center"
        >
          <div className="flex flex-col items-center w-11/12 border-solid bg-slate-300/95 rounded-xl py-6 px-3 ">
            <TechLogo />
            <TechInfo />
            <TechIcons />
          </div>
        </motion.section>
      )}
    </InView>
  );
}

export default Tech;
