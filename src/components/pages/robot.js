import React from 'react';
import rdata from '../services/realtime-response';
import Cookies from 'universal-cookie';
 
class Dashboard extends React.Component {
	state = {requestValidator:false,
		robot: {
			id: '0', x: '0', y: '0', xyPosition: 'False', btry: 'B', S: 'S', Brk: 'Brk', T: 'T',
			id2: '0', x2: '0', y2: '0', xyPosition2: 'False', btry2: 'B', S2: 'S', Brk2: 'Brk', T2: 'T',
			id3: '0', x3: '0', y3: '0', xyPosition3: 'False', btry3: 'B', S3: 'S', Brk3: 'Brk', T3: 'T',
			id4: '0', x4: '0', y4: '0', xyPosition4: 'False', btry4: 'B', S4: 'S', Brk4: 'Brk', T4: 'T',
			id5: '0', x5: '0', y5: '0', xyPosition5: 'False', btry5: 'B', S5: 'S', Brk5: 'Brk', T5: 'T'
		}
	};
	constructor(props) {
		super(props);
		let flag=true;
	    rdata((err, data) => { 
					var  obj =   localStorage.getItem('datapoint')|| 'null'  ;
					   if(obj  && obj !== 'null' && obj !== 'undefined' && flag===true ){
							 //	alert(JSON.parse(obj));
								this.setState(JSON.parse(obj));
								localStorage.clear();
								flag=false
							}
							else{
								this.setState(data);
								localStorage.setItem('datapoint',   JSON.stringify(data) );
							}
							
					}); 	 
		
		}

  
	  async componentDidMount() {
       
        const cookies = new Cookies();
        
         var response=await  fetch('https://localhost:4001/validatetoken/', {   //calling go api
            method: 'POST',
            body:JSON.stringify({
                'token':   cookies.get('token')!== undefined? cookies.get('token'):'',
                'pagename': "robot",            
            }) 
            
          
        });
		const json = await response.json();
	 
		this.setState({  requestValidator:json.message })
		 
		
    }
	render() {
		if (this.state.requestValidator=== false ||this.state.requestValidator=== undefined )  {
            return (
                <div className="error">
                    <p> Opps!! You are not authorised  </p>
                 </div>
            );
		}  
		else{
			
	
		
		let xLocation = '0'
		let yLocation = '0'
		let robotid = 'ID'
		let battery = 'B'
		let xPosition = 'X'
		let yPosition = 'Y'
		let S = 'S'
		let Brk = 'Brk'
		let T = 'T'

		let xLocation2 = '0'
		let yLocation2 = '0'
		let robotid2 = 'ID'
		let battery2 = 'B'
		let xPosition2 = 'X'
		let yPosition2 = 'Y'
		let S2 = 'S'
		let Brk2 = 'Brk'
		let T2 = 'T'

		let xLocation3 = '0'
		let yLocation3 = '0'
		let robotid3 = 'ID'
		let battery3 = 'B'
		let xPosition3 = 'X'
		let yPosition3 = 'Y'
		let S3 = 'S'
		let Brk3 = 'Brk'
		let T3 = 'T'

		let xLocation4 = '0'
		let yLocation4 = '0'
		let robotid4 = 'ID'
		let battery4 = 'B'
		let xPosition4 = 'X'
		let yPosition4 = 'Y'
		let S4 = 'S'
		let Brk4 = 'Brk'
		let T4 = 'T'

		let xLocation5 = '0'
		let yLocation5 = '0'
		let robotid5 = 'ID'
		let battery5 = 'B'
		let xPosition5 = 'X'
		let yPosition5 = 'Y'
		let S5 = 'S'
		let Brk5 = 'Brk'
		let T5 = 'T'

		robotid = this.state.id;
		battery = this.state.btry;
		xLocation = this.state.x;
		yLocation = this.state.y;
		xPosition = this.state.x;
		yPosition = this.state.y;
		S = this.state.S;
		Brk = this.state.Brk;
		T = this.state.T;

		robotid2 = this.state.id2;
		battery2 = this.state.btry2;
		xLocation2 = this.state.x2;
		yLocation2 = this.state.y2;
		xPosition2 = this.state.x2;
		yPosition2 = this.state.y2;
		S2 = this.state.S2;
		Brk2 = this.state.Brk2;
		T2 = this.state.T2;

		robotid3 = this.state.id3;
		battery3 = this.state.btry3;
		xLocation3 = this.state.x3;
		yLocation3 = this.state.y3;
		xPosition3 = this.state.x3;
		yPosition3 = this.state.y3;
		S3 = this.state.S3;
		Brk3 = this.state.Brk3;
		T3 = this.state.T3;

		robotid4 = this.state.id4;
		battery4 = this.state.btry4;
		xLocation4 = this.state.x4;
		yLocation4 = this.state.y4;
		xPosition4 = this.state.x4;
		yPosition4 = this.state.y4;
		S4 = this.state.S4;
		Brk4 = this.state.Brk4;
		T4 = this.state.T4;

		robotid5 = this.state.id5;
		battery5 = this.state.btry5;
		xLocation5 = this.state.x5;
		yLocation5 = this.state.y5;
		xPosition5 = this.state.x5;
		yPosition5 = this.state.y5;
		S5 = this.state.S2;
		Brk5 = this.state.Brk2;
		T5 = this.state.T2;

		if (!this.state.id) {
			robotid = 'ID'
			xLocation = '11';
			yLocation = '11';
			battery = 'B'
			xPosition = 'X'
			yPosition = 'Y'
			S = 'S'
			Brk = 'Brk'
			T = 'T'
			robotid2 = 'ID'
			xLocation2 = '599';
			yLocation2 = '589';
			battery2 = 'B'
			xPosition2 = 'X'
			yPosition2 = 'Y'
			S2 = 'S'
			Brk2 = 'Brk'
			T2 = 'T'

			robotid3 = 'ID'
			xLocation3 = '203';
			yLocation3 = '511';
			battery3 = 'B'
			xPosition3 = 'X'
			yPosition3 = 'Y'
			S3 = 'S'
			Brk3 = 'Brk'
			T3 = 'T'

			robotid4 = 'ID'
			xLocation4 = '19';
			yLocation4 = '557';
			battery4 = 'B'
			xPosition4 = 'X'
			yPosition4 = 'Y'
			S4 = 'S'
			Brk4 = 'Brk'
			T4 = 'T'

			robotid5 = 'ID'
			xLocation5 = '503';
			yLocation5 = '21';
			battery5 = 'B'
			xPosition5 = 'X'
			yPosition5 = 'Y'
			S5 = 'S'
			Brk5 = 'Brk'
			T5 = 'T'
		}
		return (


			<div>
				<div align="center">
					<h3 style={{ color: "blue" }}><b>ROBOT POSITION MAP</b> </h3>
				</div>
				<svg style={{ border: '3px solid' }} width={850} height={620}>
				 
			 
					<g>
						<rect x={xLocation} y={yLocation} width="20" height="20" fill="red">  </rect>
						<text x={xLocation + '6'} y={yLocation + '14'} fontFamily="Arial" fontSize="15" fill="black"> {robotid},{battery}%, [{parseFloat(xPosition).toFixed(1)},{parseFloat(yPosition).toFixed(1)}],{S},{Brk},{T}</text>
					</g>
					<g>
						<rect x={xLocation2} y={yLocation2} width="20" height="20" fill="green">  </rect>
						<text x={xLocation2 + '6'} y={yLocation2 + '14'} fontFamily="Arial" fontSize="15" fill="black"> {robotid2},{battery2}%, [{parseFloat(xPosition2).toFixed(1)},{parseFloat(yPosition2).toFixed(1)}],{S2},{Brk2},{T2}</text>
					</g>
					<g>
						<rect x={xLocation3} y={yLocation3} width="20" height="20" fill="blue">  </rect>
						<text x={xLocation3 + '6'} y={yLocation3 + '14'} fontFamily="Arial" fontSize="15" fill="black"> {robotid3},{battery3}%, [{parseFloat(xPosition3).toFixed(1)},{parseFloat(yPosition3).toFixed(1)}],{S3},{Brk3},{T3}</text>
					</g>
					<g>
						<rect x={xLocation4} y={yLocation4} width="20" height="20" fill="orange">  </rect>
						<text x={xLocation4 + '6'} y={yLocation4 + '14'} fontFamily="Arial" fontSize="15" fill="black"> {robotid4},{battery4}%, [{parseFloat(xPosition4).toFixed(1)},{parseFloat(yPosition4).toFixed(1)}],{S4},{Brk4},{T4}</text>
					</g>
					<g>
						<rect x={xLocation5} y={yLocation5} width="20" height="20" fill="black">  </rect>
						<text x={xLocation5 + '6'} y={yLocation5 + '14'} fontFamily="Arial" fontSize="15" fill="black"> {robotid5},{battery5}%, [{parseFloat(xPosition5).toFixed(1)},{parseFloat(yPosition5).toFixed(1)}],{S5},{Brk5},{T5}</text>
					</g>
				</svg>
			</div>
		);
	}
		 

	}
}
export default Dashboard;

