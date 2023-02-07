import React from 'react'
import style from './styles/Home.module.css'
import checkAuth from '../helpers/autoCheckAuth';
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import rootReducer from '../redux/rootReducer';

const Home = () => {
  /* const {currentUser} = useSelector(rootReducer => rootReducer.userReducer) */
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(()=>{
    checkAuth(dispatch, navigate)
  },[])



  return (
    <div className={style.container}>Home</div>
  )
}

export default Home