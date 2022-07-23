import Link from "next/link";
import React from "react";
import { socialIconsList } from "../../../assets/data";

function ImpressumIcons() {
  return (
    <span className="flex flex-row gap-6">
      {socialIconsList.map((icon) => {
        return (
          <Link key={icon.name} href={icon.link} passHref>
            <svg
              className="group block w-8 h-8 hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={icon.viewBox}
            >
              <g
                className="group-hover:fill-amber-500 duration-300"
                fill="#fff"
              >
                <path d={icon.svg} />
              </g>
            </svg>
          </Link>
        );
      })}
    </span>
  );
}

export default ImpressumIcons;
