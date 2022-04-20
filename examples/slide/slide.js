import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",800,300,96);
let audio = new Audio('./tips.mp3');

///////////////////////////////////
bil.dynamicCanvas(90,90);
bil.background.color = "#e0e0f9";
let r = bil.add.bgShapes();
/////////////////////////
let jt = bil.add.textTempl.jt("Jumbo Tron","blue",0,3);
// let jt = bil.add.textTempl.h1("Jumbo Tron","blue",0,10);
/////////////////////////
let slide = bil.add.slideHL(1,25,"The is Slide # 1","#008000"); 
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

let counter = document.getElementById("counter");
// counter.style.padding = 55;
let rng = document.getElementById("range");
rng.style.width = window.innerWidth;  
// rng.attr("max", bil.getTimeEnd())
rng.addEventListener("change",function(e){
    // console.log( "rr",rng.value);
  bil.setMsDelta(rng.value);    
  // sound.stop(soundId);
  // sound.seek( Math.ceil(msDelta/1000),soundId);
  // sound.seek(50,soundId);
  // soundId = sound.play();

});  
////start button
let start = document.getElementById("start");
start.addEventListener("click",function(e){
    bil.start();
    audio.play();  
});  

////stop button
let stop = document.getElementById("stop");
stop.addEventListener("click",function(e){
  // audio.stop();  
  audio.pause();
  audio.currentTime = 0;
  
  bil.stop();
  rng.value = 0;
  counter.innerHTML = 0;
});  

///////////////Draw Event
bil.drawEvent = (msDelta) => {
  rng.value = msDelta;    
  counter.innerHTML = Math.ceil(msDelta/1000); 
  // audio.pause();
  audio.currentTime = Math.ceil(msDelta/1000);
  
  return true;
  }
/////////////////////

//--Howl
// let sound = new Howl({
//   src: ['./tips.mp3'],
//   autoplay: false,
//   html5: false,
//   preload :true,
//   onload: function() {
//     var totalSoundDuration = sound.duration();
//   },
//   onplay: function(getSoundId) {
//     // sound.stop();
//     sound.seek(0);
//     bil.start();
//     sound.start();
//     // console.log("play");
// },
// });  
  
bil.draw();