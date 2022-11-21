import styles from "./Home.css";

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="item n1">
          <p>oi</p>
        </div>
        <div className="item n2">
          <p>teste</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
