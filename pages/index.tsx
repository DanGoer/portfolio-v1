import type { NextPage } from "next";

import Hero from "../components/hero";
import NavBar from "../components/navbar/index";
import Tech from "../components/tech";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = (props) => {
  const router = useRouter();
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

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navbar", "hero"])),
  },
});

export default Home;
