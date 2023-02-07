import React from 'react'
import style from "./styles/LoginForm.module.css"
import emailIcon from '../assets/mail.png'
import keyIcon from '../assets/key.png'
import {loginUser} from '../helpers/Api'
import { useDispatch } from 'react-redux'
import {login} from '../redux/user/slice'
import ErrorMessage from './ErrorMessage'
import { useNavigate } from "react-router-dom";

const LoginForm = ({setScreen, setShowSidebar}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userData, setUserData] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  function changeUserData({target}){
    setUserData({...userData, [target.name]: target.value})
  }

  async function userLoginFormSubmit(event){
    event.preventDefault()
    try {
      setError(false)
      setLoading(true)
      const response = await loginUser(userData)
      localStorage.setItem("progMindAuth", JSON.stringify(response))
      dispatch(login(response))
      setShowSidebar(true)
      navigate("/")
    } catch (error) {
      setError(error.response.data.error)
    }finally{
      setLoading(false)
    }

  }

  return (
    <form onSubmit={userLoginFormSubmit} className={style.formContainer}>
      {error && <ErrorMessage message={error}/>}
      <h2 className={style.title}>Prog<span>Mind</span></h2>

        <label className={style.labelItem}>
          <img src={emailIcon} alt="mail icon"/>
          <input onChange={changeUserData} type="email" name='email' placeholder='Insira seu e-mail cadastrado' required/>
        </label>

        <label className={style.labelItem}>
        <img src={keyIcon} alt="key icon"/>
          <input onChange={changeUserData} type="password" name='password' placeholder='Insira sua senha cadastrada' required/>
        </label>

        <p className={style.changeScreen}>Não possui conta? <span onClick={()=>setScreen("REGISTER")}>Registre-se.</span></p>

        {!loading ?
        <button className={style.sendButton}>Entrar</button>
        :
        <button className={style.sendButtonDisabled}>Entrar</button>
        }

      </form>
  )
}

export default LoginForm