import {DrawLayer,IComponent,Pack} from "../Bilza.js";
import Background from "./background.js";
//----------functions
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
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",screenWidthInPercent=80){
this.pack = new Pack(canvasId,screenWidthInPercent);
this.comps = new Comps();
this.duration = new Duration();
this.stopWatch  = new StopWatch();
this.set = new Settings(); ///EasyPeasyyyyyy...!!!
this.background = new Background();
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
// this.background.draw(this.pack); //fornow         
//--bandAid solution
this.pack.drawBackground(this.background.color);

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
this.pack.dynamicCanvas(widthInPercent,heightInPercent);
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

// getCanvasHeight():number{
// return this.pack.canvasHeight();    
// }
// getCanvasWidth():number{
// return this.pack.canvasWidth();    
// }

}//ends
