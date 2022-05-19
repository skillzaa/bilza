import {Pack} from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/Basecomponent.js";


export default class Rect extends BaseComponent {
    widthPercent :number;
    heightPercent :number;
    lineWidth :number;
    color :string;
constructor (){ 
    super();
    this.lineWidth = 40 ;
    this.color = "#000000" ; 
    this.widthPercent = 40;
    this.heightPercent = 40;
}
init(p: Pack): boolean {
console.log("iam run");
return true;    
}
width(p:Pack):number {
return  ((p.canvasWidth() /100) * this.widthPercent );    
    // return this.d.width;
}
height(p:Pack):number {
return  ((p.canvasHeight() /100) * this.heightPercent);    
}
update(msDelta: number, p: Pack): boolean {
    this.p.x.update(msDelta,p);
    this.p.y.update(msDelta,p);
    return true;
}
draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth; 
const borderWidthHalf = Math.ceil(this.lineWidth/2);
let newX = (this.p.x.value()) + borderWidthHalf + 1 ;
let newY = (this.p.y.value()) + borderWidthHalf + 1;
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