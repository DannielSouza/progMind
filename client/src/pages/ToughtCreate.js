import React from 'react'
import ToughtCreatePart1 from '../components/ToughtCreatePart1'
import ToughtCreatePart2 from '../components/ToughtCreatePart2'
import style from './styles/ToughtCreate.module.css'
import {useSelector} from 'react-redux'
import ToughtCreateFinal from '../components/ToughtCreateFinal'


const ToughtCreate = () => {
  
  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)
  const [creationPart, setCreationPart] = React.useState("1")

  const [thoughtData, setThoughtData] = React.useState({
    subFeeling: null,
    bodyFeeling: null,
    situation: null,
    action: null
  })

  if(currentUser) return(
    <section>
      {creationPart === "1" && <ToughtCreatePart1 setThoughtData={setThoughtData} setCreationPart={setCreationPart}/>}
      {creationPart === "2" && <ToughtCreatePart2 setThoughtData={setThoughtData} thoughtData={thoughtData} setCreationPart={setCreationPart}/>}
      {creationPart === "3" && <ToughtCreateFinal setCreationPart={setCreationPart}/>}
    </section>
  )
  
}

export default ToughtCreate