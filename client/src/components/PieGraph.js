import React from 'react'
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell
} from "recharts";

const PieGraph = ({data, screenSettings}) => {

  const [combineQuantity, setCombineQuantity] = React.useState();
  const [graphSize, setGraphSize] = React.useState({width:270, height: 200, layout:"vertical", align:"right"})

  React.useEffect(()=>{
    let faltaDeArQuantity = 0;
    let tonturaQuantity = 0;
    let tremoresQuantity = 0;
    let agitaçãoQuantity = 0;
    let palpitaçõesQuantity = 0;
    let dorNoPeitoQuantity = 0;
    let cansaçoQuantity = 0;
    let tensãoMuscularQuantity = 0;
    let frioNaBarrigaQuantity = 0;
    let outroQuantity = 0;

    data.forEach((dataItem, screenSettings) => {
      if (dataItem.bodyFeeling === "Falta de ar"){ 
        faltaDeArQuantity++}
      else if (dataItem.bodyFeeling === "Tontura"){ 
        tonturaQuantity++}
      else if (dataItem.bodyFeeling === "Tremores"){ 
        tremoresQuantity++}
      else if (dataItem.bodyFeeling === "Agitação"){ 
        agitaçãoQuantity++}
      else if (dataItem.bodyFeeling === "Palpitações"){ 
        palpitaçõesQuantity++}
      else if (dataItem.bodyFeeling === "Dor no peito"){ 
        dorNoPeitoQuantity++}
      else if (dataItem.bodyFeeling === "Cansaço"){ 
        cansaçoQuantity++}
      else if (dataItem.bodyFeeling === "Tensão muscular"){ 
        tensãoMuscularQuantity++}
      else if (dataItem.bodyFeeling === "frio na barriga"){ 
        frioNaBarrigaQuantity++}
      else outroQuantity++
    });

    setCombineQuantity([
      { name: "Falta de ar", quantity: faltaDeArQuantity },
      { name: "Tontura", quantity: tonturaQuantity },
      { name: "Tremores", quantity: tremoresQuantity },
      { name: "Agitação", quantity: agitaçãoQuantity },
      { name: "Palpitações", quantity: palpitaçõesQuantity },
      { name: "Dor no peito", quantity: dorNoPeitoQuantity },
      { name: "Cansaço", quantity: cansaçoQuantity },
      { name: "Tensão muscular", quantity: tensãoMuscularQuantity },
      { name: "Frio na barriga", quantity: frioNaBarrigaQuantity },
      { name: "Outros", quantity: outroQuantity },
    ]);
  },[])

  const colors = [
    "#7D3C98", "#884EA0", "#2471A3", "#2E86C1", "#D4AC0D", "#E74C3C", "#F1C40F", "#D35400", "#7B241C", "#808B96"
  ]

  React.useEffect(()=>{
    if(screenSettings <= 1100){
      setGraphSize({width: 250, height:300, layout:"horizontal", align: undefined})
    }
  },[screenSettings])


  if(combineQuantity) return (
    <div>
      <PieChart width={graphSize.width} height={graphSize.height}>
      <Legend iconSize={10} layout={graphSize.layout} align={graphSize.align}/><Tooltip />
        <Pie data={combineQuantity} dataKey="quantity" nameKey="name" outerRadius={50} fill="#8884d8">

        {combineQuantity.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}

        </Pie>
      </PieChart>
    </div>
  )
}

export default PieGraph