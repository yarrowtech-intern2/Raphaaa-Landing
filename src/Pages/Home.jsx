import React from "react";
import Hero from "../Component/Hero";
import FAQ from "../Component/FAQ";
import Contact from "../Component/Contact";
import About from "../Component/About";
import NewArrivals from "../Component/NewArrivals";
import Floating from "../Component/Floating";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <NewArrivals />
      <FAQ />
      <Contact />
      <Floating />
    </>
  );
}
