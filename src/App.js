import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router, Route ,   Switch,Redirect } from "react-router-dom"; 
  import SignUp from './components/pages/signup';
  import Login from "./components/pages/login.component"; 
  import ForgotPassword from './components/pages/forgot.component'
  import ResetPassword from './components/pages/reset-password.component'
  import Home from './components/pages/home'
  import LoginLayout from './components/layout/loginlayout'
  import MainLayout from './components/layout/MainLayout'
  import Dashboard from './components/pages/dashboard';
  import Path from './components/pages/path';
  import Robot from './components/pages/robot'; 
  import LocationMaps from './components/pages/location-maps';
  import AuthError from './components/pages/autherror'
function App() {
  return (
  
  
        <div className="App">         
              <Router> 
                    <Switch>
                              <Route exact  path="/"         render={() => <LoginLayout><Login/></LoginLayout>}  />                                            
                              <Route   path="/login"         render={() => <LoginLayout><Login/></LoginLayout>}  />                                            
                              <Route path="/signup"          render={() => <LoginLayout><SignUp/></LoginLayout>} />
                              <Route path='/ForgotPassword'  render={() => <LoginLayout><ForgotPassword/></LoginLayout>} />                                      
                              <Route path='/reset-password'  render={() => <LoginLayout><ResetPassword/></LoginLayout>} /> 
                   </Switch>     

                              <Route path='/AuthError'       render={() => <AuthError></AuthError> }/> 
                              <Route path="/home"            render={() => <MainLayout><Home/></MainLayout>}  />
                              <Route path="/dashboard"       render={() => <MainLayout><Dashboard/></MainLayout>}  />
                              <Route path="/map"             render={() => <MainLayout><LocationMaps/></MainLayout>}  />
                              <Route path="/path"            render={() => <MainLayout><Path/></MainLayout>}  />
                              <Route path="/robot"           render={() => <MainLayout><Robot/></MainLayout>}  />

                          
            
            </Router>
    </div>
       
  );
}

export default App;
