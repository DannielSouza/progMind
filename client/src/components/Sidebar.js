import React from 'react'
import style from './styles/Sidebar.module.css'

import historyIcon from '../images/history.png'
import graphIcon from '../images/graph.png'
import plusIcon from '../images/plus.png'
import exitIcon from '../images/exit.png'

const Sidebar = () => {
  return (
    <header className={style.container}>
      <h2 className={style.title}>Prog<span>Mind</span></h2>

      <button className={style.createIcon}><img src={plusIcon} alt="vizualizar historico" /> Novo pensamento</button>

      <div className={style.menuContainer}>
        <span>
          Acompanhamento
        </span>
        <ul className={style.listContainer}>
          <div> <img src={graphIcon} alt="vizualizar estatísticas" /> <li>Estatísticas </li></div>
          <div> <img src={historyIcon} alt="vizualizar historico" /> <li>Histórico</li></div>
        </ul>

        <span>
          Conta
        </span>
        <ul className={style.listContainer}>
          <div> <img src={exitIcon} alt="Sair da conta" /> <li>Sair</li></div>
        </ul>
      </div>

    </header>
  )
}

export default Sidebar