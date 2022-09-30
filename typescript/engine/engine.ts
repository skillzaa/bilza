// import IEngineComp from "../component/IEngineComp.js";
import Background from "../components/background.js";
import Pack from "../pack/pack.js";
//-------------------------------------------

export default class Bilza {
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
private pack:Pack; //---later
private lastMsDelta:number; //---later

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",screenWidthInPercent=70,pack :Pack,background :Background){

this.pack = pack;
this.background = background;

this.lastMsDelta =0;

} 


public draw(msDelta :number=0){
    // this.draw_internal(msDelta);
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
