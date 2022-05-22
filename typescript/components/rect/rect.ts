import {Pack} from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/BaseComponent.js";


export default class Rect extends BaseComponent {
  
    lineWidth :number;
    color :string;
constructor (){ 
    super();
    this.lineWidth = 2 ;
    this.color = "#000000" ; 
  
}


draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth;

const borderWidthHalf = Math.ceil(this.lineWidth/2);
let newX = (this.p.x.value()) + borderWidthHalf ;
if (this.width() > 200) {debugger;}
   p.drawRect(
    this.props.x.value(),
    this.props.y.value(),
    this.width(),
    this.height(),
    this.style
    );
return true;
}

}