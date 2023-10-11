import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  function addData() {
    // Get the values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const instituteId = document.getElementById("instituteId").value;
    const sessionId = document.getElementById("sessionId").value;

    if (username == "nutikakumar123@gmail.com" && password == "nutika@123") {
      // Log the data to ensure it's correct
      console.log("Data to be stored:", {
        username,
        password,
        instituteId,
        sessionId,
      });

      // Create an object with the data
      const userData = {
        username: username,
        password: password,
        instituteId: instituteId,
        sessionId: sessionId,
      };

      // Convert the object to JSON and store it in local storage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Log a message to indicate the data has been stored
      console.log("Data stored in local storage.");

      toast("You are Successfully logged in!");

      window.location.replace("Dashboard");

    } else {
      alert("Register Yourself!!");
    }
  }

  return (
    // <div Name="auth-form-container">
    //     <h2>Login</h2>
    //     <form className="login-form" onSubmit={handleSubmit}>
    //         <label htmlFor="email">email</label>
    //         <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
    //         <label htmlFor="password">password</label>
    //         <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
    //         <button type="submit">Log In</button>
    //     </form>
    //     <button Name="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    // </div>

    <>
      <div className="container2">
        <div className="sectionWrap">
          <div className="midWrap">
            <div className="secLeft">
              <img
                src={
                  "https://img.freepik.com/premium-photo/girl-works-laptop-workplace_324489-1044.jpg"
                }
              />
            </div>

            <div className="secRight">
              <div className="main_wrapper">
                <div className="form">
                  <h4 className="Login">Log In</h4>
                  <form
                    method="POST"
                    name="form1"
                    id="form1"
                    action=""
                    className=""
                    size="42"
                  >
                    <p>
                      <label htmlFor="username">E-mail</label>

                      <input
                        aria-labelledby="username"
                        name="username"
                        id="username"
                        maxLength="25"
                        type="text"
                        placeholder = "name@gmail.com" 
  
                      />
                      <input name="hCheck" id="hCheck" type="hidden" value="" />
                    </p>
                    <p>
                      <br></br><label htmlFor="password">Password </label>
                      <input
                        aria-labelledby="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        type="password"
                        maxLength="50"
                        
                      />
                    </p>
                    <div
                      style={{ width: "45%", float: "left", marginRight: "4%" }}
                    >
                      <br></br><label htmlFor="instituteId">Institute </label>
                      <select
                        className="option"
                        name="instituteId"
                        id="instituteId"
                      >
                        <option value="" defaultValue="selected">
                          Select
                        </option>
                        <option value="option1=">Inst A</option>
                        <option value="option2=">Inst B</option>
                      </select>
                    </div>
                    <div
                      style={{ width: "42%", float: "left", marginRight: "4%" }}
                    >
                      <br></br><label htmlFor="sessionId">Session </label>
                      <input
                        type="hidden"
                        readOnly
                        value="21"
                        name="sessionIds"
                        id="sessionIds"
                      ></input>
                      <select
                        className="option"
                        name="sessionId"
                        id="sessionId"
                      >
                        <option value="" defaultValue="selected">
                          Select
                        </option>
                        <option value="1">2005-06</option>
                        <option value="2">2006-07</option>
                        <option value="3">2007-08</option>
                        <option value="4">2008-09</option>
                        <option value="5">2009-10</option>
                        <option value="6">2010-11</option>
                        <option value="7">2011-12</option>
                        <option value="8">2012-13</option>
                        <option value="9">2013-14</option>
                        <option value="10">2014-15</option>
                        <option value="11">2015-16</option>
                        <option value="12">2016-17</option>
                        <option value="13">2017-18</option>
                        <option value="14">2018-19</option>
                        <option value="15">2019-20</option>
                        <option value="16">2020-21</option>
                        <option value="17">2021-22</option>
                        <option value="18">2022-23</option>
                        <option value="19" defaultValue="selected">
                          2023-24
                        </option>
                        <option value="20">2024-25</option>
                      </select>
                    </div>

                    <br></br>
                    <div className="role">
                    <br></br><br></br><br></br><strong>Select your role</strong>&nbsp;&nbsp;                                                        
                    <input type="radio" id="html" name="role_radio" value="Student"/>
                    <label>Student</label>&nbsp;&nbsp;
                    <input type="radio" id="html1" name="role_radio" value="Teacher"/>
                    <label>Teacher</label><br></br>
                    </div>



                    <div className="button_send">
                      <button type="button" onClick={addData}>
                        {" "}
                        Login{" "}
                      </button>
                    </div>

                    <ToastContainer />

                    <div className="register_button">
                      <a href="/register">
                        <button type="button">Register</button>
                      </a>
                      {/* for login change href to '/' */}
                    </div>

                    {/* <div className="fgt_pwd">
                      <a
                        aria-label="Forgot Password"
                        alt="Forgot Password"
                        title="Forgot Password"
                        href=""
                        className="forgot_pwd"
                      >
                        Forgot Password
                      </a>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
