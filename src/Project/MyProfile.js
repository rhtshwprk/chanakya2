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
          <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width={100} />
          <h3>{user.name ? user.name : ''}</h3>
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>alex@gmail.com</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                <p>0001-213-998761</p>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3>Projects</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="data">
                <h4>Most Viewed</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="social_media">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
