import openSocket from 'socket.io-client';
 
const  socket = openSocket('http://localhost:4000' );
 
 
 
function subscribeToTimer(cb) { 
  socket.on('field', mydata => {
  // console.log(mydata)

   let data = (mydata.toString()).split(',')
  let actData = {}
  actData.id = data[0];
  actData.x = data[1];
  actData.y = data[2];
  actData.xyPosition = data[3];
  actData.btry = data[4];  
  actData.S = data[5];  
  actData.Brk = data[6];
  actData.T = data[7]; 
 
  actData.id2 = data[8];
  actData.x2 = data[9];
  actData.y2 = data[10];
  actData.xyPosition2 = data[11];
  actData.btry2 = data[12];  
  actData.S2 = data[13];  
  actData.Brk2 = data[14];
  actData.T2 = data[15]; 

  actData.id3 = data[16];
  actData.x3 = data[17];
  actData.y3 = data[18];
  actData.xyPosition3 = data[19];
  actData.btry3 = data[20];  
  actData.S3 = data[21];  
  actData.Brk3 = data[22];
  actData.T3 = data[23]; 

  actData.id4 = data[24];
  actData.x4 = data[25];
  actData.y4 = data[26];
  actData.xyPosition4 = data[27];
  actData.btry4 = data[28];  
  actData.S4 = data[29];  
  actData.Brk4 = data[30];
  actData.T4 = data[31]; 

  actData.id5 = data[32];
  actData.x5 = data[33];
  actData.y5 = data[34];
  actData.xyPosition5 = data[35];
  actData.btry5 = data[36];  
  actData.S5 = data[37];  
  actData.Brk5 = data[38];
  actData.T5 = data[39]; 

  	return cb(null, actData)
  });
};

function getEmitData(){

  socket.emit("initial_data");
  
};
function setEmitOff( msg){ 
  socket.off("field", msg);
  
};

export default subscribeToTimer;