import React, { Component } from "react";
import Cookies from 'universal-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {value: '',
         isFound :true
    }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      } 
          
      notify = (data) => { 
      
        toast.error(data, {
          position: toast.POSITION.TOP_CENTER,
         
        });
   }
      handleSubmit(event) {
       // alert('A name was submitted: ' + this.state.value);
        var email = event.target.formBasicEmail.value
        var password = event.target.formBasicPassword.value
        const cookies = new Cookies();
        
             fetch('http://localhost:4001/user/', {   //calling go api
                method: 'POST',
                body: JSON.stringify({
                        'email': email,
                        'password': password,
                    })
              }).then(response=>{
                return response.json()
              }).then(data=>{
                if(data.message!=="Not Found"){
                    cookies.set('token', data.message, { path: '/' });             
                    this.setState({
                        isFound:true 
                    })
                    this.props.history.push('/home');
                }
                else{
                    this.notify("You have entered wrong username and password")
                    this.setState({
                        isFound:false 
                    })
                }

                
              })
          
            event.preventDefault();
          }
    
    render() {
        const error = {
            color: "red",           
             fontSize:"10px",
            fontFamily: "Arial"
          };
        return (
            
            <form  onSubmit={this.handleSubmit}>

                <ToastContainer />
                <h3>Sign In</h3>
              {/* <p style={error}> {this.state.isFound?'':'User not found'}</p>   */}
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id= "formBasicEmail" className="form-control"  placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="formBasicPassword" className="form-control"  placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/ForgotPassword">password?</a>
                </p>
            </form>
           
        
             
        );
    }
}