import React from "react";
import style from "./styles/Statistics.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import checkAuth from "../helpers/autoCheckAuth";
import { getUserToughts } from "../helpers/Api";
import MainQuantityGraph from "../components/MainQuantityGraph";
import RadarGraph from "../components/RadarGraph";
import PieGraph from "../components/PieGraph";
import LineGraph from "../components/LineGraph";



const Statistics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const [data, setData] = React.useState();


  React.useEffect(() => {
    checkAuth(dispatch, navigate);
  }, []);

  React.useEffect(() => {
    async function getHistoryData() {
      if (currentUser) {
        const response = await getUserToughts(currentUser.userEmail);
        setData(response);
      }
    }
    getHistoryData();
  }, [currentUser]);


  if (data)
    return (
      <section className={style.container}>

        <div className={style.lineGraph}>
          <div className={style.lineGraphContent}>
            <div><h1>Acompanhamento diário:</h1> 
        
        </div>
            <p>Nesse gráfico você consegue acompanhar quantos pensamentos você adicionou em determado período de tempo, além de conseguir aumentar e diminuir o raio de busca.</p>
          </div>
          <LineGraph data={data} />
        </div>

        <div className={style.subGraphsContainer}>
          <div className={style.subGraphsContent}>
            <h1>Resumo quantitativo:</h1>
            <p>Nesses gráficos você tem um resumo dos pensamentos separados em categorias em seus respectivos gráficos gráficos diferentes.</p>
          </div>
          <div className={style.subGraphs}>
            <MainQuantityGraph data={data} />
            <RadarGraph data={data} />
            <PieGraph data={data} />
          </div>
        </div>

      </section>
    );
};

export default Statistics;
