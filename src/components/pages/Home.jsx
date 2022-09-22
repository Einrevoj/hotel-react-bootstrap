import React from "react";
import AboutUs from "../AboutUs";
import Gallery from "../Gallery";
import Hero from "../Hero";
import Price from "../Price";
import Rooms from "../Rooms";
import Services from "../Services";
import Team from "../Team";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Rooms />
      <Services />
      <Team />
      <Gallery />
      <Price />
    </>
  );
}
