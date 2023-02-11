import React from 'react'
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell
} from "recharts";

const PieGraph = ({data}) => {

  const [combineQuantity, setCombineQuantity] = React.useState();

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

    data.forEach((dataItem) => {
      if (dataItem.bodyFeeling === "Falta de ar") faltaDeArQuantity++;
      if (dataItem.bodyFeeling === "Tontura") tonturaQuantity++;
      if (dataItem.bodyFeeling === "Tremores") tremoresQuantity++;
      if (dataItem.bodyFeeling === "Agitação") agitaçãoQuantity++;
      if (dataItem.bodyFeeling === "Palpitações") palpitaçõesQuantity++;
      if (dataItem.bodyFeeling === "Dor no peito") dorNoPeitoQuantity++;
      if (dataItem.bodyFeeling === "Cansaço") cansaçoQuantity++;
      if (dataItem.bodyFeeling === "Tensão muscular") tensãoMuscularQuantity++;
      if (dataItem.bodyFeeling === "frio na barriga") frioNaBarrigaQuantity++;
      if (dataItem.bodyFeeling === "outro") outroQuantity++;
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


  if(combineQuantity) return (
    <div>
      <PieChart width={270} height={200}>
      <Legend iconSize={10} layout="vertical" align='right'/><Tooltip />
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