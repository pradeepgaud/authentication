import React from "react";
import Footer from "../component/Footer.jsx";
import FAQ from "../component/FAQ.jsx";
import Price from "../component/Price.jsx";
import Testimonials from "../component/Testimonials.jsx";
import Service from "../component/Service.jsx";
// import Navbar from "../component/Navbar.jsx";
import Hero from "../component/Hero.jsx";
import Features from "../component/Features.jsx";


function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <Price />
      <Testimonials />
      <Service />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
