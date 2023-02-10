import React from 'react'
import style from './styles/Home.module.css'
import checkAuth from '../helpers/autoCheckAuth';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import ToughtCreate from './ToughtCreate';

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(()=>{
    checkAuth(dispatch, navigate)
  },[])



  return (
    <div className={style.container}>  
      <ToughtCreate />
    </div>
  )
}

export default Home