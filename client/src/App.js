import React from "react";
/* import { Provider } from "react-redux";
import store from './redux/store' */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import History from "./pages/History";
import Statistics from "./pages/Statistics";
import {useSelector} from 'react-redux'


function App() {

  const [showSidebar, setShowSidebar] = React.useState(false)
  const {currentSideBar} = useSelector(rootReducer => rootReducer.sidebarReducer)


  React.useEffect(()=>{
    if(!window.location.href.includes("/auth")){
      setShowSidebar(true)
    }
  },[])


  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}

      <div className={currentSideBar === "desktop" ? "mainContainerDesktop" : "mainContainerMobile"}>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
        <Routes>
          <Route path="/auth" element={<Login setShowSidebar={setShowSidebar} />} />
          <Route path="/" element={<Home setShowSidebar={setShowSidebar} />} />
          <Route path="/history" element={<History />} />
          <Route path="/statistics" element={ <Statistics />} />
        </Routes>
      </div>

      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
