import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";
import Style from "../style/style.js";
import Xy from "../design/xy.js";
import IFrameStart from "./IFrameStart.js";
import BaseComp from "./baseComp.js";

class FirstData  {
    frameStart :number;
    x :number | null;
    y :number | null;
    content:string | null;
constructor(frameStart=0){
this.frameStart = frameStart;
this.content = null;
this.x = null;
this.y = null;
}    
}
export default class CompExt extends BaseComp {
    dataTransitions : FirstData[];
    compData:FirstData;
constructor (content="some text",x=0,y=0,firstdata:FirstData = new FirstData(),style = new Style()){
    super(style);
    this.compData = firstdata;
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
    p.ctx.drawText(this.compData.content,this.compData.x,this.compData.y,this.style);
    return true;
}

newDataTransition(frame :number=0):FirstData{
let t = new FirstData(frame);
this.dataTransitions.push(t);
return t;
}
addDataTransition(cd :FirstData):boolean{
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
merge(subset:FirstData):boolean{
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