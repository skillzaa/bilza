import {Pack} from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";


//-14-july-2022 : There is no need to add any public prop width height and color are all added    

export default class FillRect extends BaseComponent {

constructor (color :string="#000000"){ 
    super();
this.color.set(color) ; 
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

    this.contentWidth(),
    this.contentHeight(),
    this.style
    );
//----------------------------
this.postDraw(p)
return true;
}
}