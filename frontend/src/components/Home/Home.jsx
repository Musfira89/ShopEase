import React from "react";
import Footer from "./Footer/Footer";
import Services from "./AppServices/Services";
import Topbar from "./Navigation/Topbar";
import Menubar from "./Navigation/Menubar";
import Submenu from "./Navigation/Submenu";
import Offerbar from "./Navigation/Offerbar";
import  Carousel  from "./Header/Carousel";

const Home = () => {
  return (
    <>
      <Topbar />
      <Menubar />
      <Submenu />
      <Offerbar />
      <Carousel />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
