import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './Project/login'
import Register from './Project/register'
import 'react-calendar/dist/Calendar.css'
import 'react-toastify/dist/ReactToastify.css'
import StuudentCRUD from './Project/StudentCRUD'
import FacultyCRUD from './Project/FacultyCRUD'
import Dashboard from './Project/Dashboard'
import Announce from './Project/Announce'
import Search from './Project/Search'
import MyProfile from './Project/MyProfile'
function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };
  const [user, setUser] = useState({})
  const setUserHandler = (user) => {
    setUser(user)
  }
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
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<MyProfile user={user} />} />
        <Route path="/gradecard" element={<Announce />} />
        <Route path="/Faculty" element={<FacultyCRUD />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Students" element={<StuudentCRUD />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login setUser={setUserHandler} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
