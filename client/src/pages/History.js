import React from 'react'
import style from './styles/History.module.css'
import {getUserToughts} from '../helpers/Api'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import checkAuth from '../helpers/autoCheckAuth';
import HistoryItem from '../components/HistoryItem';

const History = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)

  const [historyData, setHistoryData] = React.useState(null)

  React.useEffect(()=>{
    checkAuth(dispatch, navigate)
  },[])


  React.useEffect(()=>{
    async function getHistoryData(){
      if(currentUser.userEmail){
        const response = await getUserToughts(currentUser.userEmail)
        setHistoryData(response)
      }
    }
    getHistoryData()
  },[currentUser])


  if(historyData) return (
    <section className={style.container}>

      <h1>Histórico</h1>

      {historyData.map(itemData=>{
        return <HistoryItem key={itemData._id} itemData={itemData}/>
      })}
    </section>
  )
}

export default History