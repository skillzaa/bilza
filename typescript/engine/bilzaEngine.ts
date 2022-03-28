import {CompFactory, DrawLayer,IComponent,Pack} from "../Bilza.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./bilzaCanvasSetup.js";

export default class Bilza extends BilzaCanvasSetup {
//==================PUBLIC API
public add :CompFactory; 
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilzaa2d",canvasWidth=800,canvasHeight=350,timeEnd=Number.MAX_SAFE_INTEGER){
super(canvasId="bilzaa2d",canvasWidth=800,canvasHeight=350,timeEnd=Number.MAX_SAFE_INTEGER);
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
}//ends