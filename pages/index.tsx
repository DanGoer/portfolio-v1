import type { NextPage } from "next";

import Hero from "../components/hero";
import NavBar from "../components/navbar/index";
import Tech from "../components/tech";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import Projects from "../components/projects";

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
    ])),
  },
});

export default Home;
