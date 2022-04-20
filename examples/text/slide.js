import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",800,300,60);
bil.dynamicCanvas(90,90);
bil.background.color = "#e0e0f9";
let c = bil.add.counter();
c.d.y = 300;2
let r = bil.add.bgShapes();
/////////////////////////
let slide = bil.add.slideHL("The is Slide # 1",5,25); 
slide.addItem("The fist item which is displayed",true,5);
slide.addItem("222 2222 2222 2222",true,10);
slide.addItem("Max security is required here",true,15);
///////////////////////////////////////////////////////////
/////////////////////////
let slide02 = bil.add.slideHL("The is Slide # Two",30,55); 
slide02.addItem("Items are random and has no sequence",true,5);
slide02.addItem("The store is locked but not secured",true,10);
slide02.addItem("All the items are for sale",true,15);
///////////////////////////////////////////////////////////
let rng = document.getElementById("range");
rng.style.width = window.innerWidth;  
rng.addEventListener("change",function(e){
    // console.log( "rr",rng.value);
    bil.setMsDelta(rng.value);
});  
let start = document.getElementById("start");
start.addEventListener("click",function(e){
    bil.stop();
    bil.start();
});  

/////////////////////
bil.start();


