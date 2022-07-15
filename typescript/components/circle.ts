import { Pack,AniBoolean,AniColor,BaseComponent } from "../bilza.js";

export default class Circle extends BaseComponent {
  
filled :AniBoolean;
constructor (color :string="#000000"){ 
super();
this.color.set(color) ; 
this.filled = new AniBoolean(true);
}

contentWidth():number{
    if (this.canvasWidth !== null ){
        return Math.ceil((this.canvasWidth/100) * (this.width.value())); 
    }else {
        throw new Error("the component is not initialized yet");        
    }
}

contentHeight():number{
    if (this.canvasWidth !== null ){
        return Math.ceil((this.canvasWidth/100) * (this.width.value())); 
    }else {
        throw new Error("the component is not initialized yet");        
    }
}

draw(p:Pack):boolean{

this.preDraw(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
//---------------------------------------
p.beginPath();
p.drawCircle(
    //--we have to ass (this.contentWidth()/2) since circle is drawn from centre
    this.contentX() + (this.contentWidth()/2),
    this.contentY() + (this.contentWidth()/2),
    (this.contentWidth()/2), //since radius is halp of width
    this.filled.value(),
    0,
    2 * Math.PI,
    this.style
    );

p.stroke();
//----------------------------
this.postDraw(p);
//----------------------------
return true;
}

}