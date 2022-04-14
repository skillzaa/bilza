import {CompFactory, DrawLayer,IComponent} from "../Bilza.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";

export default class Bilza extends BilzaCanvasSetup {
//==================PUBLIC API
public add :CompFactory; 
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",timeEnd=60,canvasWidth=800,canvasHeight=350){
//internal seq of args is different from enternal seq of args    
super(canvasId,canvasWidth,canvasHeight,timeEnd);
this.background = new Background();
this.add = new CompFactory(this.comps);
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
this.pack.drawBackground(this.background.color); //fornow         
this.drawByDrawLayer(msDelta,DrawLayer.BackGround,this.pack);
this.drawByDrawLayer(msDelta,DrawLayer.ForeGround,this.pack);
this.drawByDrawLayer(msDelta,DrawLayer.MiddleGround,this.pack);
return true;
}
//----seperate class
chqCollision(x :number, y :number):IComponent | null{
   return null;
}

mergeClip(clip :IComponent[]):boolean{
    for (let i = 0; i < clip.length; i++) {
        this.comps.push(clip[i]);
    }
return true;
}
dynamicCanvas(widthInPercent :number=100,heightInPercent :number=100):boolean{
let wd = window.innerWidth /100 * widthInPercent;
let ht = window.innerHeight /100 * heightInPercent;
if (wd < 100 || ht < 100){
    return false;
}else {
    this.setCanvas(wd,ht);  
return true;
}
}
}//ends