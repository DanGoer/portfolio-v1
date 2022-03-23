import React from "react";
import ContactButton from "./components/ContactButton";
import ContactInput from "./components/ContactInput";
import ContactSubTitle from "./components/ContactSubTitle";
import ContactTitle from "./components/ContactTitle";

function Contact() {
  return (
    <section id="tech" className="w-11/12 py-4">
      <ContactTitle />
      <div className="flex flex-col items-center border-solid bg-slate-300/95 rounded-xl py-6 px-3">
        <ContactSubTitle />
        <ContactInput />
        <ContactInput />
        <ContactInput />
        <ContactButton />
      </div>
    </section>
  );
}

export default Contact;
