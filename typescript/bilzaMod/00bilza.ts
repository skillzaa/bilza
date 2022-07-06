import {DrawLayer,Pack} from "../bilza.js";
//----------functions
import Background from "../components/background.js";
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
constructor (canvasId="bilza",screenWidthInPercent=70){
this.pack = new Pack(canvasId,screenWidthInPercent);
this.comps = new Comps();
this.duration = new Duration();
this.lastMsDelta =0;
this.soundTrackElement = null;
this.soundTrack = null;
this.insert = new Insert(this.comps,this.duration,this.pack.charsWidth.bind(this.pack));
this.stopWatch  = new StopWatch();
this.set = new Settings(); ///EasyPeasyyyyyy...!!!
//-----------Add Background--usinf set
this.background = new Background();
// if (this.set.loadDefaultBackground == true){
//     this.insert.alwaysOn(this.background);
// }
} 
// --27-june-2022 converted to private since user does not need to know
//--30-june-2022 back to puiblic lets see
public init():boolean{
//-----------Add Background--usinf set
if (this.set.loadDefaultBackground == true){
    this.insert.alwaysOn(this.background);
}    
//---sound
    if (this.soundTrack !== null){
        this.soundTrackElement = new Audio(this.soundTrack);
    }
//--now init    
    this.comps.init(this.pack);
    return true;
}

// --27-june-2022 converted to private
private drawForStart():boolean{
//  this.init();  //--init is already added in start     
 let msDelta = this.stopWatch.getMsDelta();
 this.draw_internal(msDelta); /// The draw mechanism without titbits
//  if (this.stopWatch.shouldStop() == false){
    window.requestAnimationFrame(this.drawForStart.bind(this));
// }

//---27-6-2022 draw Event removed from here
return true;
}
public draw(msDelta :number=0){
    this.init();
    this.draw_internal(msDelta);
}

private draw_internal(msDelta :number=0){
//-------------------------------------------------------- 
//--we need to save this msDelta as lastMsDelta
this.lastMsDelta = msDelta;
//-------------------------------------------------------- 

if(this.pack == null){throw new Error("bilzaa is not initialized");}   
//--Auto Stop
if(msDelta >= this.len(true)){ this.stopWatch.stop();}             
//--Clear Canvas
if (this.set.clearCanvasBwFrames == true){
    this.pack.clearCanvas();          
}

//--Draw All three layers. In future if i need to add more layers OR if I want the user to be able to insert layers then this is the starting point.
this.comps.drawByDrawLayer(msDelta,DrawLayer.BackGround,this.pack);
this.comps.drawByDrawLayer(msDelta,DrawLayer.MiddleGround,this.pack);
this.comps.drawByDrawLayer(msDelta,DrawLayer.ForeGround,this.pack);
///-----connection with outer world
this.drawEvent(msDelta);
}

len(inMilliSeconds :boolean = true):number{
return this.duration.len(inMilliSeconds);
}
drawEvent(msDelta :number):boolean{
// console.log("drawEvent",msDelta);
    return true;
}
dynamicCanvas(widthInPercent:number = 95,heightInPercent :number | null=null):boolean{
this.pack.dynamicCanvas(widthInPercent,heightInPercent);
return true;
}
start():boolean{
//-06-june-2022 the init is moved inside start ..may create problems    
    
    if (this.soundTrackElement !== null){
        this.soundTrackElement.play();
    }

    if (this.stopWatch.isRunning() == true){return false;}
        this.stop();
        this.stopWatch.start();
        this.init(); 
        this.stopWatch.runningStartTimeTS = new Date().getTime();

        // if (this.stopWatch.shouldStop() == false){
            window.requestAnimationFrame(this.drawForStart.bind(this));
        // }
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
