import Pack from "../pack/pack.js";

import Component from "../component/component.js";

//-14-july-2022 : There is no need to add any public prop width height and color are all added    
//--16-jul-2022 : This is the first completed comp.

export default class FillRect extends Component {

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

    this.width.value(),
    this.height.value(),
    this.style
    );
//----------------------------
this.postDraw(p)
return true;
}
}