import { useEffect, useState } from "react";
import { Apply, Footer, NavTech, Products } from "../components";

const Upload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavTech />
      <Apply />
      <Footer />
    </>
  );
};

export default Upload;
