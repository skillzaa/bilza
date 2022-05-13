import {DrawLayer,IComponent,Pack } from "../Bilza";

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
public initAll(pack :Pack):boolean{
    for (let i = 0; i < this.compArray.length; i++) {
        this.compArray[i].init(pack);    
    }
return true;
}
public resizeAll(width :number = 800,height :number = 400):boolean{
    for (let i = 0; i < this.compArray.length; i++) {
        const element = this.compArray[i];
        element.resize(width,height); 
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
                comp.draw(pack);//waoooo no msDelta
                pack.restore();
            }   
        }
}
return true;
}

public qualifyForDraw(comp :IComponent,msDelta :number):boolean{
if (comp.insertType == comp.insertTypeOptions.AlwaysOn){
    return true;
}
if(comp.getStartTime(true) <= msDelta && comp.getEndTime(true) > msDelta){
    return true;
}
return false;
}
}//comps