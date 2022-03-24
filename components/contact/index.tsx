import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import ContactButton from "./components/ContactButton";
import ContactInput from "./components/ContactInput";
import ContactSubTitle from "./components/ContactSubTitle";
import ContactTextArea from "./components/ContactTextArea";
import ContactTitle from "./components/ContactTitle";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { t } = useTranslation("contact");

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

  return (
    <section className="w-11/12 py-4">
      <ContactTitle title={t("h2-contact")} />
      <form className="flex flex-col gap-4 justify-center items-center max-w-sm mx-auto p-12 rounded-xl shadow-lg bg-slate-300/95 ">
        <ContactSubTitle subtitle={t("h3-contact")} />
        <ContactInput placeholder={t("input-name")} />
        <ContactInput placeholder={t("input-email")} />
        <ContactTextArea placeholder={t("input-message")} size="xl" />
        <ContactButton text={t("button-contact")} />
      </form>
    </section>
  );
}

export default Contact;
