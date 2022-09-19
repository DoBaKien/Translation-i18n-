import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import  Content  from "./Content";
import  Content1  from "./Content1";
import addNotification from "react-push-notification"
import logo from "./bee.jpg"
function App() {

  /**
   * 
   * push notification
   */
  const show =()=>{
    addNotification({
      title:"Notification",
      message:"See me",
      duration: 4000,
      icon: logo,
      native:true,
      onClick:()=>window.location="https://reactjs.org/"
    })
  }


  /**
   * Translation
   * 
   */
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handle = () => {
    navigate("/content");
  };
  const handle1 = () => {
    navigate("/content1");
  };
  const [a,setA] = useState("")
  const handleChangeLng = (lng) => {
    setA(lng)
    return i18n.changeLanguage(lng);
    
  };
  useEffect(() => {
    localStorage.setItem("lng",a);
  },[a]);

  return (
    <div className="App">
      <button onClick={() => handleChangeLng("eng")}>English</button>
      <button onClick={() => handleChangeLng("vn")}>VietNam</button>
      <h1>{t("hello")}</h1>
      <h1>{t("how are you")}</h1>
      <button onClick={handle}>as</button>
      <button onClick={handle1}>as</button>
      <button onClick={show}>show notification</button>
      <Routes>
        <Route path="/content" element={<Content/>} />
        <Route path="/content1" element={<Content1/>} />
      </Routes>
    </div>
  );
}

export default App;
