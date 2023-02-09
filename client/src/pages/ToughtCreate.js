import React from 'react'
import ToughtCreatePart1 from '../components/ToughtCreatePart1'
import ToughtCreatePart2 from '../components/ToughtCreatePart2'
import style from './styles/ToughtCreate.module.css'
import {useSelector} from 'react-redux'
import ToughtCreateFinal from '../components/ToughtCreateFinal'


const ToughtCreate = () => {
  const {currentPart} = useSelector(rootReducer => rootReducer.toughtReducer)
  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)
  
  const [creationPart, setCreationPart] = React.useState(currentPart)

  React.useEffect(()=>{
    setCreationPart(currentPart)
  },[currentPart])

  if(currentUser) return(
    <section>
      {creationPart === "1" && <ToughtCreatePart1 />}
      {creationPart === "2" && <ToughtCreatePart2 />}
      {creationPart === "3" && <ToughtCreateFinal />}
    </section>
  )
  
}

export default ToughtCreate