import React from "react";
import Work from "../Components/Work";
import WebsiteTrafice from "./Website_trafice";
import Servises from "./Servises";
import Projects from "../Components/Projects";
import ClientLove from "../Components/Client_love";
import Contect from "../Components/Contect";
import Blogs from "./Blogs";
import Hero from "../Components/Hero";
// import ParticleComponent from './ParticleComponent';
function Home() {
  return (
    <>
      <Hero />
      <Work />
      <WebsiteTrafice />
      <Servises />
      <Projects />
      <ClientLove />
      <Contect />
      <Blogs />
    </>
  );
}

export default Home;
