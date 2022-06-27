import {DrawLayer,Pack} from "../bilza.js";
import Background from "./background.js";
//----------functions
import StopWatch from "./stopWatch.js";
//-------------------------------------------
import Settings from "./settings.js";
import Comps from "./comps.js";
import Insert from "./insert.js";
import Duration from "./duration.js";
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
export default class Bilza {
//==================PUBLIC API
public background :Background;
public insert:Insert; 
public set :Settings; 
public  soundTrackElement :HTMLAudioElement | null;
public soundTrack :string | null;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
private duration : Duration; 
private comps:Comps;//--009
private stopWatch:StopWatch;
private pack:Pack; //---later
private lastMsDelta:number; //---later
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",screenWidthInPercent=75){
this.pack = new Pack(canvasId,screenWidthInPercent);
this.comps = new Comps();
this.duration = new Duration();
this.lastMsDelta =0;
this.soundTrackElement = null;
this.soundTrack = null;
this.insert = new Insert(this.comps,this.duration,this.pack.charsWidth.bind(this.pack));
this.stopWatch  = new StopWatch();
this.set = new Settings(); ///EasyPeasyyyyyy...!!!
this.background = new Background();
} 
public init():boolean{
    if (this.soundTrack !== null){
        this.soundTrackElement = new Audio(this.soundTrack);
    }
    this.comps.init(this.pack);
    return true;
}
public drawInit():boolean{
    this.comps.init(this.pack);
    this.draw();
    return true;
}
//--27-june-2022 converted to private
private draw():boolean{
 let msDelta = this.stopWatch.getMsDelta();

//-------------------------------------------------------- 
//--we need to save this msDelta as lastMsDelta
this.lastMsDelta = msDelta;
//-------------------------------------------------------- 

this.drawFrame(msDelta); /// The draw mechanism without titbits
///-----connection with outer world
this.drawEvent(msDelta);
return true;
}
 
public drawFrame(msDelta :number=0){
if(this.pack == null){throw new Error("bilzaa is not initialized");}   
//--Auto Stop
if(msDelta >= this.len(true)){ this.stopWatch.stop();}             
//--Clear Canvas
this.pack.clearCanvas();          
//--drawBackground
this.pack.drawBackground(this.background.color);
//--Draw All three layers. In future if i need to add more layers OR if I want the user to be able to insert layers then this is the starting point.
this.comps.drawByDrawLayer(msDelta,DrawLayer.BackGround,this.pack);
this.comps.drawByDrawLayer(msDelta,DrawLayer.MiddleGround,this.pack);
this.comps.drawByDrawLayer(msDelta,DrawLayer.ForeGround,this.pack);
}

len(inMilliSeconds :boolean = true):number{
return this.duration.len(inMilliSeconds);
}
drawEvent(msDelta :number):boolean{
// console.log("drawEventn");
    return true;
}
dynamicCanvas(widthInPercent:number = 95,heightInPercent :number | null=null):boolean{
this.pack.dynamicCanvas(widthInPercent,heightInPercent);
return true;
}
start():boolean{
//-06-june-2022 the init is moved inside start ..may create problems    
    this.init(); 
    if (this.soundTrackElement !== null){
        this.soundTrackElement.play();
    }
    this.stopWatch.start(this.draw.bind(this));
    return true;
}
stop():boolean{
    if (this.soundTrackElement !== null){
        this.soundTrackElement.pause();
        this.soundTrackElement.currentTime = 0;
    }
    this.stopWatch.stop();
    return true; 
}
public resizeCanvas(width :number, height :number | null){
this.pack.resizeCanvas(width, height);    
}
getLastMsDelta():number{
    return this.lastMsDelta;
}
isRunning():boolean{
return this.stopWatch.isRunning();    
}
}//ends
