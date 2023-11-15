import React from "react";
import {
  Article,
  Divider,
  Footer,
  Main,
  NavTech,
  Options,
  Slider,
} from "../components";

const Home = () => {
  return (
    <>
      <NavTech />
      <Main />
      <Slider />
      <Article />
      <Options />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
