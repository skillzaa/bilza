import {Pack} from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/Basecomponent.js";


export default class Rect extends BaseComponent {
    dynWidth :number;
    dynHeight :number;
    lineWidth :number;
    color :string;
constructor (){ 
    super();
    //by default its true but if that changes then here it is true
    this.lineWidth = 2 ;
    this.color = "#000000" ; 
    this.dynWidth = 20;
    this.dynHeight = 20;
}

width(p:Pack):number {
return  ((p.canvasWidth() /100) * this.dynWidth );    
    // return this.d.width;
}
height(p:Pack):number {
return  ((p.canvasHeight() /100) * this.dynHeight);    
}


draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth;
// this.dynWidth +=1; 
// const borderWidthHalf = Math.ceil(this.lineWidth/2);
// let newX = (this.p.x.value()) + borderWidthHalf + 1 ;
// let newY = (50) + borderWidthHalf + 1;
// let newX = p.xPerc(this.p.x.value()) + borderWidthHalf + 1 ;
// let newY = p.yPerc(this.p.y.value()) + borderWidthHalf + 1;
   p.drawRect(
    this.props.x.value(),
    20,
    this.width(p),
    this.height(p),
    this.style
    );
return true;
}

}