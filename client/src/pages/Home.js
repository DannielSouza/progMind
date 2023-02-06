import React from 'react'
import style from './styles/Home.module.css'
import {verifyUser} from '../helpers/Api';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [logged, setLogged] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(()=>{
    async function checkAuth(){
    let auth = localStorage.getItem("progMindAuth")
    if(auth){
      setLogged(true)
      let authJSON = JSON.parse(auth)
      const verifiedUser = await verifyUser(authJSON.token)
      console.log(verifiedUser) //VER COMO VAI ARMAZENAR ISSO GLOBALMENTE AINDA
    }
    else{
      navigate('/login')
    }
  }
  checkAuth()
  },[])



  return (
    <div className={style.container}>Home</div>
  )
}

export default Home