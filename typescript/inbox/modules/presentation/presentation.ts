import {Bilzaa2d,XAlignment,YAlignment,IDrawable} from "../../../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import Text from "../../../components/text-new/text.js.js";
import {GridTemplates} from "../../../components/grid/grid.js";
import FrameCounter from "../../../components/frameCounter/frameCounter.js";

export default class Presentation {
bilzaa = new Bilzaa2d();
constructors(){
this.bilzaa = new Bilzaa2d();
}
// a slide is a clip - in this module (presentation) a clip is slide
addClip(clips:IDrawable[]){
for (let i = 0; i < clips.length; i++) {
    this.bilzaa.add(clips[i]);
}
}
add(f :IDrawable){
   this.bilzaa.add(f);  
}
addGrid(){
    this.bilzaa.add(GridTemplates.dashedGrid());
}
addFrameCounter(){
    let f = new FrameCounter();
    f.x = 90;
    f.y = 95;
    this.bilzaa.add(f);
}
h1mid(content:string,frameStart=1,frameEnd=100,fontSize=80,fontColor :string ="red", underlineColor :string = "green",y=15){
let f = new Text(content);
f.frameStart = frameStart;
f.frameEnd = frameEnd;
f.fontColor = fontColor;
f.underlineColor = underlineColor;
f.x=50;
f.y= y; //incase want to move y
f.fontSize = fontSize;
f.underline = true;
f.underlineColor = "green";
f.underlineWidth = 8;
f.shadow = true;
f.shadowOffsetX = 10;
f.shadowOffsetY = 10;
f.shadowBlur = 8;
f.xAlignment = XAlignment.Mid;
f.yAlignment = YAlignment.Mid;    
this.bilzaa.add(f);
}
lineMid(content:string,frameStart = 1,frameEnd=100,y=45,fontSize=40,color="blue"){

let f = new Text(content);
f.frameStart = frameStart;
f.frameEnd = frameEnd;
f.y = y;
f.x=  50; //mid
f.xAlignment = XAlignment.Mid;
f.fontSize = fontSize;
f.underline = false;
f.overline = false;
f.shadow = false;
f.fontColor = color;
this.bilzaa.add(f);
}
}

let pres = new Presentation();
pres.bilzaa.totalFrames = 15;
pres.addFrameCounter();
pres.addGrid();

pres.h1mid("Welcome to Bilzaa2d",1,8);
pres.lineMid("Bilzaa2d is a javascript framework for creating presentations",3,8,45,40,"red");
pres.lineMid("slides and other educational content",5,8,65,40,"purple");


//--slide 2
pres.h1mid("Salient Features",8,12);
pres.lineMid("It works on 1 frame per second",9,12,45,40,"crimson");
pres.lineMid("Component Base highly extendable",10,12,65,40,"green");






console.log("pres",pres);
pres.bilzaa.start();