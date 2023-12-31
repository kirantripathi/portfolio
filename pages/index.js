import Image from "next/image";
import Head from "next/head";

import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kiran | Front-End Developer</title>
      </Head>

      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
