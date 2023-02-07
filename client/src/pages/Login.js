import React from "react";
import style from "./styles/Login.module.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login = ({setShowSidebar}) => {

  const [screen, setScreen] = React.useState("LOGIN")

  return (
    <section className={style.container}>
      
      {screen === "LOGIN" && <LoginForm setShowSidebar={setShowSidebar} setScreen={setScreen}/>}
      {screen === "REGISTER" && <RegisterForm setShowSidebar={setShowSidebar} setScreen={setScreen}/>}

    </section>
  );
};

export default Login;
