import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Yousaf Wazir Portfolio</title>
        <meta name="description" content="Yousaf Wazir\'s portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/icons8-globe-africa-3d-fluency-96.png" type="image/x-icon" />
      </Head>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
    </Fragment>
  );
}
