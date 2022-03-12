import testClip from "../clips/testClip.js";
import textSlide from "../modules/presentation/textSlide.js";
import Presentation from "../modules/presentation/presentation.js";
let pres = new Presentation();
pres.bilzaa.totalFrames = 40;
pres.addFrameCounter();
pres.addGrid();
//=====================
pres.addClip(textSlide(0,10,"Welcome to Bilzaa2d","This is first line", "This is line number two"));
//--slide 2
pres.addClip(textSlide(11,20,"Salient Features","Salient Features It works on 1 frame per second", "Salient Features This is line number two"));
//--slide 3
pres.addClip(textSlide(21,30,"Slide # 3","Some more details in slide # 3", "This adds more into this"));
//----Final
pres.h1mid("Thanks for watching",30,40,100);
pres.bilzaa.start();
// console.log("pres",pres);