import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordStrengthBar from 'react-password-strength-bar';
export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', inputValue: ''};
       
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      } 
      
      notify = (data) => { 
      
      toast.success(data, {
        position: toast.POSITION.TOP_CENTER,
        
      });
    }
    notifyerror = (data) =>{
      toast.error(data, {
        position: toast.POSITION.TOP_CENTER,
        
      });
 }
      handleSubmit(event) {
       // alert('A name was submitted: ' + this.state.value);
        var fname = event.target.FirstName.value
        var lname = event.target.LastName.value
        var email = event.target.Email.value
        var password = event.target.Password.value
       
      
        
             fetch('http://localhost:4001/signup/', {   //calling go api
                method: 'POST',
                body: JSON.stringify({
                        'firstName': fname,
                        'lastName': lname,
                        'email': email,
                        'password': password,
                    })
              })
              .then(response=>{
                 
                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]);
              })
              .then(data => {
               
                if(data[0]!=200)
                {
                  this.notifyerror("Error while storing data.")
                  return
                }
                this.notify(data[1].message)
              })
             
            
            event.preventDefault();
          }
    
    render() {
      const { inputValue } = this.state;
        return (
            <div>
                
            <form  onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" id="FirstName" className="form-control" placeholder="First name"   />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" id="LastName" className="form-control" placeholder="Last Name" required/>
                </div>

              

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="Email" className="form-control" placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        id="Password" 
                        className="form-control"  
                        value={inputValue} 
                        placeholder="Enter password"
                        onChange={e => {
                        this.setState({
                          inputValue: e.target.value,
                        });
                        }} 
                        required/>
                    <PasswordStrengthBar
                                  password={inputValue}
                                  minLength={5}
                                  onChangeScore={score => {
                                    console.log(score);
                                  }}
                             />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
              
            </form>
            
                  <ToastContainer />
            </div>
            
        );
    }
}