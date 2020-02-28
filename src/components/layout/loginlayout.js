import React from 'react'
import {  BrowserRouter as Router,   Link, } from "react-router-dom"; 
import '../../App.css';
 
const LoginLayout = (props) => (
    <div>
        
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/login"}>Robot Monitoring System</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/signup"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          
          <div className="auth-wrapper">
            <div className="auth-inner">
            {props.children}
            </div> 
          </div>
 
  

      </div>
    
    
    
)

export default LoginLayout