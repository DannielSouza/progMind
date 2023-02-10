import React from 'react'
import style from './styles/ToughtCreateFinal.module.css'
import { useDispatch } from "react-redux";
import { resetToughtCreation, changeToughtPart} from "../redux/tought/slice"
import BackgroundImagesBlur from './BackgroundImagesBlur';

const ToughtCreateFinal = () => {
  const dispatch = useDispatch()
  
  function backHome(){
    dispatch(resetToughtCreation())
    dispatch(changeToughtPart("1"))
  }

  
  return (
    <div className={style.container}>
      <BackgroundImagesBlur />
      <h1 className={style.title}>Pensamento adicionado com sucesso.</h1>    
      <button className={style.homeButton} onClick={backHome}>Inicio</button>  
    </div>
  )
}

export default ToughtCreateFinal