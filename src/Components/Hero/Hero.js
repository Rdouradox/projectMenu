import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <Link to="/Register">
        <btn className="btn btn-newUser">Primeira vez aqui</btn>
      </Link>
      <Link to="/Login">
        <btn className="btn btn-primary">Já conheço!</btn>
      </Link>
    </div>
  );
};

export default Hero;
