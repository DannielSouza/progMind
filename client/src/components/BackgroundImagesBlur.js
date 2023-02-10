import React from 'react'
import sadEmoji from '../assets/emojis/sad.png'
import happyEmoji from '../assets/emojis/happy.png'
import normalEmoji from '../assets/emojis/normal.png'
import veryHappyEmoji from '../assets/emojis/veryHappy.png'
import verySadEmoji from '../assets/emojis/verySad.png'
import style from './styles/BackgroundImagesBlur.module.css'

const BackgroundImagesBlur = () => {
  return (
    <div className={style.container}>


      <img className={style.imageBackground1} src={sadEmoji} alt="emote de fundo"/>
      <img className={style.imageBackground2} src={happyEmoji} alt="emote de fundo"/>
      <img className={style.imageBackground3} src={normalEmoji} alt="emote de fundo"/>
      <img className={style.imageBackground4} src={veryHappyEmoji} alt="emote de fundo"/>
      <img className={style.imageBackground5} src={verySadEmoji} alt="emote de fundo"/>
      <img className={style.imageBackground6} src={veryHappyEmoji} alt="emote de fundo"/>
      <img className={style.imageBackground7} src={happyEmoji} alt="emote de fundo"/>
      <img className={style.imageBackground8} src={normalEmoji} alt="emote de fundo"/>
      <img className={style.imageBackground9} src={verySadEmoji} alt="emote de fundo"/>

    </div>
  )
}

export default BackgroundImagesBlur