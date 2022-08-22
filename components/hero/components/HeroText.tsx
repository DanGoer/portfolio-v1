import React, { useState } from "react";

import { useTranslation } from "next-i18next";
import { heroData } from "../../../assets/data";

import AnimatedText from "./AnimatedText";

function HeroText() {
  const { t } = useTranslation("common");

  return (
    <div className="w-[340px] lg:w-[680px] flex flex-col">
      <AnimatedText text={t("h1-hero")} type="heading1" />
      <AnimatedText text={heroData.name} type="heading2" />
      <AnimatedText text={t("h2-hero")} type="heading2" />
    </div>
  );
}

export default HeroText;
