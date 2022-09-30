import IEngineComp from "../component/IEngineComp.js";
import Pack from "../pack/pack.js";


/////////////////////////////////////////////////
export default class Comps {
public compArray :IEngineComp[];    
     
constructor(){
this.compArray = [];    
}
public push(comp :IEngineComp):IEngineComp{
this.compArray.push(comp);
return comp;
}


public drawByDrawLayer(msDelta :number,drawLayer :0|1|2|3|4,pack :Pack):boolean{ 
// console.log("drawByDrawLayer");    
for (let i = 0; i < this.compArray.length; i++) {
let comp = this.compArray[i];       
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

public qualifyForDraw(comp :IEngineComp,msDelta :number):boolean{
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
len(){
    return this.compArray.length;
}
}//comps 