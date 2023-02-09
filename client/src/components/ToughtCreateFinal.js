import React from 'react'
import style from './styles/ToughtCreateFinal.module.css'
import { useDispatch } from "react-redux";
import { resetToughtCreation, changeToughtPart} from "../redux/tought/slice"

const ToughtCreateFinal = () => {
  const dispatch = useDispatch()
  
  function backHome(){
    dispatch(resetToughtCreation())
    dispatch(changeToughtPart("1"))
  }
  
  return (
    <div>
      ToughtCreateFinal
      <button onClick={backHome}>Home</button>  
    </div>
  )
}

export default ToughtCreateFinal