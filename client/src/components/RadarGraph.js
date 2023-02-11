import React from 'react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
} from "recharts";

const RadarGraph = ({data}) => {


  const [combineQuantity, setCombineQuantity] = React.useState();

  React.useEffect(()=>{
    let alegriaQuantityQuantity = 0;
    let surpresaQuantity = 0;
    let amorQuantity = 0;
    let otimismoQuantity = 0;
    let calmaQuantity = 0;
    let excitaçãoQuantity = 0;
    let orgulhoQuantity = 0;
    let constrangimentoQuantity = 0;
    let outroQuantity = 0;

    data.forEach((dataItem) => {
      if (dataItem.subFeeling ==="Alegria") alegriaQuantityQuantity++;
      if (dataItem.subFeeling === "Surpresa") surpresaQuantity++;
      if (dataItem.subFeeling === "Amor") amorQuantity++;
      if (dataItem.subFeeling === "Otimismo") otimismoQuantity++;
      if (dataItem.subFeeling === "Calma") calmaQuantity++;
      if (dataItem.subFeeling === "Excitação") excitaçãoQuantity++;
      if (dataItem.subFeeling === "Orgulho") orgulhoQuantity++;
      if (dataItem.subFeeling === "Constrangimento") constrangimentoQuantity++;
      if (dataItem.subFeeling === "outro") outroQuantity++;
    });

    setCombineQuantity([
      {
        name: "Constrangimento",
        quantity: constrangimentoQuantity,
      },
      
      {
        name: "Surpresa",
        quantity: surpresaQuantity,
      },
      {
        name: "Amor",
        quantity: amorQuantity,
      },
      {
        name: "Otimismo",
        quantity: otimismoQuantity,
      },
      {
        name: "Alegria",
        quantity: alegriaQuantityQuantity,
      },
      {
        name: "Calma",
        quantity: calmaQuantity,
      },
      {
        name: "Excitação",
        quantity: excitaçãoQuantity,
      },
      {
        name: "Orgulho",
        quantity: orgulhoQuantity,
      },
      
      {
        name: "Outros",
        quantity: outroQuantity,
      },
    ]);
  },[])


  return (
    <div>
      <RadarChart outerRadius={90} width={370} height={250} data={combineQuantity}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <Tooltip />
        <Radar name='Quantidade' dataKey="quantity" stroke="#8884d8" fill="#85C1E9" fillOpacity={0.6} />
      </RadarChart>
    </div>
  )
}

export default RadarGraph