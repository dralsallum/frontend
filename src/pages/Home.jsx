import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Main />
      <Slider />
      <Options />
      <Article />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
