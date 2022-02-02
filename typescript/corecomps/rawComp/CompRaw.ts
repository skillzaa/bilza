import Pack from "../../pack/pack.js";
import Style from "../../style/style.js";
import BaseComp from "../../component/baseComp.js";
import RawData from "./rawData.js";
import RawDataNull from "./rawDataNull.js";

export default class CompRaw extends BaseComp {
    dataTransitions : RawDataNull[];
    compData:RawData;
constructor (content="some text",x=0,y=0,style = new Style()){
    super(style);
    this.compData = new RawData();
    this.compData.content = content;
    this.compData.x = x;
    this.compData.y = y;
    this.compData.content = content; 
    this.compData.x = x; 
    this.compData.y = y; 
    this.dataTransitions = [];
}
width(p: Pack): number {
    return 0;
}
height(p: Pack): number {
    return 0;
}
draw(p: Pack): boolean {
    p.ctx.drawBackground("green");
    p.ctx.drawText(this.compData.content,this.compData.x,this.compData.y,this.style);
    return true;
}

newDataTransition(frame :number=0):RawDataNull{
let t = new RawDataNull(frame);
this.dataTransitions.push(t);
return t;
}
addDataTransition(cd :RawDataNull):boolean{
this.dataTransitions.push(cd);
return true;
}

applyDataTransitons(frame :number){
for (let i = this.dataTransitions.length -1; i >= 0; i--) {
    const trctxData = this.dataTransitions[i];
    if(trctxData.frameStart < frame ){
        this.merge(trctxData);
        this.dataTransitions.splice(i,1);
    }
}
}

//--this merge is only for compData for style ithas its own merge fn.
merge(subset:RawDataNull):boolean{
if (subset.content !== null){
    this.compData.content = subset.content;
}
if (subset.x !== null){
    this.compData.x = subset.x;
}
if (subset.y !== null){
    this.compData.y = subset.y;
}
return true;
}
}