import React from 'react'
import style from "./styles/RegisterForm.module.css"
import emailIcon from '../assets/mail.png'
import keyIcon from '../assets/key.png'
import userIcon from '../assets/user.png'

const RegisterForm = ({setScreen}) => {
  return (
    <form className={style.formContainer}>
      <h2 className={style.title}>Prog<span>Mind</span></h2>

      <label className={style.labelItem}>
          <img src={userIcon} alt="user icon"/>
          <input type="text" placeholder='Cadastre seu nome'/>
        </label>

        <label className={style.labelItem}>
          <img src={emailIcon} alt="mail icon"/>
          <input type="email" placeholder='Cadastre seu e-mail'/>
        </label>

        <label className={style.labelItem}>
        <img src={keyIcon} alt="key icon"/>
          <input type="password" placeholder='Cadastre sua senha'/>
        </label>

        <p className={style.changeScreen}>Já possui conta? <span onClick={()=>setScreen("LOGIN")}>Entrar.</span></p>

        <button className={style.sendButton}>Cadastrar</button>

      </form>
  )
}

export default RegisterForm