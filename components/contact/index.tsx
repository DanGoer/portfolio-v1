import { useTranslation } from "next-i18next";
import React from "react";
import ContactButton from "./components/ContactButton";
import ContactInput from "./components/ContactInput";
import ContactSubTitle from "./components/ContactSubTitle";
import ContactTextArea from "./components/ContactTextArea";
import ContactTitle from "./components/ContactTitle";

function Contact() {
  const { t } = useTranslation("contact");
  return (
    <section id="tech" className="w-11/12 py-4">
      <ContactTitle title={t("h2-contact")} />
      <div className="flex flex-col items-center border-solid bg-slate-300/95 rounded-xl py-6 px-3">
        <ContactSubTitle subtitle={t("h3-contact")} />
        <ContactInput placeholder={t("input-name")} />
        <ContactInput placeholder={t("input-email")} />
        <ContactTextArea placeholder={t("input-message")} size="xl" />
        <ContactButton text={t("button-contact")} />
      </div>
    </section>
  );
}

export default Contact;
