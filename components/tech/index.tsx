import { InView } from "react-intersection-observer";
import TechIcons from "./components/TechIcons";
import TechInfo from "./components/TechInfo";
import TechLogo from "./components/TechLogo";

function Tech({ handleSectionChange }: any) {
  return (
    <InView threshold={0.5} onChange={handleSectionChange}>
      {({ ref }) => (
        <section
          ref={ref}
          id="tech"
          className="flex flex-col items-center w-11/12 border-solid bg-slate-300/95 rounded-xl py-6 px-3"
        >
          <TechLogo />
          <TechInfo />
          <TechIcons />
        </section>
      )}
    </InView>
  );
}

export default Tech;
