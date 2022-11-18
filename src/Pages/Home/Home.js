import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import FormLogin from "../../Components/FormLogin/FormLogin";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FormLogin />
      <Footer />
    </div>
  );
};

export default Home;
