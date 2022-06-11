import {DrawLayer,Pack} from "../Bilza.js";
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
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",screenWidthInPercent=80){
this.pack = new Pack(canvasId,screenWidthInPercent);
this.comps = new Comps();
this.duration = new Duration();
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
public draw():boolean{
 if(this.pack == null){
throw new Error("bilzaa is not initialized");}   
    let    msDelta = this.stopWatch.getMsDelta();

if(msDelta >= this.len(true)){ this.stopWatch.stop();}     
this.pack.clearCanvas();          
this.pack.drawBackground(this.background.color);

this.comps.drawByDrawLayer(msDelta,DrawLayer.BackGround,this.pack);
this.comps.drawByDrawLayer(msDelta,DrawLayer.MiddleGround,this.pack);
this.comps.drawByDrawLayer(msDelta,DrawLayer.ForeGround,this.pack);
///-----connection with outer world
this.drawEvent(msDelta);
return true;
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
}//ends
