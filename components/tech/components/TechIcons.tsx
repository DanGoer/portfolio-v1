import { techItems } from "../../../assets/data";

function TechIcons() {
  return (
    <svg
      className="w-72 "
      aria-hidden="true"
      focusable="false"
      role="i"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={techItems[1].viewBox}
    >
      <path fill="#fff" d={techItems[1].svg} />
      {techItems[1].svg2 && <path fill="#007acc" d={techItems[1].svg2} />}
    </svg>
  );
}

export default TechIcons;
