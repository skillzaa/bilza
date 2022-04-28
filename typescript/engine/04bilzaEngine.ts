import {DrawLayer,IComponent} from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "./background.js";
import Fn from "../functions/fn.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
export default class Bilza extends BilzaCanvasSetup {
//==================PUBLIC API
public add :CompFactory; 
public background :Background;
public util :Fn;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",canvasWidth=800,canvasHeight=350,timeEnd=60){
//internal seq of args is different from enternal seq of args    
super(canvasId,canvasWidth,canvasHeight,timeEnd);
this.background = new Background();
this.add = new CompFactory(this.comps);
this.util = new Fn();
} 

//-- this is not in bilzaTimer due to this.draw
start() :boolean{
if (this.timeStart !== null){return false;}
else {
    this.stop();
    this.timeStart = new Date().getTime();
        this.interval = window.setInterval(()=>{
        this.draw();
        },this.msPerFrame);
        return true;
}    
}

////////////////////////////////////// 
draw():boolean{
 if(this.pack == null){
throw new Error("bilzaa is not initialized");}   
    // this.frame += 1; /// use later if req internally
let msDelta = this.getMsDelta();
    //stop if completed
if(msDelta >= this.timeEnd){ this.stop();}     
this.pack.clearCanvas();          
//--keep the draw sequence : bg-bg-middle-foreground
this.pack.drawBackground(this.background.color); //fornow         
this.drawByDrawLayer(msDelta,DrawLayer.BackGround,this.pack);
this.drawByDrawLayer(msDelta,DrawLayer.MiddleGround,this.pack);
this.drawByDrawLayer(msDelta,DrawLayer.ForeGround,this.pack);
///-----connection with outer world
this.drawEvent(msDelta);
return true;
}
drawEvent(msDelta :number):boolean{
// console.log("drawEventn");
    return true;
}

mergeClip(clip :IComponent[]):boolean{
    for (let i = 0; i < clip.length; i++) {
        this.comps.push(clip[i]);
    }
return true;
}
dynamicCanvas(widthInPercent :number=100,heightInPercent :number=100):boolean{
let wd = window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
let ht = window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
if (wd < 100 || ht < 100){ //--dont make too small canvas
    return false;
}else {
    this.setCanvas(wd,ht);  
return true;
}
}
}//ends