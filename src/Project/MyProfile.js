import React from 'react'
import { details as userList } from './data/details'

const MyProfile = ({ user }) => {
  // const localUser = JSON.parse(localStorage.getItem('userData'))

  return (
    <div>
      <meta charSet="UTF-8" />
      <title>Details</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="wrapper">
        <div className="left">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="user"
            width={100}
          />
          <h3>SHREYAS MISHRA</h3>
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>shreyasmishra@gmail.com</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                <p>+91 90001 10009</p>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3>Academic</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Subjects</h4>
                <p>Yet to be added</p>
              </div>
              <div className="data">
                <h4>CGPA</h4>
                <p>8.85</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
