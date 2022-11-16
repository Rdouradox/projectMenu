import React from "react";
import styles from "./Register.css";
import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FormRegister from "../../Components/FormRegister/FormRegister";

const Register = () => {
  return (
    <div>
      <Navbar />
      <FormRegister />
      <Footer />
    </div>
  );
};

export default Register;
