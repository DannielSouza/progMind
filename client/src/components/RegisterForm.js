import React from 'react'
import style from "./styles/RegisterForm.module.css"
import emailIcon from '../assets/mail.png'
import keyIcon from '../assets/key.png'
import userIcon from '../assets/user.png'
import {registerUser} from '../helpers/Api'
import { useDispatch } from 'react-redux'
import {register} from '../redux/user/slice'
import ErrorMessage from './ErrorMessage'
import { useNavigate } from "react-router-dom";

const RegisterForm = ({setScreen, setShowSidebar}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userData, setUserData] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)


  function changeUserData({target}){
    setUserData({...userData, [target.name]: target.value})
  }

  async function userRegisterFormSubmit(event){
    event.preventDefault()
    try {
      setError(false)
      setLoading(true)
      const response = await registerUser(userData)
      localStorage.setItem("progMindAuth", JSON.stringify(response))
      dispatch(register(response))
      setShowSidebar(true)
      navigate("/")
    } catch (error) {
      setError(error.response.data.error)
    }finally{
      setLoading(false)
    }
  }


  return (
    <form onSubmit={userRegisterFormSubmit} className={style.formContainer}>
    {error && <ErrorMessage message={error}/>}

      <h2 className={style.title}>Prog<span>Mind</span></h2>

      <label className={style.labelItem}>
          <img src={userIcon} alt="user icon"/>
          <input autoComplete='off' onChange={changeUserData} required name='name' type="text" placeholder='Cadastre seu nome'/>
        </label>

        <label className={style.labelItem}>
          <img src={emailIcon} alt="mail icon"/>
          <input autoComplete='off' onChange={changeUserData} required name='email' type="email" placeholder='Cadastre seu e-mail'/>
        </label>

        <label className={style.labelItem}>
        <img src={keyIcon} alt="key icon"/>
          <input autoComplete='off' onChange={changeUserData} required name='password' type="password" placeholder='Cadastre sua senha'/>
        </label>

        <p className={style.changeScreen}>Já possui conta? <span onClick={()=>setScreen("LOGIN")}>Entrar.</span></p>


        {!loading ?
        <button className={style.sendButton}>Cadastrar</button>
        :
        <button className={style.sendButtonDisabled}>Cadastrar</button>
        }
      </form>
  )
}

export default RegisterForm