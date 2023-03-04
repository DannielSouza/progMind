import React from 'react'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Legend,
  Line
} from "recharts";
import style from './styles/LineGraph.module.css'

const LineGraph = ({data, screenSettings}) => {

  const [dataArray, setDataArray] = React.useState([])

  const [startCount, setStartCount] = React.useState(false)
  const [currentDates, setCurrentDates] = React.useState()
  const [selectPrompt, setSelectPrompt] = React.useState(30)
  const [graphSize, setGraphSize] = React.useState({width:800, height: 180})
  

  React.useEffect(()=>{
    function changeDate(index){
      let dateMili = Date.now()
      let date = new Date(dateMili)
      date.setDate(date.getDate() - index)

      let day = date.getDate().toString().length === 1 ? "0"+date.getDate() : date.getDate()
      let month = date.getMonth().toString().length === 1 ? "0"+(date.getMonth()+1) : (date.getMonth()+1)

      return `${day}/${month}/${date.getFullYear()}`
    }

    for(let i = 0; i < selectPrompt; i++){
      let formatedDate = changeDate(i)
      setDataArray(prev=>{
        return [...prev, {
          date: formatedDate,
          verySadQuantity: 0,
          sadQuantity: 0,
          normalQuantity: 0,
          happyQuantity: 0,
          veryHappyQuantity: 0,
        }]
      })
    }
    setStartCount(true)
  },[selectPrompt])

  React.useEffect(()=>{
    if(dataArray){
    data.forEach((item)=>{
      const formatedData = `${item.createdAt.substring(8, 10)}/${item.createdAt.substring(5, 7)}/${item.createdAt.substring(0,4)}`
      dataArray.forEach((dataItem, index)=>{
        if(dataItem.date === formatedData){
          if(item.mainFeeling === "muito triste") setDataArray(prev=> [...prev, {...prev[index], verySadQuantity: prev[index].verySadQuantity++} ])
          if(item.mainFeeling === "triste") setDataArray(prev=> [...prev, {...prev[index], sadQuantity: prev[index].sadQuantity++} ])
          if(item.mainFeeling === "normal") setDataArray(prev=> [...prev, {...prev[index], normalQuantity: prev[index].normalQuantity++} ])
          if(item.mainFeeling === "feliz") setDataArray(prev=> [...prev, {...prev[index], happyQuantity: prev[index].happyQuantity++} ])
          if(item.mainFeeling === "muito feliz") setDataArray(prev=> [...prev, {...prev[index], veryHappyQuantity: prev[index].veryHappyQuantity++} ])
        }
      })
    })
  
    }
  },[startCount])

  
  React.useEffect(()=>{
    setCurrentDates(dataArray.slice(0, selectPrompt))
  },[dataArray, selectPrompt])
  

  React.useEffect(()=>{
    if(screenSettings <= 1150){
      setGraphSize({width: 480, height:150})
    }
  },[screenSettings])
  

  if(currentDates && currentDates.length > 0) return (
    <div className={style.selectContainer}>
      <select
        className={style.selectItem}
        id="type"
        value={selectPrompt}
        name="subFeeling"
        onChange={({target})=> setSelectPrompt(target.value)}
        required
      >
        <option value="7">7 dias</option>
        <option value="14">14 dias</option>
        <option value="30">30 dias</option>
      </select> 

      <LineChart width={graphSize.width} height={graphSize.height} data={currentDates.reverse()}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" name="Muito triste" dataKey="verySadQuantity" stroke="#7D3C98" />
        <Line type="monotone" name="Triste" dataKey="sadQuantity" stroke="#884EA0" />
        <Line type="monotone" name="Normal" dataKey="normalQuantity" stroke="#2471A3" />
        <Line type="monotone" name="Feliz" dataKey="happyQuantity" stroke="#2E86C1" />
        <Line type="monotone" name="Muito feliz" dataKey="veryHappyQuantity" stroke="#D4AC0D" />
    </LineChart>
    </div>
  )
}

export default LineGraph