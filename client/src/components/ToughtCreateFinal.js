import React from 'react'
import style from './styles/ToughtCreateFinal.module.css'

const ToughtCreateFinal = ({setCreationPart}) => {

  
  function backHome(){
    setCreationPart("1")
  }
  
  return (
    <div>
      ToughtCreateFinal
      <button onClick={backHome}>Home</button>  
    </div>
  )
}

export default ToughtCreateFinal