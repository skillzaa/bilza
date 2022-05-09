import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ImageData} from "./imageData.js";
import aspectRatioHeight from "../../functions/aspectRatioHeight.js"; 


export default class Image extends Component<ImageData> {
    source :HTMLImageElement
constructor (startTimeSeconds :number=0,endTimeSeconds:number=300,
    source :HTMLImageElement,
    x :number=0, y :number=0){

    super(DataFn,startTimeSeconds,endTimeSeconds);
    this.d.x = x;
    this.d.y = y;
    this.source = source;
    //--Draw Layer
    this.drawLayer = DrawLayer.MiddleGround;
    //--Aspect ratio
    // this.d.widthPercent = widthPercent;
    // if (heightPercent == null) {
    //     this.d.heightPercent = aspectRatioHeight(canvasWidth/100*this.d.widthPercent);
    // }else {
    //     this.d.heightPercent = heightPercent;
    // }
}

width(p:Pack):number {
// return  ((p.canvasWidth() /100) * this.d.widthPercent);    
return this.source.clientWidth;
}

height(p:Pack):number {
// return  ((p.canvasHeight() /100) * this.d.heightPercent);    
return this.source.clientHeight;
}

draw(p:Pack):boolean{
p.drawImage(this.source,p.xPerc(this.d.x),p.yPerc(this.d.y));
return true;
}


}//comp ends