import React, { useState } from "react";
import './App.css';  // Caso tenha algum CSS que queira aplicar

// Importando as imagens da pasta 'img'
import logo from './img/logo.png';
import eyeOff from './img/eye-off.svg';
import eyeOn from './img/eye.svg';
import loginSvg from './img/login.svg';  // Renomeie para evitar conflito de nomes

function App() {
  // Estado para alternar a visibilidade da senha
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Função para alternar entre mostrar/ocultar senha
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div id="page" className="flex">
      <div>
        <header>
          {/* Usando a imagem do logo */}
          <a href="../">
            <img src={logo} alt="Logo" />
          </a>
        </header>
        <main>
          <div className="headline">
            <h1>Bem-vindo(a)!</h1>
            <p>
              Faça login ou cadastre-se para começar a fazer as suas compras.
            </p>
          </div>
          <form action="../BD/login.php" method="get">
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="input-wrapper">
              <div className="label-wrapper flex">
                <label htmlFor="senha"> Senha </label>
                <a href="recuperar1.html"> Esqueceu a senha? </a>
              </div>

              <input
                type={passwordVisible ? "text" : "password"}
                id="senha1"
                name="senha1"
                placeholder="Digite sua senha"
              />

              {/* Ícones de olho para alternar visibilidade da senha */}
              <img
                onClick={togglePassword}
                className={`eye ${passwordVisible ? "hide" : ""}`}
                src={eyeOff}
                alt="Mostrar senha"
              />
              <img
                onClick={togglePassword}
                className={`eye ${!passwordVisible ? "hide" : ""}`}
                src={eyeOn}
                alt="Ocultar senha"
              />
            </div>

            <button type="submit">Entrar</button>

            <div className="create-account">
              Ainda não tem uma conta?
              <a href="../cadastro/index.html"> Cadastre-se </a>
            </div>
          </form>
        </main>
      </div>
      {/* Usando a imagem de login */}
      <img src={loginSvg} alt="Ilustração de login" />
    </div>
  );
}

export default App;
