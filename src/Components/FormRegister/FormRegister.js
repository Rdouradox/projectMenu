import React from "react";
import "./FormRegister.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const FormRegister = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [CEP, setCEP] = useState("");

  // Reunir todos os dados e enviar no formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }

    console.log(user);
  };

  return (
    <div>
      <h2>CADASTRE-SE PARA PEDIR</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Seu nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label>
          <span>CEP:</span>
          <input
            type="text"
            name="Cep"
            required
            placeholder="Seu CEP"
            value={CEP}
            onChange={(e) => setCEP(e.target.value)}
          />
        </label>

        <btn className="btn btn-primary">CADASTRAR</btn>
      </form>
    </div>
  );
};

export default FormRegister;
