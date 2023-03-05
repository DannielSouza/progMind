import React from 'react'
import style from './styles/MobileSidebar.module.css'

import historyIcon from '../assets/history.png'
import graphIcon from '../assets/graph.png'
import plusIcon from '../assets/plusMobile.png'
import exitIcon from '../assets/exit.png'

import { useNavigate, Link } from 'react-router-dom'
import { logout } from '../redux/user/slice'
import { useDispatch } from 'react-redux'

const MobileSidebar = ({setShowSidebar}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function logoutUser(){
    localStorage.removeItem("progMindAuth")
    dispatch(logout())
    navigate("/auth")
    setShowSidebar(false)
  }

  return (
    <header className={style.container}>

      <Link to={"/"} className={style.menuIcon}>
        <img src={plusIcon} alt="adicionar pensamento" />
      </Link>

      <Link to={'/history'} className={style.menuIcon}>
        <img src={historyIcon} alt="vizualizar historico" /> 
      </Link>

      <Link to={'/statistics'} className={style.menuIcon}>
        <img src={graphIcon} alt="vizualizar estatísticas" /> 
      </Link>

      <div onClick={logoutUser} className={style.menuIcon}>
        <img src={exitIcon} alt="Sair da conta" />
      </div>
    </header>
  )
}

export default MobileSidebar