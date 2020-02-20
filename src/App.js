import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; 
import SignUp from './components/pages/signup';
import Login from "./components/pages/login.component"; 
import ForgotPassword from './components/pages/forgot.component'
import ResetPassword from './components/pages/reset-password.component'
import Home from './components/pages/home'
import LoginLayout from './components/layout/loginlayout'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './components/pages/dashboard';

function App() {
  return (<Router>
   
  
 <div className="App">
         <switch>
          <Route path={["/login","/signup","/ForgotPassword","/reset-password"]}>
              <LoginLayout>
                    <Switch>
                      <Route exact path='/' component={Login} />
                      <Route path="/login" component={Login} />
                    
                      <Route path="/signup" component={SignUp} />
                      <Route path='/ForgotPassword' component={ForgotPassword} /> 
                      <Route path='/reset-password' component={ResetPassword} /> 
                    </Switch>
              </LoginLayout>
          </Route>

          <Route path={["/home","/dashboard" ]}>
                   <MainLayout>
                       <Route path="/home" component={Home} />
                       <Route path="/dashboard" component={Dashboard} />
                   </MainLayout>
          </Route>

         </switch>
         
         </div>
       
    </Router>
  );
}

export default App;
