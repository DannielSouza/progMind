import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  const [showSidebar, setShowSidebar] = React.useState(false)

  React.useEffect(()=>{
    if(!window.location.href.includes("/login")){
      setShowSidebar(true)
    }
  },[])


  return (
    <BrowserRouter>

      <div className="mainContainer">
      {showSidebar && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
