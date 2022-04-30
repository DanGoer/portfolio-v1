import TechIcons from "./components/TechIcons";
import TechInfo from "./components/TechInfo";
import TechLogo from "./components/TechLogo";

function Tech({ pageRefs }: any) {
  return (
    <section
      ref={(el) => (pageRefs.current = { ...pageRefs.current, tech: el })}
      id="tech"
      className="flex flex-col items-center w-11/12 border-solid bg-slate-300/95 rounded-xl py-6 px-3"
    >
      <TechLogo />
      <TechInfo />
      <TechIcons />
    </section>
  );
}

export default Tech;
