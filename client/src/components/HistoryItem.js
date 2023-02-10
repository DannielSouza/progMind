import React from 'react'
import style from './styles/HistoryItem.module.css'
import calendarIcon from '../assets/calendar.png'
import veryHappy from '../assets/emojis/veryHappy.png'
import happy from '../assets/emojis/happy.png'
import normal from '../assets/emojis/normal.png'
import sad from '../assets/emojis/sad.png'
import verySad from '../assets/emojis/verySad.png'

const HistoryItem = ({itemData}) => { 
  
  const {authorEmail, mainFeeling, subFeeling, bodyFeeling, situation, action, createdAt} = itemData
  const formatedData = `${createdAt.substring(8, 10)}/${createdAt.substring(5, 7)}/${createdAt.substring(0,4)}`
  const [theme, setTheme] = React.useState()

  React.useEffect(()=>{
    if(mainFeeling === "muito triste") setTheme({emoji: verySad, color: "#7D3C98 "})
    if(mainFeeling === "triste") setTheme({emoji: sad, color: "#884EA0"})
    if(mainFeeling === "normal") setTheme({emoji: normal, color: "#2471A3"})
    if(mainFeeling === "feliz") setTheme({emoji: happy, color: "#2E86C1"})
    if(mainFeeling === "muito feliz") setTheme({emoji: veryHappy, color: "#D4AC0D "})   
  },[])

  if(theme) return (
    <div style={{borderColor: theme.color}} className={style.container}>
      <div>
        <div className={style.resumeInfo}>
          <div style={{color: theme.color}}>
            <span>{mainFeeling}</span> | <span>{subFeeling}</span>
          </div>
          <span className={style.date}><img src={calendarIcon} alt="calendario"/> {formatedData}</span>
        </div>

        <div className={style.subInfos}>
          {situation && <h3 style={{color: theme.color}}>O que houve: <span>{situation}</span></h3>}
          {action && <h3 style={{color: theme.color}}>O que fez em seguida: <span>{action}</span></h3>}
          {bodyFeeling && <h3 style={{color: theme.color}}>Como seu corpo reagiu: <span>{bodyFeeling}</span></h3>}
        </div>
      </div>

      <img className={style.emojiResume} src={theme.emoji} alt="emoji" />

    </div>
  )
}

export default HistoryItem