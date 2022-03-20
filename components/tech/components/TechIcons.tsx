import { techItems } from "../../../assets/data";

function TechIcons() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="i"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path fill="currentcolor" d={techItems[0].svg} />
    </svg>
  );
}

export default TechIcons;
