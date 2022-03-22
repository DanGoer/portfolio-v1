import { socialIconsList } from "../../../assets/data";

function NavBarSocialIcons() {
  return (
    <span className="flex flex-row gap-6">
      {socialIconsList.map((icon) => {
        return (
          <svg
            className="hidden xl:block w-8 h-8"
            key={icon.name}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={icon.viewBox}
          >
            <g fill="#fff">
              <path d={icon.svg} />
            </g>
          </svg>
        );
      })}
    </span>
  );
}

export default NavBarSocialIcons;
