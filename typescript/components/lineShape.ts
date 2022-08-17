import {Pack} from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";

export default class LineShape extends BaseComponent {
// private linesArray :Line[];
constructor (){ 
super();
}

draw(p:Pack):boolean{
this.preDraw(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
//---------------------------------------
   p.drawFillRect(
     this.contentX(),
     this.contentY(),

    this.width.value(),
    this.height.value(),
    this.style
    );
//----------------------------
this.postDraw(p)
return true;
}
}