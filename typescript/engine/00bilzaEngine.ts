import {DrawLayer,IComponent,Pack} from "../Bilza.js";
import Background from "../components/background/background.js";
// import Comps from "./comps.js";
import Fn from "../functions/fn.js";
//----------functions
import getCanvasElement from "./getCanvasElement.js";
import adjectDurationWhileInsert from "./adjectDurationWhileInsert.js";
import drawByDrawLayer from "./drawByDrawLayer.js";
import initAll from "./initAll.js";
import resizeAll from "./resizeAll.js";
import StopWatch from "./stopWatch.js";
import dynamicCanvasHtWd from "./dynamicCanvasHtWd.js";
//-------------------------------------------
import Settings from "./settings.js";
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
export default class Bilza {
//==================PUBLIC API
public set :Settings; 
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//12-5-2022  keep comps private
public comps:IComponent[];
private stopWatch:StopWatch;
//---just touch this throught public :duration and private: setDuration.
private _pvt_duration_val :number; //the size of video-length in milli seconds 
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
protected pack:Pack; //---later
// protected canvasId :string;
protected canvas :HTMLCanvasElement;
public util :Fn;

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",canvasWidth=800,canvasHeight :null|number=null){
this.comps = [];    
this.stopWatch  = new StopWatch();
this.set = new Settings(); ///EasyPeasyyyyyy...!!!
//internal seq of args is different from enternal seq of args    
this.util = new Fn();///--notpartofengine  
this.canvas =  getCanvasElement(canvasId);

this.pack = new Pack(this.canvas,canvasWidth,canvasHeight);
/////
this.background = new Background();
///////////////
//--11-5-2022 -the default vlaue of _pvt_duration_val may change later
this._pvt_duration_val = 0; //duration in seconds-dafault=0;
//////////////////----comps
} 
public drawInit(){
    initAll(this.comps,this.pack);
    this.draw();
}
draw():boolean{
    // this.set.fixBugWarn("fix this damn bug");
// console.log("draw");    
 if(this.pack == null){
throw new Error("bilzaa is not initialized");}   
let msDelta = this.stopWatch.getMsDelta();
    //stop if completed
if(msDelta >= this.duration(true)){ this.stopWatch.stop();}     
this.pack.clearCanvas();          
//--keep the draw sequence : bg-bg-middle-foreground
this.background.draw(this.pack); //fornow         

drawByDrawLayer(this.comps, msDelta,DrawLayer.BackGround,this.pack);
drawByDrawLayer(this.comps,msDelta,DrawLayer.MiddleGround,this.pack);
drawByDrawLayer(this.comps,msDelta,DrawLayer.ForeGround,this.pack);
///-----connection with outer world
this.drawEvent(msDelta);
return true;
}
drawEvent(msDelta :number):boolean{
// console.log("drawEventn");
    return true;
}
dynamicCanvas(widthInPercent :number = 95,heightInPercent :number | null=null):boolean{
let htwd = dynamicCanvasHtWd(widthInPercent,heightInPercent);   
this.setCanvas(htwd.width,htwd.height);  
return true;
// }
}
////////////////////////////////////////////////////
//Return the dyn calc length of the video (its duration but dura)
public duration(inMilliSeconds :boolean = true):number{
    // if (this.set.debugMode == true){
    //     console.warn("duration by default should not be in ms");
    // }    
    if (inMilliSeconds){
        return (this._pvt_duration_val * 1000);
    }else {
        return (this._pvt_duration_val);
    }
}
//--private
private extendDuration(n :number):number {
this._pvt_duration_val += n;
    return this._pvt_duration_val;
}

////////////////////////////////////////////////////
setCanvas(width :number = 800,height :number|null = null){
    if (height ==null){
        height = this.util.aspectRatioHeight(width);
    }

this.pack = new Pack(this.canvas,width,height);
//---remove this from here?????
resizeAll(this.comps,this.pack.canvasWidth(),this.pack.canvasHeight());
}
getCanvasHeight():number{
return this.pack.canvasHeight();    
}
getCanvasWidth():number{
return this.pack.canvasWidth();    
}
chqCollision(x :number, y :number):IComponent | null{
    return null;
}
insert(comp:IComponent):IComponent{
adjectDurationWhileInsert(comp,this.duration(false),
    this.extendDuration.bind(this));
//..............................................   
this.comps.push(comp);
    return comp;
}  

start(){
    this.stopWatch.start(this.draw.bind(this));
}
////////////////////////////////////////////////////
}//ends
