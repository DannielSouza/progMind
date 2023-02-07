import React from "react";
import style from "./styles/Login.module.css";
import wallpaperImage from "../assets/wallpaper.jpg";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <section className={style.container}>
      
      <LoginForm />

      <img
        className={style.wallpaperImage}
        src={wallpaperImage}
        alt="wallpaper"
      />
    </section>
  );
};

export default Login;
