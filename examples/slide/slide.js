import Bilza from "../../src/Bilza.js";
import Text from "../../src/components/text/text.js";
import Para from "../../src/components/para/para.js";

let bil = new Bilza("bilza",600,300,95);
let audio = new Audio('./tips.mp3');


bil.add.bgShapes();
// let jt = bil.add.textTempl.jt(0,60,"Jumbo Tron","yellow","green");
// let h1 = bil.add.textTempl.h1(0,60,"Heading One","yellow","black");
// let li = bil.add.textTempl.li(0,60,"This is li","black","yellow");

let p = new Para(0,100,"abc");
p.d.y = 30;
p.d.x = 10;
p.d.border = 1;
p.d.colorBorder = "blue";
p.shadowsOn();
// p.d.fontColor = "white";
bil.insert(p);
p.addLine("Water gives you a healthy start because it helps in");
p.addLine("proper circulation of nutrients and flush out toxins");


////////////////////////////////////////////////////////////////////

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
  
// bil.draw();