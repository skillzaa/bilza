import {DrawLayer,IComponent,Pack} from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "../components/background/background.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import Text from "../components/text/text.js";
//----------Templates
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
// import Comps from "./comps.js";
import Fn from "../functions/fn.js";
import getCanvasElement from "./getCanvasElement.js";
//----------functions
import adjectDurationWhileInsert from "./adjectDurationWhileInsert.js";
import drawByDrawLayer from "./drawByDrawLayer.js";
import initAll from "./initAll.js";
import resizeAll from "./resizeAll.js";
import StopWatch from "./stopWatch.js";
import dynamicCanvasHtWd from "./dynamicCanvasHtWd.js";
import DWidthHeight from "./DWidthHeight.js";
//-------------------------------------------
import Settings from "./settings.js";
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
export default class Bilza {
//==================PUBLIC API
public set :Settings; 
public add :CompFactory; 
public textTempl :TextTemplWrapper; 
public gridTempl :GridTemplates; 
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//12-5-2022  keep comps private
public comps:IComponent[];
private stopWatch:StopWatch;
//11-5-2022 the setInterval handle 
private interval : number | null; 
//??
private  msPerFrame :number; //????
//--change to runningStartTime
private runningStartTimeTS :number | null; //when we start video
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
this.util = new Fn();  
//i dont need to save canvas id for later???
// this.canvasId = canvasId;
this.canvas =  getCanvasElement(canvasId);

this.pack = new Pack(this.canvas,canvasWidth,canvasHeight);
/////
this.background = new Background();
///////////////
//--11-may-2022 i think runningStartTimeTS is the timestamp when we start the engine. it should be called runningStartTime. Because the startTime of bilza engine is always 0 so no need to have a variable called runningStartTimeTS.

this.runningStartTimeTS = null; //--this is for stopWatch ??!!!!
//--11-5-2022 -the default vlaue of _pvt_duration_val may change later
this._pvt_duration_val = 0; //duration in seconds-dafault=0;
this.interval = null; //to save setInterval handler
// this.msPerFrame = 1000; // 1 sec
this.msPerFrame = 100; //make it 100 ms
//////////////////----comps
////--Templates
//--I think sending pack to compFacoty is wrong!!!!!??????
this.add = new CompFactory();
this.textTempl = new TextTemplWrapper(this.insert.bind(this));
this.gridTempl = new GridTemplates(this.insert.bind(this));


} 
public drawInit(){
    initAll(this.comps,this.pack);
    this.draw();
}
draw():boolean{
    // this.set.fixBugWarn("fix this damn bug");
    
 if(this.pack == null){
throw new Error("bilzaa is not initialized");}   
let msDelta = this.getMsDelta();
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
protected getMsDelta() :number{
if (this.runningStartTimeTS ==null){   
    return 0;
} else{
let curTime = new Date().getTime();
return curTime - this.runningStartTimeTS;
}
}
public setMsDelta(n :number) :number{
if (this.runningStartTimeTS ==null){ return 0;}//error bilza not running
if (n > this.duration() || n < 0){return 0;}//0 = this.runningStartTimeTS
this.runningStartTimeTS = new Date().getTime() - n;
return this.runningStartTimeTS;
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
////////////////////////////////////////////////////
}//ends
