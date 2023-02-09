import React from "react";
import style from "./styles/ToughtCreatePart2.module.css";
import { useSelector } from "react-redux";
import {createThought} from '../helpers/Api'
import ErrorMessage from './ErrorMessage'
import { useDispatch } from "react-redux";
import { changeTought, changeToughtPart, updateSubFeelingDifferent, updateBodyFeelingDifferent, updateactionDifferent} from "../redux/tought/slice"

const ToughtCreatePart2 = () => {
  const dispatch = useDispatch()

  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)
  const {currentTought, differentValues} = useSelector(rootReducer => rootReducer.toughtReducer)

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

  return (
    <section className={style.container}>

      {error && <ErrorMessage message={error}/>}

      <label>
      <p>O que aconteceu?</p>
        <input 
        type="text"
        className={style.textInput}
        placeholder="Digite aqui"
        value={situation}
        onChange={({target})=> setSituation(target.value)}
        required
        />
      </label>


      <label>
      <p>Qual sentimento você sentiu? *</p>
        <select
          className={style.selectInput}
          id="type"
          value={subFeeling}
          name="subFeeling"
          onChange={({target})=> setSubfeeling(target.value)}
          required
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="ansiedade">Ansiedade</option>
          <option value="alegria">Alegria</option>
          <option value="surpresa">Surpresa</option>
          <option value="amor">Amor</option>
          <option value="otimismo">Otimismo</option>
          <option value="calma">Calma</option>
          <option value="orgulho">Orgulho</option>
          <option value="excitação">Excitação</option>
          <option value="constrangimento">Constrangimento</option>
          <option value="outro">Outro</option>
        </select>

        {subFeeling === 'outro' && 
          <input 
          type="text"
          value={subFeelingDifferent}
          className={style.selectInputDifferent}
          placeholder="Digite aqui"
          onChange={({target})=> setSubfeelingDifferent(target.value)}
          required
          />
        
        }
      </label>


      <label>
      <p>Como seu corpo reagiu? *</p>
        <select
          className={style.selectInput}
          id="type"
          value={bodyFeeling}
          name="subFeeling"
          onChange={({target})=> setBodyFeeling(target.value)}
          required
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="falta de ar">Falta de ar</option>
          <option value="tontura">Tontura</option>
          <option value="tremores">Tremores</option>
          <option value="agitação">Agitação</option>
          <option value="palpitações">Palpitações</option>
          <option value="dor no peito">Dor no peito</option>
          <option value="cansaço">Cansaço</option>
          <option value="tensão muscular">Tensão muscular</option>
          <option value="frio na barriga">Frio na barriga</option>
          <option value="outro">Outro</option>
        </select>

        {bodyFeeling === 'outro' && 
          <input 
          value={bodyFeelingDifferent}
          type="text"
          className={style.selectInputDifferent}
          placeholder="Digite aqui"
          onChange={({target})=> setBodyFeelingDifferent(target.value)}
          required
          />
        
        }
      </label>


      <label>
      <p>O que você fez em seguida?</p>
        <select
          className={style.selectInput}
          id="type"
          value={action}
          name="subFeeling"
          onChange={({target})=> setAction(target.value)}
          required
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="pratiquei atividade fisica">Pratiquei atividade fisica</option>
          <option value="pratiquei yoga/relaxamento">Pratiquei yoga/relaxamento</option>
          <option value="consumi alcool">Consumi álcool</option>
          <option value="fiz compras">Fiz compras</option>
          <option value="fumei">Fumei</option>
          <option value="me isolei">Me isolei</option>
          <option value="fui dormir">Fui dormir</option>
          <option value="comi compulsivamente">Comi compulsivamente</option>
          <option value="pesquisei ou planejei suicidio">Pesquisei ou planejei suicidio</option>
          <option value="outro">Outro</option>
        </select>

        {action === 'outro' && 
          <input 
          type="text"
          value={actionDifferent}
          className={style.selectInputDifferent}
          placeholder="Digite aqui"
          onChange={({target})=> setActionDifferent(target.value)}
          required
          />
        
        }
      </label>


        <button onClick={backThoughtCreationPart}>Voltar</button>
        {loading?
          <button className={style.confirmButtonDisabled}>Enviar</button>
        :
        <button className={style.confirmButton} onClick={confirmAndTrySubmit}>Enviar</button>
      }
    </section>
  );
};

export default ToughtCreatePart2;
