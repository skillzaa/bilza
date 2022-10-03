import Background from "../components/background/background.js";
import Pack from "../pack/pack.js";
import StopWatch from "./stopWatch.js";
import Settings from "./settings.js";
import Component from "../compEngine/compEngine.js";
import CompEngine from "../compEngine/compEngine.js";
import EngineDb from "./engineDb.js";
//-------------------------------------------

export default class Engine {
public background :Background | null;
private stopWatch:StopWatch;
private set:Settings;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
private pack:Pack;
private lastMsDelta:number;
public readonly duration:number;
private comps :CompEngine[];
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

constructor (
    engineDb :EngineDb,
    comps : CompEngine []=[],
    background :CompEngine | null =null,
    duration :number,
    pack :Pack
){
/////////////////////////////////////////////    
this.set = new Settings();
this.stopWatch = new StopWatch();
this.pack = pack;
this.duration = duration;
//--Incomming comps already has background or not based on settings in Fasade , such decisions are not part of engine
this.comps = comps;
//--if background !== null then it is also present at index 0 in comps 
this.background = background;

this.lastMsDelta =0;
// if (this.set.loadSystemBackground == true){
//     this._insert.alwaysOn(this.background);
// }   


} 


public draw(msDelta :number=0){
if(msDelta >= this.duration){ this.stopWatch.stop();}             
//--Clear Canvas
if (this.set.clearCanvasBwFrames == true){
this.pack.clearCanvas();          
}

this.drawByDrawLayer(msDelta,0,this.pack);
this.drawByDrawLayer(msDelta,1,this.pack);
this.drawByDrawLayer(msDelta,2,this.pack);
this.drawByDrawLayer(msDelta,3,this.pack);
///-----connection with outer world
// this.drawEvent(msDelta);
}
durationInMs():number{
  return this.duration * 1000;  
}
private drawByDrawLayer(msDelta :number,drawLayer :0|1|2|3|4,pack :Pack):boolean{ 
// console.log("drawByDrawLayer");    
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];       
        //--save ctx
        if (comp.drawLayer == drawLayer ){
            if (       this.qualifyForDraw(comp,msDelta)     ){
                pack.save();
                comp.update(msDelta,pack);
                comp.draw(pack);
                pack.restore();
            }   
        }
}
return true;
}
private qualifyForDraw(comp :CompEngine,msDelta :number):boolean{
//-5-july-2022 : isnt this more coupling between engine and comp?    
if (comp.visible.value() == false){
    return false;
}
if (comp.alwaysOn == true){
    return true;
}
//msDelta is always in ms so start/end time should also be 
if (comp.time  == null){
    throw new Error("time object was found null");
    
}
if(comp.time.getStart(false) <= msDelta && comp.time.getEnd(false) > msDelta){
    return true;
}
return false;
}

public start():boolean{
// xxxxxxxxxxxxxxxxx--bil.start()--xxxxxxxxxxxxxxxxxxxxxxxxx
if (this.stopWatch.isRunning() == true){return false;}
this.stop();
//--remove for now
    // if (this.soundTrackElement !== null){
    //     this.soundTrackElement.play();
    // }
 
this.init();
this.stopWatch.start();
this.drawLoop();
return true;
// xxxxxxxxxxxxxxxxx--bil.start-end-xxxxxxxxxxxxxxxxxxxxxxxxx
}

private drawLoop(){
//-1
if (this.stopWatch.isRunning()==false){return;}    
//-2
const msDelta = this.stopWatch.getMsDelta();
//-3
if(msDelta >= this.durationInMs() ){ this.stopWatch.stop();}             
//-4
if (this.set.clearCanvasBwFrames == true){
this.pack.clearCanvas();          
}
//-5
//---------------draw----------------------------
    this.drawByDrawLayer(msDelta,0,this.pack);
    this.drawByDrawLayer(msDelta,1,this.pack);
    this.drawByDrawLayer(msDelta,2,this.pack);
    this.drawByDrawLayer(msDelta,3,this.pack);
    this.drawByDrawLayer(msDelta,4,this.pack);
    ///-----connection with outer world
//-6    
    this.drawEvent(msDelta);
    ///--finally
//-7    
    window.requestAnimationFrame(this.drawLoop.bind(this));
}
///////////////////////////////////////////////
drawEvent(msDelta :number){
console.log("msDelta",msDelta);
}
stop():boolean{
    // if (this.soundTrackElement !== null){
    //     this.soundTrackElement.pause();
    //     this.soundTrackElement.currentTime = 0;
    // }
    this.stopWatch.stop();
    return true; 
}

protected getLastMsDelta():number{
return this.lastMsDelta;
}

init(){
///////////nothing here---?????????????????????????????
}
isRunning():boolean{
    return this.stopWatch.isRunning();
}
    
////////////////////////////////////engine ends
}//ends
