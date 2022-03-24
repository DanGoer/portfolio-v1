import type { NextPage } from "next";
import Hero from "../components/hero";
import NavBar from "../components/navbar/index";
import Tech from "../components/tech";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Impressum from "../components/impressum";

const Home: NextPage = (props) => {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <main>
        <div className=" bg-fixed bg-center bg-cover bg-hero w-screen  flex flex-col items-center justify-start py-48 gap-2 text-center">
          <Hero />
          <Tech />
          <Projects />
          <Contact />
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
    ])),
  },
});

export default Home;
