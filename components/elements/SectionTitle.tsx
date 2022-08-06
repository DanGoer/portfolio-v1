import { SectionTitleI } from "../../types/interfaces";

function SectionTitle({ title }: SectionTitleI) {
  return <h2 className=" text-textBgOn pb-8">{title}</h2>;
}

export default SectionTitle;
