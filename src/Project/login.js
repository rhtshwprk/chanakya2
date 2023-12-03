import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { details as userDetails } from './data/details'
export const Login = (props) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  function addData() {
    // Get the values from the form
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if (
      userDetails.findIndex(
        (user) => user.email === username && user.password === password
      ) !== -1
    ) {
      // Log the data to ensure it's correct
      console.log('Data to be stored:', {
        username,
        password
      })

      // Create an object with the data
      const userData = {
        username: username,
        password: password
      }

      // Convert the object to JSON and store it in local storage
      localStorage.setItem('userData', JSON.stringify(userData))

      // Log a message to indicate the data has been stored
      console.log('Data stored in local storage.')

      toast('You are Successfully logged in!')

      window.location.replace('Dashboard')
    } else {
      alert('USER NOT FOUND!!')
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
                alt="NITDGP Logo"
                style={{ width: '90%', height: 'auto' }}
                src={
                  'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/NIT_Durgapur_Logo.svg/1200px-NIT_Durgapur_Logo.svg.png'
                }
              />
            </div>

            <div className="secRight">
              <div className="main_wrapper">
                <div className="form">
                  <h4 className="Login">Login</h4>
                  <form
                    method="POST"
                    name="form1"
                    id="form1"
                    action=""
                    className=""
                    size="42">
                    <p>
                      <label htmlFor="username">E-mail</label>

                      <input
                        aria-labelledby="username"
                        name="username"
                        id="username"
                        maxLength="25"
                        type="text"
                        placeholder="name@gmail.com"
                      />
                      <input name="hCheck" id="hCheck" type="hidden" value="" />
                    </p>
                    <p>
                      <br></br>
                      <label htmlFor="password">Password </label>
                      <input
                        aria-labelledby="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        type="password"
                        maxLength="50"
                      />
                    </p>

                    <br></br>
                    <div className="role">
                      <br></br>
                      <br></br>
                      <br></br>
                      <strong>Select your role</strong>&nbsp;&nbsp;
                      <input
                        type="radio"
                        id="html"
                        name="role_radio"
                        value="Student"
                      />
                      <label>Student</label>&nbsp;&nbsp;
                      <input
                        type="radio"
                        id="html1"
                        name="role_radio"
                        value="Teacher"
                      />
                      <label>Teacher</label>
                      <br></br>
                    </div>

                    <div className="button_send">
                      <button type="button" onClick={addData}>
                        {' '}
                        Login{' '}
                      </button>
                    </div>

                    <ToastContainer />

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
  )
}

export default Login
