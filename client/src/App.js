import React from "react";
import { Provider } from "react-redux";
import store from './redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  const [showSidebar, setShowSidebar] = React.useState(false)

  React.useEffect(()=>{
    if(!window.location.href.includes("/auth")){
      setShowSidebar(true)
    }
  },[])


  return (
    <BrowserRouter>
      <Provider store={store}>

      <div className="mainContainer">
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
        <Routes>
          <Route path="/auth" element={<Login setShowSidebar={setShowSidebar} />} />

          <Route path="/" element={<Home setShowSidebar={setShowSidebar} />} />
        </Routes>
      </div>

      </Provider>
    </BrowserRouter>
  );
}

export default App;
