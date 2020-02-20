import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row,Col, Form,Button } from 'react-bootstrap';
//import {setUserFieldValue, login} from '../state/user'
import Cookies from 'universal-cookie';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
            
            cookies.set('token', data.message, { path: '/' });
         
          })
          this.props.userHasAuthenticated(true);
          this.props.history.push('/path')
        event.preventDefault();
      }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={5}>
            <Form noValidate   onSubmit={this.handleSubmit} >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form></Col>
          <Col sm={7}></Col>
        </Row>
      </Container>
      
    );
  }
}
 
  export default LoginForm