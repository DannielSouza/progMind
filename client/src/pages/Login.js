import React from "react";
import style from "./styles/Login.module.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { autoAuthenticationUser } from "../redux/user/slice";
import { verifyUser } from "../helpers/Api";
import { verifyUserLogged } from "../helpers/verifyUserLogged";

const Login = ({setShowSidebar}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [screen, setScreen] = React.useState("LOGIN")

  React.useEffect(()=>{
    setShowSidebar(false)
    verifyUserLogged(dispatch, navigate, setShowSidebar)
  },[])


  return (
    <section className={style.container}>
      
      {screen === "LOGIN" && <LoginForm setShowSidebar={setShowSidebar} setScreen={setScreen}/>}
      {screen === "REGISTER" && <RegisterForm setShowSidebar={setShowSidebar} setScreen={setScreen}/>}

    </section>
  );
};

export default Login;
