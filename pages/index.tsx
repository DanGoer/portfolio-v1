import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import NavBar from "../components/navbar/index";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
