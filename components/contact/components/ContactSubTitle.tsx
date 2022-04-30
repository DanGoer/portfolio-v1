import React from "react";
import { ContactSubTitleI } from "../../../types/interfaces";

function ContactSubTitle({ subtitle }: ContactSubTitleI) {
  return <h3 className="text-lg">{subtitle}</h3>;
}

export default ContactSubTitle;
