import React from 'react'
import style from './styles/ToughtCreate.module.css'
import veryHappy from '../assets/emojis/veryHappy.png'
import happy from '../assets/emojis/happy.png'
import normal from '../assets/emojis/normal.png'
import sad from '../assets/emojis/sad.png'
import verySad from '../assets/emojis/verySad.png'
import {useSelector} from 'react-redux'
import rootReducer from '../redux/user/slice';

const ToughtCreate = () => {

  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)

  const [selectedRange, setSelectedRange] = React.useState("3")
  const [selectedTheme, setSelectedTheme] = React.useState({emoji: normal, color: "#2471A3", humor: "Normal"})

  function changeRange({target}){
    setSelectedRange(target.value)
  }

  React.useEffect(()=>{
    switch (selectedRange){
      case "1":
        return setSelectedTheme({emoji: verySad, color: "#7D3C98 ", humor: "Muito triste"})
      case "2":
        return setSelectedTheme({emoji: sad, color: "#884EA0 ", humor: "Triste"})
      case "3":
        return setSelectedTheme({emoji: normal, color: "#2471A3 ", humor: "Normal"})
      case "4":
        return setSelectedTheme({emoji: happy, color: "#2E86C1 ", humor: "Feliz"})
      case "5":
        return setSelectedTheme({emoji: veryHappy, color: "#D4AC0D ", humor: "Muito feliz"})
      default:
        return null
    }
  },[selectedRange])

  if(currentUser)return (
    <section  className={style.container}>

      <h3 style={{color: selectedTheme.color}} className={style.title}><span>{currentUser.userName}</span>, como você está se sentindo agora?</h3>

      <div className={style.resumeContainer}>
        <img src={selectedTheme.emoji} alt="Como você está?" />
        <p style={{color: selectedTheme.color}}>{selectedTheme.humor}</p>
      </div>
      
      <input style={{boxShadow: `0 0 2px .5px ${selectedTheme.color}`}} onChange={changeRange} className={style.slider} min="1" max="5" type="range" list="tickmarks"/>
      <datalist id="tickmarks">
        <option value="1" label="1">1</option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
      </datalist>

    </section>
  )
}

export default ToughtCreate