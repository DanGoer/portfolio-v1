import Image from "next/image";
import Link from "next/link";
import { techIcons } from "../../../assets/data";

function TechIcons() {
  return (
    <section className="flex flex-wrap justify-center">
      {techIcons.map((icon) => {
        return (
          <div key={icon.name} className="flex flex-col m-4">
            <Image
              src={`/tech-icons/${icon.svg}`}
              alt="tech-icon"
              width="100"
              height="100"
            />
            <h3 className="text-xl font-semibold hover:text-amber-500 mt-2">
              {icon.name}
            </h3>
          </div>
        );
      })}
    </section>
  );
}

export default TechIcons;
