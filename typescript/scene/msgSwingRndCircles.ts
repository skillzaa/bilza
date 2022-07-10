import { IComponent,CompFactory as cf } from "../bilza.js";
import IScene from "./IScene.js";

export default class MsgSwingRndCircles implements IScene{

content :string;
startTime :number;
duration :number;    
comps :IComponent[];
constructor(startTime :number=0,duration :number=60){
this.content = "Demo Content";
this.startTime = startTime;
this.duration = duration;
this.comps = [];
}

getComps():IComponent[]{

const t = cf.text( this.content, "#ffff00");
//---All the contained comps must have startTime and duration in relation to this.starTime and this.duration
//---- 
t.setStartTime(this.startTime);
t.duration = this.duration;

t.width.set(40);
t.paddingLeft.setInitValue(5);
t.paddingRight.setInitValue(5);
t.paddingTop.setInitValue(10);
t.paddingBottom.setInitValue(10);
//..........................
t.showBackground.set(true);
t.colorBackground.set("#000000")
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
t.rotation.oscillate( this.startTime ,this.startTime + this.duration ,-25,25,0.25);

this.comps.push(t);

///////////////////////////////////////

// const g = cf.grid();
const g = cf.frameCounter();
// bil.insert.alwaysOn(counter);

g.setStartTime(this.startTime);
g.duration = (this.duration);
this.comps.push(g);


const grid  = cf.staticGrid(100,100,"red");
grid.setStartTime(this.startTime);
grid.duration = (this.duration);

this.comps.push(grid);

return this.comps;
}
getEndTime():number{
return this.startTime + this.duration;
}        
}

