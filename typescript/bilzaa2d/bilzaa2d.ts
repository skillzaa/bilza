import {DrawLayer,IDrawable,Pack} from "../index.js";
import Background from "./background.js";
import AddFacade from "./addFacade/addFacade.js";
import CompActions from "./component/compActions.js";

export default class Bilzaa2d {
private comps:IDrawable[]; 
private pack:Pack; //---later
private compActions :CompActions; //---later
//---A frame = just the number of draw calls to the main draw fn
// private frame :number; //just use internally
///--this is used for setInterval 
private interval :number;
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

public add :AddFacade; 
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
this.interval = 0;
// this.frame = 0; 
this.msPerFrame = 1000;
// this.setCanvas(canvasWidth,canvasHeight);
this.pack = new Pack(canvasWidth,canvasHeight,this.canvasId);
this.add = new AddFacade(this.comps);
this.compActions = new CompActions(this.comps,this.pack);
} 
setCanvas(width :number = 800,height :number = 400){
this.pack = new Pack(width,height,this.canvasId);
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
this.pack.drawBackground(this.background.color);          
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
   return this.compActions.chqCollision(x,y);
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
    clearInterval(this.interval);
}
}//ends