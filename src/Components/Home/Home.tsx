import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Product from "../Product/Product";
import Special from "../Special/Special";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f3f1f1", overflow: "hidden" }}>
      <Hero />
      <Popular />
      <Product />
      <Special />
    </div>
  );
};

export default Home;
