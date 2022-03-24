import {CompFactory, DrawLayer,IDrawable,Pack} from "../index.js";
import Background from "./background.js";

export default class Bilza {
private comps:IDrawable[]; 
private pack:Pack; //---later
//---A frame = just the number of draw calls to the main draw fn
// private frame :number; //just use internally
///--this is used for setInterval 
private interval : NodeJS.Timer | null;
//-shd be fn
// private canvasHeight :number;
//-shd be fn
// private canvasWidth :number;
//- private
private canvasId :string;

private  msPerFrame :number; //????

// public readonly msStart =0; //the size of video//noneed
private timeStart :number | null; //the size of video-length in milli seconds
private timeEnd :number; //the size of video-length in milli seconds
//==================PUBLIC API

public add :CompFactory; 
public background :Background;

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilzaa2d",canvasWidth=800,canvasHeight=350,timeEnd=Number.MAX_SAFE_INTEGER){
this.canvasId = canvasId;    
this.comps = [];  
this.background = new Background();
this.timeStart = null; 
this.timeEnd = timeEnd;
// this.canvasWidth = canvasWidth;//result into full screen
// this.canvasHeight = canvasHeight; //result into full screen
this.interval = null;
// this.frame = 0; 
this.msPerFrame = 1000;
// this.setCanvas(canvasWidth,canvasHeight);
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
this.drawByDrawLayer(msDelta,DrawLayer.BackGround);
this.drawByDrawLayer(msDelta,DrawLayer.ForeGround);
this.drawByDrawLayer(msDelta,DrawLayer.MiddleGround);
return true;
}
private drawByDrawLayer(msDelta :number,drawLayer :DrawLayer):boolean{ 
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];       
        //--save ctx
        if (comp.drawLayer == drawLayer ){
            if (comp.getStart() < msDelta && comp.getEnd() > msDelta ){
                this.pack.save();
                comp.update(msDelta,this.pack);
                comp.draw(this.pack);//waoooo no msDelta
                this.pack.restore();
            }   
        }
}
return true;
}

chqCollision(x :number, y :number):IDrawable | null{
   return null;
}
insert(comp:IDrawable):IDrawable{
this.comps.push(comp);
return comp;
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
    // console.log("stopped");
    this.timeStart = null;
    if (this.interval !== null){
        clearInterval(this.interval);
    }
}
mergeClip(clip :IDrawable[]):boolean{
    // this.comps.concat(clip);
    // this.comps = clip;
    for (let i = 0; i < clip.length; i++) {
        this.comps.push(clip[i]);
    }
return true;
}
}//ends