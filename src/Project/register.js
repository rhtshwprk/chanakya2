import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const showAlert = () => {
        toast("Successfully Registered!");
    }



  return (
    <>
    <div className="container2">
      <div className="sectionWrap">
        <div className="midWrap">
          <div className="secLeft">
            <img src="https://img.freepik.com/premium-photo/girl-works-laptop-workplace_324489-1044.jpg" />
          </div>

          <div className="secRight">
            <div className="main_wrapper">
              <div className="form">
                <h4 className="Login">Register</h4>
                <form
                  method="POST"
                  name="form1"
                  id="form1"
                  action=""
                  className=""
                  size="42"
                >
                  <p>
                    <br></br><label htmlFor="name"> Full Name </label>
                    {/* <input aria-labelledby="name" name="name" id="name" maxLength="25" type="text" /> --> */}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      maxLength="25"
                      required
                    />
                    <input name="namee" id="namee" type="hidden" value="" />
                  </p>
                  <p>
                    <br></br><label htmlFor="username"> E-mail </label>
                    <input
                      aria-labelledby="username"
                      name="username"
                      id="username"
                      maxLength="25"
                      type="text"
                      placeholder = "name@gmail.com" required
                    />
                    <input name="hCheck" id="hCheck" type="hidden" value="" />
                  </p>
                  <p>
                    <br></br><label htmlFor="password"> Password </label>
                    <input
                      aria-labelledby="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      type="password"
                      maxLength="50"
                    />
                  </p>

                    <div className="role">
                    <br></br><strong>Select your role</strong>&nbsp;&nbsp;                                                        
                    <input type="radio" id="html" name="role_radio" value="Student"/>
                    <label>Student</label>
                    <input type="radio" id="html1" name="role_radio" value="Teacher"/>
                    <label>Teacher</label><br></br>
                    </div>



                  <div className="button_send">
                    <button type="button" onClick={showAlert}>
                      {" "}
                      Register{" "}
                    </button>
                  </div>
                  <ToastContainer/>
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

export default Register;
