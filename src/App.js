import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Project/login";
import Register from "./Project/register";
import Calender from "./Project/calender";
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import Templatee from "./Project/Templatee";
import Home from "./Project/Home";
import StuudentCRUD from "./Project/StudentCRUD";
import FacultyCRUD from "./Project/FacultyCRUD";
import Dashboard from "./Project/Dashboard";
import Announce from "./Project/Announce";
import Search from "./Project/Search";
import MyProfile from "./Project/MyProfile";
function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  return (
      // {/* <div className="App">
      //   {currentForm === "login" ? (
      //     <Login onFormSwitch={toggleForm} />
      //   ) : (
      //     <Login onFormSwitch={toggleForm} />
      //   )}
      // </div> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<MyProfile/>} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/Faculty" element={<FacultyCRUD />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Students" element={<StuudentCRUD />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
      // <FileUpload/>

      
    //   <div className="App">
     
    //   <div className="container">
      //  <Templatee/> 
    //   <Dashboard/>
    //   <Templatee/>
      // <Calender/>
    //   <StudentCRUD/>
    //   <FacultyCRUD/>
    //   </div>
    // </div>

    

      
  );
}

export default App;
