import React from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts";

import style from './styles/MainQuantityGraph.module.css'



const MainQuantityGraph = ({data, screenSettings}) => {

  const [combineQuantity, setCombineQuantity] = React.useState();
  const [graphSize, setGraphSize] = React.useState({width:400, height: 200})



  React.useEffect(()=>{
    let muitoTristeQuantity = 0;
    let tristeQuantity = 0;
    let normalQuantity = 0;
    let felizQuantity = 0;
    let muitoFelizQuantity = 0;

    data.forEach((dataItem) => {
      if (dataItem.mainFeeling === "muito triste") muitoTristeQuantity++;
      if (dataItem.mainFeeling === "triste") tristeQuantity++;
      if (dataItem.mainFeeling === "normal") normalQuantity++;
      if (dataItem.mainFeeling === "feliz") felizQuantity++;
      if (dataItem.mainFeeling === "muito feliz") muitoFelizQuantity++;
    });

    setCombineQuantity([
      { name: "Muito triste", quantity: muitoTristeQuantity },
      { name: "Triste", quantity: tristeQuantity },
      { name: "Normal", quantity: normalQuantity },
      { name: "Feliz", quantity: felizQuantity },
      { name: "Muito feliz", quantity: muitoFelizQuantity },
    ]);
  },[])

  React.useEffect(()=>{
    if(screenSettings <= 1100){
      setGraphSize({width: 395, height:160})
    }
    if(screenSettings <= 500){
      setGraphSize({width: 360, height:150})
    }
  },[screenSettings])

  return (

  <div className={style.container}>
    <BarChart margin={1} width={graphSize.width} height={graphSize.height} data={combineQuantity}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" type="category" />
      <YAxis  type="number" allowDecimals={false}/>
      <Tooltip />
      <Bar  name='Quantidade' dataKey="quantity" fill="#85C1E9"/>
    </BarChart>
  </div>
  )
}

export default MainQuantityGraph