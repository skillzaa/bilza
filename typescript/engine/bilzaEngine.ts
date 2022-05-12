import {DrawLayer,IComponent,Pack} from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "../components/background/background.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import Text from "../components/text/text.js";
//----------Templates
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
import Comps from "./comps.js";
import Fn from "../functions/fn.js";
import getCanvasElement from "./getCanvasElement.js";

//-------------------------------------------
import Settings from "./settings.js";

export default class Bilza {
//==================PUBLIC API
public set :Settings; 
public add :CompFactory; 
public textTempl :TextTemplWrapper; 
public gridTempl :GridTemplates; 
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
protected comps:Comps; 
public util :Fn;
// insert : (comp:IComponent)=>IComponent;
init : ()=>boolean;
resizeAll : (width :number,height :number)=>boolean;
drawByDrawLayer :(msDelta :number,drawLayer :DrawLayer,pack :Pack)=>boolean;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",canvasWidth=800,canvasHeight :null|number=null){
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
this.comps = new Comps(this.pack);
// this.insert = this.comps.insert.bind(this.comps);
this.init = this.comps.init.bind(this.comps);
this.drawByDrawLayer = this.comps.drawByDrawLayer.bind(this.comps);
this.resizeAll = this.comps.resizeAll.bind(this.comps);
////--Templates
//--I think sending pack to compFacoty is wrong!!!!!??????
this.add = new CompFactory();
this.textTempl = new TextTemplWrapper(this.insert.bind(this));
this.gridTempl = new GridTemplates(this.insert.bind(this));


} 
start() :boolean{
if (this.runningStartTimeTS !== null){return false;}
else {
    this.stop();
    this.init(); //importantay
    this.runningStartTimeTS = new Date().getTime();
        this.interval = window.setInterval(()=>{
        this.draw();
        },this.msPerFrame);
        return true;
}    
}
public drawInit(){
    this.init();
    this.draw();
}
draw():boolean{
    // this.set.fixBugWarn("fix this damn bug");
    
 if(this.pack == null){
throw new Error("bilzaa is not initialized");}   
let msDelta = this.getMsDelta();
    //stop if completed
if(msDelta >= this.duration(true)){ this.stop();}     
this.pack.clearCanvas();          
//--keep the draw sequence : bg-bg-middle-foreground
this.background.draw(this.pack); //fornow         
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
dynamicCanvas(widthInPercent :number = 95,heightInPercent :number | null=null):boolean{
let wd = window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
let ht :number | null = null;
if (heightInPercent !== null){
    let ht = window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
}
    this.setCanvas(wd,ht);  
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

//--private means no complexity in components
private adjectDuration(comp :IComponent):boolean{
let r = false;    

switch (comp.insertType) {
    case comp.insertTypeOptions.AlwaysOn:
    r = true;    
    break;

    case comp.insertTypeOptions.Append:
    //--1 : comp.duration cant be > 0 
    if (comp.duration() < 1) {
        throw new Error("for Insert operation to succeed you need component duration greater than 0");
    }
    //--2 : set comp startTime = bilza.len() now.
    comp.setStartTime(this.duration(false));
    //--3 : Add comp duration to this.duration .
    this.extendDuration(comp.duration());
    r = true;   
    break;

    case comp.insertTypeOptions.Insert:
    //--1 : stop if startTime > bil.duration(false);
        if (comp.getStartTime() >= this.duration(false)){
            throw new Error("to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames");
        }
    //--2 : now check if endTime of comp is larger than the bil or not
    if (comp.getEndTime() <= this.duration(false)){
        //no need to change anything
        r = true;
    }else {
        let overlap = comp.getEndTime() - this.duration(false);
        this.extendDuration(overlap);
        r = true;
    }  
    
        break;

    default:
        break;
}

return r;
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
stop():boolean{
    this.runningStartTimeTS = null;
    if (this.interval !== null){
        clearInterval(this.interval);
    }
return true;    
}
////////////////////////////////////////////////////
setCanvas(width :number = 800,height :number|null = null){
    if (height ==null){
        height = this.util.aspectRatioHeight(width);
    }

this.pack = new Pack(this.canvas,width,height);
//---remove this from here?????
this.resizeAll(this.pack.canvasWidth(),this.pack.canvasHeight());
}
//
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
this.adjectDuration(comp);
//..............................................   
this.comps.compsArray.push(comp);
    return comp;
}
   
////////////////////////////////////////////////////
}//ends
