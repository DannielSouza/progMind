import React from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts";

const MainQuantityGraph = ({data}) => {

  const [combineQuantity, setCombineQuantity] = React.useState();


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

  return (

  <div>
    <BarChart margin={1} width={400} height={200} data={combineQuantity}>
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