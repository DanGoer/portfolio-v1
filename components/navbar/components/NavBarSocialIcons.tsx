import { socialIconsList } from "../../../assets/data";
import { ScrollTargetI } from "../../../types/interfaces";

function NavBarSocialIcons({ scrollTarget }: ScrollTargetI) {
  return (
    <span className="flex flex-row gap-6">
      {socialIconsList.map((icon) => {
        return (
          <a
            key={icon.name}
            aria-label={`link to ${icon.name}`}
            href={icon.link}
          >
            <svg
              className="hidden w-8 h-8 group xl:block hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={icon.viewBox}
            >
              <g
                className={`${
                  scrollTarget === "hero"
                    ? "group-hover:fill-navBeforeHover fill-navBeforeOn"
                    : "group-hover:fill-navAfterHover fill-navAfterOn"
                } duration-300`}
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

export default NavBarSocialIcons;
