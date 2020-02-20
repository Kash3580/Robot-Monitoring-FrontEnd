import React, { Component } from "react"; 
import './page.css';
import PasswordStrengthBar from 'react-password-strength-bar';
export default class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', inputValue: '',};
     
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      } 
    
      handleSubmit(event) {
       // alert('A name was submitted: ' + this.state.value);
        var Password = event.target.Password.value
        var cPassword = event.target.confirmPassword.value
        if (Password!==cPassword){
          event.target.Password.className='control-error'
          event.target.confirmPassword.className='control-error'
          event.target.Password.value=''
          event.target.confirmPassword.value=''
          return
        }
        
             fetch('http://localhost:4001/newpassword/', {   
              method: 'POST',
                body: JSON.stringify({
                        'password': Password,
                     
                    })
              }).then(response=>{
                return response.json()
              }).then(data=>{
              alert("Reset Password "+data.message)
               
              })
             
            event.preventDefault();
          }
    
    render() {
      const { inputValue } = this.state;
        return (
            <form  onSubmit={this.handleSubmit} autocomplete="off">
                
                <h3>Reset Your Password</h3>
 
                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" 
                           id= "Password"
                           className="form-control"
                           placeholder="Password"
                           value={inputValue}
                           autocomplete="off"
                           onChange={e => {
                                            this.setState({
                                              inputValue: e.target.value,
                                            });
                           }} required/>
                           <PasswordStrengthBar
                                  password={inputValue}
                                  minLength={5}
                                  onChangeScore={score => {
                                    console.log(score);
                                  }}
                             />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" id= "confirmPassword" className="form-control" placeholder="Confirm Password" autocomplete="off" required />
                </div>

           

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
        );
    }
}