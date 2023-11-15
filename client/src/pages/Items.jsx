import React, { useEffect, useState } from "react";
import { Footer, Item, NavTech } from "../components";
import { useLocation } from "react-router-dom";

const Items = () => {
  return (
    <>
      <NavTech />
      <Item />
      <Footer />
    </>
  );
};

export default Items;
