// Contact component

import { useState } from "react";

import { SectionChangeI } from "../../types/interfaces";

import { useTranslation } from "next-i18next";
import axios from "axios";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

import ContactButton from "./components/ContactButton";
import ContactSubTitle from "./components/ContactSubTitle";
import SectionTitle from "../elements/SectionTitle";

function Contact({ handleSectionChange }: SectionChangeI) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { t } = useTranslation("contact");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const body = { email: email, name: name, message: msg };
    try {
      await axios({
        url: "/api/sendgrid",
        method: "POST",
        data: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setName("");
      setEmail("");
      setMsg("");
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  };

  return (
    <InView threshold={0.15} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id="contact" className="z-10 pt-48 pb-32">
          <SectionTitle title={t("h2-contact")} />
          <motion.form
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center max-w-sm gap-4 p-4 mx-auto shadow-lg md:p-12 rounded-xl bg-container"
          >
            <ContactSubTitle subtitle={t("h3-contact")} />
            <div className="relative w-full">
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="peer"
                autoComplete="name"
                required
                placeholder={t("input-name")}
              />
              <label htmlFor="name">{t("input-name")}</label>
            </div>
            <div className="relative w-full">
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="peer"
                autoComplete="email"
                required
                placeholder={t("input-email")}
              />
              <label htmlFor="email">{t("input-email")}</label>
            </div>
            <div className="relative w-full">
              <textarea
                id="message"
                onChange={(e) => setMsg(e.target.value)}
                className="px-1 pt-2 peer h-96"
                placeholder={t("input-message")}
              />
              <label htmlFor="message">{t("input-message")}</label>
            </div>
            <ContactButton
              isSubmitting={isSubmitting}
              text={t("button-contact")}
            />
          </motion.form>
          {isSuccess ? (
            <p className="mx-auto my-8 text-xl w-max text-textBgOn">
              {t("success-contact")}
            </p>
          ) : (
            isError && (
              <p className="mx-auto my-8 text-xl text-red-500 w-max">
                {t("error-contact")}
              </p>
            )
          )}
        </section>
      )}
    </InView>
  );
}

export default Contact;
