import React from 'react'
import style from "./styles/LoginForm.module.css"
import emailIcon from '../assets/mail.png'
import keyIcon from '../assets/key.png'

const LoginForm = ({setScreen}) => {
  return (
    <form className={style.formContainer}>
      <h2 className={style.title}>Prog<span>Mind</span></h2>

        <label className={style.labelItem}>
          <img src={emailIcon} alt="mail icon"/>
          <input type="email" placeholder='Insira seu e-mail cadastrado'/>
        </label>

        <label className={style.labelItem}>
        <img src={keyIcon} alt="key icon"/>
          <input type="password" placeholder='Insira sua senha cadastrada'/>
        </label>

        <p className={style.changeScreen}>Não possui conta? <span onClick={()=>setScreen("REGISTER")}>Registre-se.</span></p>

        <button className={style.sendButton}>Entrar</button>

      </form>
  )
}

export default LoginForm