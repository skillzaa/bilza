import {DrawLayer,IComponent,Pack} from "../Bilza.js";
import Background from "../components/background/background.js";
//----------functions
import getCanvasElement from "./getCanvasElement.js";
import StopWatch from "./stopWatch.js";
//-------------------------------------------
import Settings from "./settings.js";
import Comps from "./comps.js";
import Duration from "./duration.js";
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
export default class Bilza {
//==================PUBLIC API
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
private set :Settings; 
private duration:Duration;
private comps:Comps;//--009
private stopWatch:StopWatch;
protected pack:Pack; //---later
protected canvas :HTMLCanvasElement;

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",canvasWidth=800,canvasHeight :null|number=null){
// this.comps = [];    //--009
this.comps = new Comps();
this.duration = new Duration();
this.stopWatch  = new StopWatch();
this.set = new Settings(); ///EasyPeasyyyyyy...!!!
//internal seq of args is different from enternal seq of args    
this.canvas =  getCanvasElement(canvasId);
this.pack = new Pack(this.canvas,canvasWidth,canvasHeight);
this.background = new Background();
//---Experimental report mapped to PAck
this.pack.report = (this.report.bind(this));
} 
public drawInit(){
    this.comps.initAll(this.pack);
    this.draw();
}
draw():boolean{
 if(this.pack == null){
throw new Error("bilzaa is not initialized");}   
let msDelta = this.stopWatch.getMsDelta();
    //stop if completed
if(msDelta >= this.duration.len(true)){ this.stopWatch.stop();}     
this.pack.clearCanvas();          
//--keep the draw sequence : bg-bg-middle-foreground
this.background.draw(this.pack); //fornow         

this.comps.drawByDrawLayer(msDelta,DrawLayer.BackGround,this.pack);
this.comps.drawByDrawLayer(msDelta,DrawLayer.MiddleGround,this.pack);
this.comps.drawByDrawLayer(msDelta,DrawLayer.ForeGround,this.pack);
///-----connection with outer world
this.drawEvent(msDelta);
return true;
}
drawEvent(msDelta :number):boolean{
// console.log("drawEventn");
    return true;
}
dynamicCanvas(widthInPercent:number = 95,heightInPercent :number | null=null):boolean{
let wd = this.pack.dynCanvasWidth(widthInPercent);
this.setCanvas(wd,this.pack.dynCanvasHeight(wd,heightInPercent));  
return true;
}
insert(comp:IComponent):IComponent{
this.duration.adjectWhileInsert(comp);
return this.comps.push(comp);
}  
start(){
    this.stopWatch.start(this.draw.bind(this));
}
///---MAPPED fUNCTION jusT eXPORTED--DO GO BELOW
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
setCanvas(width :number = 800,height :number|null = null){
this.pack = new Pack(this.canvas,width,height);
this.comps.resizeAll(this.pack.canvasWidth(),this.pack.canvasHeight());
}
getCanvasHeight():number{
return this.pack.canvasHeight();    
}
getCanvasWidth():number{
return this.pack.canvasWidth();    
}


///////////////////////////Report
report() :number{
let totalComponents = this.comps.len();
return totalComponents;    
}
}//ends
