import Bilza from "../../src/Bilza.js";
import Text from "../../src/components/text/text.js";
import Para from "../../src/components/para/para.js";
import SlideHP from "../../src/components/slideHP/slideHP.js";
let bil = new Bilza("bilza",600,300,95);
let audio = new Audio('./tips.mp3');

bil.add.bgShapes();

////////// Starting 
let intro  = bil.add.textTempl.jt(0,11,"5 Tips to Start Your Day in a Healthy Way","green");
intro.d.widthPercent = 95;
intro.d.heightPercent = 60;
///////////////////////////slide 1
let slide = new SlideHP(12,25,"Start With Water","green");
bil.insert(slide);
slide.addLine("Water gives you a healthy start beacuase it helps in");
slide.addLine("proper circulation of nutrients and flush out toxins");

///////////////////////////slide 2
let slide02 = new SlideHP(25,43,"Breakfast at the Right Time","green");
bil.insert(slide02);
slide02.addLine("Have breakfast with in first hour of waking up");
slide02.addLine("Start with vegitable juice and follow up on egg or sprout");
///////////////////////////slide 3
let slide03 = new SlideHP(43,57,"Exercise Regularly","green");
bil.insert(slide03);
slide03.addLine("Workout for atleast 15 minutes in the morning");
slide03.addLine("You can do jogging, planks, squats or Suria Namaskar");
///////////////////////////slide 4
let slide04 = new SlideHP(57,70,"Eat Balanced Meal","green");
bil.insert(slide04);
slide04.addLine("Never skip any food group like carbs or fats");
slide04.addLine("No carb dies may not work");
///////////////////////////slide 5
let slide05 = new SlideHP(71,95,"Healthy Snacks","green");
bil.insert(slide05);
slide05.addLine("Nuts and Seeds are great for snacking between meals");
slide05.addLine("They provide fiber,fats and vitimins");

///extro
let extro  = bil.add.textTempl.jt(90,96,"Presentation created with bilza.js");

bil.draw();
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