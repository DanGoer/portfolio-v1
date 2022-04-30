import type { NextPage } from "next";
import Hero from "../components/hero";
import NavBar from "../components/navbar/index";
import Tech from "../components/tech";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Impressum from "../components/impressum";
import { useRef } from "react";

//todo: distance between sections, logo, text formatting and text,
// images opt, comments and readme,ts...

const Home: NextPage = (props) => {
  const pageRefs = useRef<JSX.Element>(null);
  const router = useRouter();
  return (
    <>
      <NavBar pageRefs={pageRefs} />
      <main>
        <div className="bg-fixed bg-center bg-cover bg-hero w-full flex flex-col items-center justify-start pt-48 gap-2 text-center">
          <Hero />
          <Tech />
          <Projects />
          <Contact pageRefs={pageRefs} />
          <Impressum />
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
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
