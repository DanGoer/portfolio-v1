import { SectionTitleI } from "../../types/interfaces";

function SectionTitle({ title }: SectionTitleI) {
  return <h2 className="pb-8 text-5xl  text-textBgOn">{title}</h2>;
}

export default SectionTitle;
