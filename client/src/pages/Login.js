import React from "react";
import style from "./styles/Login.module.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login = () => {

  const [screen, setScreen] = React.useState("LOGIN")

  return (
    <section className={style.container}>
      
      {screen === "LOGIN" && <LoginForm setScreen={setScreen}/>}
      {screen === "REGISTER" && <RegisterForm setScreen={setScreen}/>}

    </section>
  );
};

export default Login;
