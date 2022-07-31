// Main page

import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Projects from "../components/projects";
import Contact from "../components/contact";
import Impressum from "../components/impressum";
import Hero from "../components/hero";
import NavBar from "../components/navbar/index";
import Tech from "../components/tech";

//todo: distance between sections, logo, text formatting and text, set ref to main at page for hero
// images opt, comments and readme,

const Home: NextPage = (props) => {
  const [scrollTarget, setScrollTarget] = useState<string>("hero");
  const router = useRouter();

  const handleSectionChange = (
    inView: boolean,
    entry: IntersectionObserverEntry
  ) => {
    if (entry.isIntersecting) {
      setScrollTarget(entry.target.id);
    }
  };

  return (
    <>
      <NavBar scrollTarget={scrollTarget} />
      <main>
        <div className="bg-fixed bg-center bg-cover bg-hero w-full flex flex-col items-center justify-start gap-2 text-center">
          <Hero handleSectionChange={handleSectionChange} />
          <Tech handleSectionChange={handleSectionChange} />
          <Projects handleSectionChange={handleSectionChange} />
          <Contact handleSectionChange={handleSectionChange} />
          <Impressum handleSectionChange={handleSectionChange} />
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "navbar",
      "hero",
      "projects",
      "contact",
      "impressum",
    ])),
  },
});

export default Home;
