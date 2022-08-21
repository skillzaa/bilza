import { Pack,BaseComponent } from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
export default class Circle extends BaseComponent {
startAngle :AniNumber;  
endAngle :AniNumber;  
filled :AniBoolean;
constructor (color :string="#ff0000"){ 
super();
//--new props
this.filled = new AniBoolean(true);
this.startAngle = new AniNumber(0);
this.endAngle = new AniNumber(360);
//---existing prop
this.color.set(color) ; 
}
update(msDelta: number, p: Pack): boolean {
    this.startAngle.update(msDelta);
    this.endAngle.update(msDelta);
    //---??
    this.height.set(this.width.value());
    super.update(msDelta,p);
    return true;
}

draw(p:Pack):boolean{
//--------------
this.preDraw(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
//---------------------------------------
p.beginPath();

p.drawCircle( 
    //--we have to use (this.width.value()/2) since circle is drawn from centre
    this.contentX() + (this.width.value()/2),
    this.contentY() + (this.width.value()/2),
    (this.width.value()/2), //since radius is half of width
    this.filled.value(),
    this.startAngle.value() * (Math.PI/180),
    this.endAngle.value() * (Math.PI/180),
    this.style
    );

p.stroke();
//----------------------------
this.postDraw(p);
//----------------------------
return true;
}

}