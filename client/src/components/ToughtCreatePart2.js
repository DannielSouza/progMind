import React from "react";
import style from "./styles/ToughtCreatePart2.module.css";
import { useSelector } from "react-redux";
import {createThought} from '../helpers/Api'
import ErrorMessage from './ErrorMessage'
import { useDispatch } from "react-redux";
import { changeTought, changeToughtPart, updateSubFeelingDifferent, updateBodyFeelingDifferent, updateactionDifferent} from "../redux/tought/slice"
import BackgroundImagesBlur from "./BackgroundImagesBlur";


const ToughtCreatePart2 = () => {
  const dispatch = useDispatch()

  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)
  const {currentTought, differentValues, mainColor} = useSelector(rootReducer => rootReducer.toughtReducer)

  const [ subFeeling, setSubfeeling ] = React.useState("")
  const [ subFeelingDifferent, setSubfeelingDifferent ] = React.useState("")

  const [ bodyFeeling, setBodyFeeling ] = React.useState("")
  const [ bodyFeelingDifferent, setBodyFeelingDifferent ] = React.useState("")

  const [ situation, setSituation ] = React.useState("")

  const [ action, setAction ] = React.useState("")
  const [ actionDifferent, setActionDifferent ] = React.useState("")

  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(()=>{
    if(currentTought.subFeeling){
      if(differentValues.subFeelingDifferent === true){  
        setSubfeeling("outro")
        setSubfeelingDifferent(currentTought.subFeeling)}
      else{
        setSubfeeling(currentTought.subFeeling)
      }
    }
    if(currentTought.bodyFeeling){
      if(differentValues.bodyFeelingDifferent === true){  
        setBodyFeeling("outro")
        setBodyFeelingDifferent(currentTought.bodyFeeling)}
      else{
        setBodyFeeling(currentTought.bodyFeeling)
      }
    }
    if(currentTought.action){
      if(differentValues.actionDifferent === true){  
        setAction("outro")
        setActionDifferent(currentTought.action)}
      else{
        setAction(currentTought.action)
      }
    }
    if(currentTought.situation){
      setSituation(currentTought.situation)
    } 
  },[])

  function confirmAndTrySubmit(){
    setLoading(true)
    setError(false)

    saveToughtCreationChanges()
    
    createNewThought()
  }

  async function createNewThought(){
    try {
      await createThought(currentTought, currentUser.token)
      dispatch(changeToughtPart("3"))
    } catch (error) {
      setError(error.response.data.error)
    }finally{
      setLoading(false)
    }
  }

  function backThoughtCreationPart(){
    dispatch(changeToughtPart("1"))
    saveToughtCreationChanges()
  }

  function saveToughtCreationChanges(){

    dispatch(updateSubFeelingDifferent(subFeeling === "outro" ? true : false))
    dispatch(updateBodyFeelingDifferent(bodyFeeling === "outro" ? true : false))
    dispatch(updateactionDifferent(action === "outro" ? true : false))

    dispatch(changeTought({
      subFeeling: subFeeling === "outro" ? subFeelingDifferent : subFeeling,
      bodyFeeling: bodyFeeling === "outro" ? bodyFeelingDifferent : bodyFeeling,
      situation: situation,
      action: action === "outro" ? actionDifferent : action,
    }))
  }

  function mouseOverEnterShadow({target}){
    target.style.boxShadow = `0px 0px 3px 1px ${mainColor}`;
  }

  function mouseOverLeaveShadow({target}){
    target.style.boxShadow = "";
  }

  return (
    <section className={style.container}>
      <BackgroundImagesBlur />

      {error && <ErrorMessage message={error}/>}

      <h3 style={{color: mainColor}} className={style.title}>Descreva mais o que houve</h3>


      <label>
      <p style={{color: mainColor}}>
        O que aconteceu?</p>
        <input 
        type="text"
        className={style.textInput}
        placeholder="Digite aqui"
        value={situation}
        style={{borderColor: mainColor}}
        onMouseOver={mouseOverEnterShadow}
        onMouseLeave={mouseOverLeaveShadow}
        onChange={({target})=> setSituation(target.value)}
        required
        />
      </label>


      <label>
      <p style={{color: mainColor}}>Qual sentimento você sentiu? *</p>
        <select
          className={style.selectInput}
          id="type"
          value={subFeeling}
          style={{borderColor: mainColor}}
          onMouseOver={mouseOverEnterShadow}
        onMouseLeave={mouseOverLeaveShadow}
          name="subFeeling"
          onChange={({target})=> setSubfeeling(target.value)}
          required
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="Ansiedade">Ansiedade</option>
          <option value="Alegria">Alegria</option>
          <option value="Surpresa">Surpresa</option>
          <option value="Amor">Amor</option>
          <option value="Otimismo">Otimismo</option>
          <option value="Calma">Calma</option>
          <option value="Orgulho">Orgulho</option>
          <option value="Excitação">Excitação</option>
          <option value="Constrangimento">Constrangimento</option>
          <option value="outro">Outro</option>
        </select>

        {subFeeling === 'outro' && 
          <input 
          type="text"
          value={subFeelingDifferent}
          className={style.selectInputDifferent}
          placeholder="Digite aqui"
          style={{borderColor: mainColor}}
          onMouseOver={mouseOverEnterShadow}
        onMouseLeave={mouseOverLeaveShadow}
          onChange={({target})=> setSubfeelingDifferent(target.value)}
          required
          />
        
        }
      </label>


      <label>
      <p style={{color: mainColor}}>Como seu corpo reagiu? *</p>
        <select
          className={style.selectInput}
          id="type"
          value={bodyFeeling}
          style={{borderColor: mainColor}}
          onMouseOver={mouseOverEnterShadow}
        onMouseLeave={mouseOverLeaveShadow}
          name="subFeeling"
          onChange={({target})=> setBodyFeeling(target.value)}
          required
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="Falta de ar">Falta de ar</option>
          <option value="Tontura">Tontura</option>
          <option value="Tremores">Tremores</option>
          <option value="Agitação">Agitação</option>
          <option value="Palpitações">Palpitações</option>
          <option value="Dor no peito">Dor no peito</option>
          <option value="Cansaço">Cansaço</option>
          <option value="Tensão muscular">Tensão muscular</option>
          <option value="Frio na barriga">Frio na barriga</option>
          <option value="outro">Outro</option>
        </select>

        {bodyFeeling === 'outro' && 
          <input 
          value={bodyFeelingDifferent}
          type="text"
          style={{borderColor: mainColor}}
          onMouseOver={mouseOverEnterShadow}
        onMouseLeave={mouseOverLeaveShadow}
          className={style.selectInputDifferent}
          placeholder="Digite aqui"
          onChange={({target})=> setBodyFeelingDifferent(target.value)}
          required
          />
        
        }
      </label>


      <label>
      <p style={{color: mainColor}}>O que você fez em seguida?</p>
        <select
          className={style.selectInput}
          id="type"
          value={action}
          name="subFeeling"
          style={{borderColor: mainColor}}
          onMouseOver={mouseOverEnterShadow}
        onMouseLeave={mouseOverLeaveShadow}
          onChange={({target})=> setAction(target.value)}
          required
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="Pratiquei atividade fisica">Pratiquei atividade fisica</option>
          <option value="Pratiquei yoga/relaxamento">Pratiquei yoga/relaxamento</option>
          <option value="Consumi alcool">Consumi álcool</option>
          <option value="Fiz compras">Fiz compras</option>
          <option value="Fumei">Fumei</option>
          <option value="Me isolei">Me isolei</option>
          <option value="Fui dormir">Fui dormir</option>
          <option value="Comi compulsivamente">Comi compulsivamente</option>
          <option value="Pesquisei ou planejei suicidio">Pesquisei ou planejei suicidio</option>
          <option value="outro">Outro</option>
        </select>

        {action === 'outro' && 
          <input 
          type="text"
          style={{borderColor: mainColor}}
          onMouseOver={mouseOverEnterShadow}
        onMouseLeave={mouseOverLeaveShadow}
          value={actionDifferent}
          className={style.selectInputDifferent}
          placeholder="Digite aqui"
          onChange={({target})=> setActionDifferent(target.value)}
          required
          />
        
        }
      </label>


        <div className={style.buttonContainer}>
          <button style={{borderColor: mainColor, color: mainColor}} className={style.backButton} onClick={backThoughtCreationPart}>Voltar</button>

          {loading?
            <button style={{borderColor: mainColor, background: mainColor}} className={style.confirmButtonDisabled}>Enviar</button>
            :
            <button style={{borderColor: mainColor, background: mainColor}} className={style.confirmButton} onClick={confirmAndTrySubmit}>Enviar</button>
          }
        </div>
    </section>
  );
};

export default ToughtCreatePart2;
