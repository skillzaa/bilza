import { CompFactory as cf } from "../bilza.js";
import Scene from "./00scene.js";

export default class MsgSwingRndCircles extends Scene{

content :string;
constructor(startTime :number=0,duration :number=60){

super(startTime,duration);
this.content = "Welcome";
}

init(){

const t = cf.text( this.content, "#ffff00");
//---All the contained comps must have startTime and duration inside the bounds of scene
//---- 
t.setStartTime(this.getStartTime());
t.duration = this.getDuration();

t.width.set(40);
t.paddingLeft.set(5);
t.paddingRight.set(5);
t.paddingTop.set(10);
t.paddingBottom.set(10);
//..........................
t.showBackground.set(true);
t.colorBackground.set("hsl(240,100%,20%)")
t.border.set(20);
t.colorBorder.set("red");
//--------------------------------
t.xAlign = t.XAlignOpt.Mid;
t.yAlign = t.YAlignOpt.Mid;
t.xRotate = t.XAlignOpt.Mid;
t.yRotate = t.YAlignOpt.Top;
t.goto(0,50,50);
//--------------------------------
t.rotation.set(-25);
//--The second arg in oscillate is endTime and not duration
t.rotation.oscillate( this.getStartTime() ,this.getStartTime() + this.getDuration() ,-25,25,0.25);

this.push(t);
///////////////////////////////////////
const g = cf.frameCounter();

g.setStartTime(this.getStartTime() );
g.duration = (this.getDuration());
this.push(g);


const grid  = cf.staticGrid(100,100,"hsl(60,100%,100%)");
grid.setStartTime(this.getStartTime() );
grid.duration = (this.getDuration() );
//----------from base class
this.push(grid);
}
        
}

