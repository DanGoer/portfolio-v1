import { ContactTitleI } from "../../../types/interfaces";

function ContactTitle({ title }: ContactTitleI) {
  return <h2 className="color-hover text-white pb-8">{title}</h2>;
}

export default ContactTitle;
