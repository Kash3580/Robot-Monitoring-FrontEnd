import React,{Component} from 'react';
import {Divider} from 'antd';
import Cookies from 'universal-cookie';


class Paths extends Component {
    
    constructor() {
      super();
      this.state = { requestValidator:false};
    }
    async componentDidMount() {
       
        const cookies = new Cookies();
        
         var response=await  fetch('https://localhost:4001/validatetoken/', {   //calling go api
            method: 'POST',
            body:JSON.stringify({
                'token':   cookies.get('token')!== undefined? cookies.get('token'):'',
                'pagename': "path",            
            })
          });
        const json = await response.json();
        this.setState({  requestValidator:json.message })
    }
    render() {   
        var data='Opps!! You are not authorised'
            if (this.state.requestValidator=== false ||this.state.requestValidator=== undefined )  {
              
                return (
                    <div className="error">
                        <p> {data} </p>
                    </div>
                );
            }  
            return (
                <div>
                    <h4>Paths</h4>
                    <Divider></Divider>
                </div>
            );

    }
}
 
export default Paths;