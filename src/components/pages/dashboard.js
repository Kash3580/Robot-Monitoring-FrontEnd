import React from 'react';
import '../../App.css';
import {Line,Bar,Pie,Doughnut,Scatter} from 'react-chartjs-2';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row,Col,Alert,Jumbotron } from 'react-bootstrap';
import {Divider} from 'antd';
import Cookies from 'universal-cookie';
 
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'DataPoint',
      backgroundColor: 'rgba(75,192,192,0.4)',
	  borderColor: 'rgba(75,192,192,1)',
	  pointBackgroundColor: 'red',
	  pointBorderColor: 'red',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
  
}
const dataPie = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [30, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
}; 
const dataDoughnut = {
	labels: [
		'Pink',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			' pink',
		'yellowgreen',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'lightpink',
		'lightgreen',
		'#FFCE56'
		]
	}]
};
 
class Home extends React.Component {
	state={requestValidator:false}
    async componentDidMount() {
       
        const cookies = new Cookies();
        
         var response=await  fetch('https://localhost:4001/validatetoken/', {   //calling go api
            method: 'POST',
            body:JSON.stringify({
                'token':   cookies.get('token')!== undefined? cookies.get('token'):'',
                'pagename': "dashboard",            
            }) 
            
          
        });
		const json = await response.json();
	 
		this.setState({  requestValidator:json.message })
		 
		
    }
  render() {
	const robo1 = 66;
	const robo2 = 20;
	const robo3 = 48;
	const robo4 = 89;


	if (this.state.requestValidator=== false ||this.state.requestValidator=== undefined )  {
		return (
			<div className="error">
				<p> Opps!! You are not authorised. </p>
			 </div>
		);
	}  
	else{
		 	return (
					<div>
						<Container>
						
						<Row>
							<Col>   </Col>
							<Col>  
								<CircularProgressbar value={robo1} text={`${robo1}%`}    styles={buildStyles({  pathColor: "lightcoral",  })}/>
								<Alert  variant="light">	 Robot 1 </Alert>
							</Col>
							<Col>   <CircularProgressbar value={robo2} text={`${robo2}%`}  styles={buildStyles({  pathColor: "DarkGreen",  })}/>
								<Alert  variant="light">	 Robot 2 </Alert>
							</Col>
							<Col>   <CircularProgressbar value={robo3} text={`${robo3}%`}  styles={buildStyles({  pathColor: "Purple",  })}/>
							<Alert  variant="light">	 Robot 3 </Alert>
							</Col>
							<Col>   <CircularProgressbar value={robo4} text={`${robo4}%`}  styles={buildStyles({  pathColor: "DarkOrange",  })}/>
							<Alert  variant="light">	 Robot 4 </Alert>
							</Col>
						
							<Col>   </Col>
						</Row>
						</Container>
					<Divider></Divider>
						<Container> 
						<Row>
						 	<Col>
							 <Jumbotron><Pie data={dataPie} /></Jumbotron>
							</Col>
						 
							<Col>
							<Jumbotron>	<Doughnut data={dataDoughnut} /></Jumbotron>
							</Col>
						</Row>
						<Divider></Divider>
						<Row>
							<Col>  
							<Jumbotron>	<Line data={state}
											options={{
														title:{
														display:true,
														text:'Line chart',
														fontSize:20
														},
														legend:{
														display:true,
														position:'right',
														
														},
														backgroundColor:'red'
													}}/>
												 </Jumbotron>	
								</Col>
							<Col>
							<Jumbotron>	<Bar data={state}
											options={{
														title:{
														display:true,
														text:'Bar Chart',
														fontSize:20
														},
														legend:{
														display:true,
														position:'right'
														}
													}}/>	</Jumbotron>
							
							</Col>
							
						</Row>
						 
						</Container>
					
					</div> 
					);
     	}
  }
}

export default Home; 


