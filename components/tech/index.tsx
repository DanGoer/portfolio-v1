import { InView } from "react-intersection-observer";
import { SectionChangeI } from "../../types/interfaces";
import TechIcons from "./components/TechIcons";
import TechInfo from "./components/TechInfo";
import TechLogo from "./components/TechLogo";

function Tech({ handleSectionChange }: SectionChangeI) {
  return (
    <InView threshold={0.1} onChange={handleSectionChange}>
      {({ ref }) => (
        <section
          ref={ref}
          id="tech"
          className="pt-48 flex items-center justify-center"
        >
          <div className="flex flex-col items-center w-11/12 border-solid bg-slate-300/95 rounded-xl py-6 px-3">
            <TechLogo />
            <TechInfo />
            <TechIcons />
          </div>
        </section>
      )}
    </InView>
  );
}

export default Tech;
