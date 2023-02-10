import React from 'react'
import style from './styles/Sidebar.module.css'

import historyIcon from '../assets/history.png'
import graphIcon from '../assets/graph.png'
import plusIcon from '../assets/plus.png'
import exitIcon from '../assets/exit.png'
import { logout } from '../redux/user/slice'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const Sidebar = ({setShowSidebar}) => {
  
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
      <h2 className={style.title}>Prog<span>Mind</span></h2>

      <div className={style.createContainer}>
        <Link to={"/"}><button className={style.createIcon}><img src={plusIcon} alt="adicionar pensamento" /> Novo pensamento</button></Link>
      </div>

      <div className={style.menuContainer}>
        <span>
          Acompanhamento
        </span>
        <ul className={style.listContainer}>
          <div><img src={graphIcon} alt="vizualizar estatísticas" /> <li>Estatísticas </li></div>
          <Link to={'/history'}><div> <img src={historyIcon} alt="vizualizar historico" /> <li>Histórico</li></div></Link>
        </ul>

        <span>
          Conta
        </span>
        <ul className={style.listContainer}>
          <div onClick={logoutUser}> <img src={exitIcon} alt="Sair da conta" /> <li>Sair</li></div>
        </ul>
      </div>

    </header>
  )
}

export default Sidebar