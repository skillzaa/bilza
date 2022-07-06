// //@tsc-expect-error
// const canvas:HTMLCanvasElement = document.getElementById("bilza");
// console.log("canvas",canvas);
// canvas.width = 800;
// canvas.height = 400;
// const ctx = canvas.getContext('2d');

// //-------------------------------------------------------
// let rotateCounter = 0;
// let x = 0;
// let y = 0;
// let width = 200;
// let height = 200;

// function draw(rotateCounter:number){  
// //--- i will not need this since canvas clear is done by engine
// ctx?.clearRect(0, 0, canvas.width, canvas.height);

// //--Step 01 : save    
// ctx?.save();      
// //--Step 02 :
// ctx?.translate(width , height );   
// //--Step 03 :
// ctx?.rotate(rotateCounter);

// ctx?.fillStyle = "blue";    

// ctx?.fillRect( 0 - (width/2) , 0 - (height/2) , 200 , 200 );
// //--Step 01 : save    
// ctx?.restore();
// }

// setInterval(function(){
// rotateCounter +=1;
//     draw(rotateCounter * Math.PI/180);
// console.log("rotateCounter",rotateCounter);    
// },20);