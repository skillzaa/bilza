import {DrawLayer,IComponent,Pack} from "../Bilza.js";



export default function drawByDrawLayer(compsArray :IComponent[],msDelta :number,drawLayer :DrawLayer,pack :Pack):boolean{ 
for (let i = 0; i < compsArray.length; i++) {
let comp = compsArray[i];       
        //--save ctx
        if (comp.drawLayer == drawLayer ){
            if (       qualifyForDraw(comp,msDelta)     ){
                pack.save();
                comp.update(msDelta,pack);
                comp.draw(pack);//waoooo no msDelta
                pack.restore();
            }   
        }
}
return true;
}

function qualifyForDraw(comp :IComponent,msDelta :number):boolean{
if (comp.insertType == comp.insertTypeOptions.AlwaysOn){
    return true;
}
if(comp.getStartTime(true) <= msDelta && comp.getEndTime(true) > msDelta){
    return true;
}
return false;
}