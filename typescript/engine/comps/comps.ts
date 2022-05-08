import {DrawLayer,IComponent,Pack} from "../../Bilza.js";

export default class Comps {
    protected compsArray:IComponent[];
    private pack :Pack;
constructor(pack :Pack){
    this.pack = pack;
    this.compsArray = [];
}
insert(comp:IComponent):IComponent{
    // comp.init(this.pack);
    // console.log(comp.width(this.pack));5f
    this.compsArray.push(comp);
    return comp;
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
            if (comp.getStartTime() <= msDelta && comp.getEndTime() > msDelta ){
                pack.save();
                comp.update(msDelta,pack);
                comp.draw(pack);//waoooo no msDelta
                pack.restore();
            }   
        }
}
return true;
}

// insertAt(comp:IComponent, second :number):IComponent{
//     let secondMs = second * 1000;
//     let startTime = comp.getStartTime();
//     let endTime = comp.getEndTime();
//     comp.setStartTime(startTime + secondMs);
//     comp.setEndTime(endTime + secondMs);
//         if (this.getTimeEnd() < comp.getEndTime()){
//             this.setTimeEnd(comp.getEndTime());
//         }
//     this.compsArray.push(comp);
//     return comp;
// }
resizeAll(width :number = 800,height :number = 400):boolean{
    for (let i = 0; i < this.compsArray.length; i++) {
        const element = this.compsArray[i];
        element.resize(width,height); 
    }
    return true;
}

/////////////////////////////////////
}///////comps ends