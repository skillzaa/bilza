import {DrawLayer,IComponent,Pack } from "../bilza";
/**
 * JUst keep it for most obvious comps functions but also keep compsArray public for now
 */
export default class Comps {
public compArray :IComponent[];    
     
constructor(){
this.compArray = [];    
}
public push(comp :IComponent):IComponent{
this.compArray.push(comp);
return comp;
}
public init(pack :Pack):boolean{
    for (let i = 0; i < this.compArray.length; i++) {
        this.compArray[i].init(pack);    
    }
return true;
}
public drawByDrawLayer(msDelta :number,drawLayer :DrawLayer,pack :Pack):boolean{ 
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

public qualifyForDraw(comp :IComponent,msDelta :number):boolean{
if (comp.visible == false){
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