import React from 'react';
import {Divider} from 'antd';
import Cookies from 'universal-cookie';
function Paths() {
   var requestValidator  ;
    const cookies = new Cookies();
    
    fetch('http://localhost:4001/validatetoken/', {   //calling go api
        method: 'POST',
        body: cookies.get('token')!== undefined? cookies.get('token'):''
    }).then(response=>{
        return response.json()
    }).then(data=>{
        
        requestValidator=data.message 
    })
   if (requestValidator=== false ||requestValidator=== undefined )  {
       return (
           <div>
               <h1> you are not authorised  </h1>
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
export default Paths;