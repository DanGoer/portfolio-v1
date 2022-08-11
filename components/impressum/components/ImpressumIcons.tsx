import { socialIconsList } from "../../../assets/data";

function ImpressumIcons() {
  return (
    <span className="flex flex-row gap-6">
      {socialIconsList.map((icon) => {
        return (
          <a key={icon.name} href={icon.link} target="_blank" rel="noreferrer">
            <svg
              className="group block w-8 h-8 hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={icon.viewBox}
            >
              <g
                className="group-hover:fill-hoverEffect duration-300 fill-impressumOn"
                fill="#fff"
              >
                <path d={icon.svg} />
              </g>
            </svg>
          </a>
        );
      })}
    </span>
  );
}

export default ImpressumIcons;
