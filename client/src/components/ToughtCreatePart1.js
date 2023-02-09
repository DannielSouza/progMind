import React from 'react'
import style from'./styles/ToughtCreatePart1.module.css'
import veryHappy from '../assets/emojis/veryHappy.png'
import happy from '../assets/emojis/happy.png'
import normal from '../assets/emojis/normal.png'
import sad from '../assets/emojis/sad.png'
import verySad from '../assets/emojis/verySad.png'
import {useSelector} from 'react-redux'

import { useDispatch } from 'react-redux'
import {changeTought, changeToughtPart} from '../redux/tought/slice'

const ToughtCreatePart1 = () => {

  const dispatch = useDispatch()
  const {currentTought} = useSelector(rootReducer => rootReducer.toughtReducer)
  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)

  const [selectedRange, setSelectedRange] = React.useState("3")
  const [selectedTheme, setSelectedTheme] = React.useState({emoji: normal, color: "#2471A3", humor: "normal"})
  
  function changeRange({target}){
    setSelectedRange(target.value)
  }

  function nextCreationPart(){
    dispatch(changeTought({authorEmail: currentUser.userEmail, mainFeeling: selectedTheme.humor}))
    dispatch(changeToughtPart("2"))
  }


  React.useEffect(()=>{

    if(currentTought.mainFeeling === "muito triste") {
      setSelectedTheme({emoji: verySad, color: "#7D3C98 ", humor: "muito triste"})
      setSelectedRange("1") }
    if(currentTought.mainFeeling === "triste") {
      setSelectedTheme({emoji: sad, color: "#884EA0 ", humor: "triste"}) 
      setSelectedRange("2") }
    if(currentTought.mainFeeling === "normal") {
      setSelectedTheme({emoji: normal, color: "#2471A3 ", humor: "normal"}) 
      setSelectedRange("3") }
    if(currentTought.mainFeeling === "feliz") {
      setSelectedTheme({emoji: happy, color: "#2E86C1 ", humor: "feliz"}) 
      setSelectedRange("4") }
    if(currentTought.mainFeeling === "muito feliz") {
      setSelectedTheme({emoji: veryHappy, color: "#D4AC0D ", humor: "muito feliz"}) 
      setSelectedRange("5") }

},[])

  React.useEffect(()=>{
    switch (selectedRange){
      case "1":
        return setSelectedTheme({emoji: verySad, color: "#7D3C98 ", humor: "muito triste"})
      case "2":
        return setSelectedTheme({emoji: sad, color: "#884EA0 ", humor: "triste"})
      case "3":
        return setSelectedTheme({emoji: normal, color: "#2471A3 ", humor: "normal"})
      case "4":
        return setSelectedTheme({emoji: happy, color: "#2E86C1 ", humor: "feliz"})
      case "5":
        return setSelectedTheme({emoji: veryHappy, color: "#D4AC0D ", humor: "muito feliz"})
      default:
        return null
    }
  },[selectedRange])

  if(currentUser)return (
    <section className={style.container} >

      <h3 style={{color: selectedTheme.color}} className={style.title}><span>{currentUser.userName}</span>, como você está se sentindo agora?</h3>

      <div className={style.resumeContainer}>
        <img src={selectedTheme.emoji} alt="Como você está?" />
        <p style={{color: selectedTheme.color, textTransform: 'capitalize'}}>{selectedTheme.humor}</p>
      </div>
      
      <input style={{boxShadow: `0 0 2px .5px ${selectedTheme.color}`}} onChange={changeRange} className={style.slider} value={selectedRange} min="1" max="5" type="range" list="tickmarks"/>
      <datalist id="tickmarks">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
      </datalist>


      <button onClick={nextCreationPart} style={{border: `1px solid ${selectedTheme.color}`, color: selectedTheme.color}} className={style.nextButton}>Continuar</button>

    </section>
  )
}

export default ToughtCreatePart1