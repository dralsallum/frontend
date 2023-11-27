import { useEffect } from "react";
import { Footer, Hospitals, NavTech } from "../components";

const Request = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavTech />
      <Hospitals />
      <Footer />
    </>
  );
};

export default Request;
