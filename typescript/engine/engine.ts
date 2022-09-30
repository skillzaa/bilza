// import IEngineComp from "../component/IEngineComp.js";
import IEngineComp from "../component/IEngineComp.js";
import Background from "../components/background.js";
import Pack from "../pack/pack.js";
//-------------------------------------------

export default class Bilza {
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
private pack:Pack; //---later
private lastMsDelta:number; //---later
private comps :IEngineComp[];
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",screenWidthInPercent=70,pack :Pack,comps :IEngineComp[]=[], background :Background){

this.pack = pack;
this.comps = comps;
this.background = background;

this.lastMsDelta =0;

} 


public draw(msDelta :number=0){
// if(this.pack == null){throw new Error("bilzaa is not initialized");}   
//--Auto Stop
// if(msDelta >= this.len(true)){ this.stopWatch.stop();}             
//--Clear Canvas
// if (this.set.clearCanvasBwFrames == true){
this.pack.clearCanvas();          
// }

this.drawByDrawLayer(msDelta,0,this.pack);
this.drawByDrawLayer(msDelta,1,this.pack);
this.drawByDrawLayer(msDelta,2,this.pack);
this.drawByDrawLayer(msDelta,3,this.pack);
///-----connection with outer world
// this.drawEvent(msDelta);
}
public drawByDrawLayer(msDelta :number,drawLayer :0|1|2|3|4,pack :Pack):boolean{ 
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
private qualifyForDraw(comp :IEngineComp,msDelta :number):boolean{
//-5-july-2022 : isnt this more coupling between engine and comp?    
if (comp.visible.value() == false){
    return false;
}
if (comp.alwaysOn == true){
    return true;
}
if(comp.getStartTime(true) <= msDelta && comp.getEndTime(true) > msDelta){
    return true;
}
return false;
}
public start():boolean{
    return true;
}
public stop():boolean{
    return true; 
}

protected getLastMsDelta():number{
    return this.lastMsDelta;
}

////////////////////////////////////engine ends
}//ends
