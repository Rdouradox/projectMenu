import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FormLogin from "../../Components/FormLogin/FormLogin";
import Footer from "../../Components/Footer/Footer";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Navbar />
      <FormLogin />
      <Footer />
    </div>
  );
};

export default Login;
