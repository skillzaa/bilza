import {Pack} from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/Basecomponent.js";


export default class Rect extends BaseComponent {
    widthPercent :number;
    heightPercent :number;
    lineWidth :number;
    color :string;
constructor (){ 
    super();
    //by default its true but if that changes then here it is true
    this.lineWidth = 40 ;
    this.color = "#000000" ; 
    this.widthPercent = 40;
    this.heightPercent = 40;
}

width(p:Pack):number {
return  ((p.canvasWidth() /100) * this.widthPercent );    
    // return this.d.width;
}
height(p:Pack):number {
return  ((p.canvasHeight() /100) * this.heightPercent);    
}


draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth; 
const borderWidthHalf = Math.ceil(this.lineWidth/2);
let newX = (this.p.x.value()) + borderWidthHalf + 1 ;
let newY = (50) + borderWidthHalf + 1;
// let newX = p.xPerc(this.p.x.value()) + borderWidthHalf + 1 ;
// let newY = p.yPerc(this.p.y.value()) + borderWidthHalf + 1;
   p.drawRect(
    newX,
    newY,
    this.width(p),
    this.height(p),
    this.style
    );
return true;
}

}