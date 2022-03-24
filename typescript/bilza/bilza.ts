import {CompFactory, DrawLayer,IDrawable,Pack} from "../index.js";
import Background from "./background.js";
import CompArrayObj from "./compsArrayObj.js";

export default class Bilza extends CompArrayObj {
private pack:Pack; //---later
private interval : NodeJS.Timer | null;
private canvasId :string;
private  msPerFrame :number; //????
private timeStart :number | null; //the size of video-length in milli seconds
private timeEnd :number; //the size of video-length in milli seconds
//==================PUBLIC API
public add :CompFactory; 
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilzaa2d",canvasWidth=800,canvasHeight=350,timeEnd=Number.MAX_SAFE_INTEGER){
super();
this.canvasId = canvasId; 
this.background = new Background();
this.timeStart = null; 
this.timeEnd = timeEnd;
this.interval = null;
this.msPerFrame = 1000;
this.pack = new Pack(canvasWidth,canvasHeight,this.canvasId);
this.add = new CompFactory(this.comps);
} 
setCanvas(width :number = 800,height :number = 400){
this.pack = new Pack(width,height,this.canvasId);
}
getTimeEnd():number{
return this.timeEnd;
}
setTimeEnd(n :number) :number{
this.timeEnd = n;
return this.timeEnd;
}
getCanvasHeight(){
return this.pack.canvasHeight;    
}
getCanvasWidth(){
return this.pack.canvasWidth;    
} 
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

chqCollision(x :number, y :number):IDrawable | null{
   return null;
}

private getMsDelta() :number{
if (this.timeStart ==null){   
    return 0;
} else{
let curTime = new Date().getTime();
return curTime - this.timeStart;
}
}
start() :boolean{
if (this.timeStart !== null){return false;}
else {
    this.stop();
    this.timeStart = new Date().getTime();
        this.interval = setInterval(()=>{
        this.draw();
        },this.msPerFrame);
        return true;
}    
}
stop(){
    this.timeStart = null;
    if (this.interval !== null){
        clearInterval(this.interval);
    }
}
mergeClip(clip :IDrawable[]):boolean{
    for (let i = 0; i < clip.length; i++) {
        this.comps.push(clip[i]);
    }
return true;
}
}//ends