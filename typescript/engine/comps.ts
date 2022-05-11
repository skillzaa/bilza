import {DrawLayer,IComponent,Pack} from "../Bilza.js";

export default class Comps {
    public compsArray:IComponent[];
    private pack :Pack;
constructor(pack :Pack){
    this.pack = pack;
    this.compsArray = [];
}

public init():boolean{
    for (let i = 0; i < this.compsArray.length; i++) {
    this.compsArray[i].init(this.pack);    
    }
    return true;
}

public drawByDrawLayer(msDelta :number,drawLayer :DrawLayer,pack :Pack):boolean{ 
for (let i = 0; i < this.compsArray.length; i++) {
let comp = this.compsArray[i];       
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

qualifyForDraw(comp :IComponent,msDelta :number):boolean{
if (comp.displayType == comp.displayTypeOptions.AlwaysOn){
    return true;
}
if(comp.getStartTime(true) <= msDelta && comp.getEndTime(true) > msDelta){
    return true;
}
return false;
}
resizeAll(width :number = 800,height :number = 400):boolean{
    for (let i = 0; i < this.compsArray.length; i++) {
        const element = this.compsArray[i];
        element.resize(width,height); 
    }
    return true;
}

/////////////////////////////////////
}///////comps ends