import type { NextPage } from "next";

import Hero from "../components/hero";
import NavBar from "../components/navbar/index";
import Tech from "../components/tech";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Tech />
      </main>
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    ...(await serverSideTranslations("de", ["common", "footer"])),
  },
});

export default Home;
