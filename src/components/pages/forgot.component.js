import React, { Component } from "react"; 
export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
     
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      } 
    
      handleSubmit(event) {
       // alert('A name was submitted: ' + this.state.value);
        var email = event.target.formBasicEmail.value
        
        
             fetch('https://localhost:4001/forgot-password/', {   //calling go api
                method: 'POST',
                body: JSON.stringify({
                        'email': email,
                     
                    })
              }).then(response=>{
                return response.json()
              }).then(data=>{
               // alert("Reset Password "+data.message)
               window.open(data.message)
              })
             
            event.preventDefault();
          }
    
    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                
                <h3>Recover Password</h3>
 
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id= "formBasicEmail" className="form-control" placeholder="Enter email" autocomplete="off"  required/>
                </div>

           

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
        );
    }
}