import { Pack,BaseComponent } from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
export default class Circle extends BaseComponent {
startAngle :AniNumber;  
endAngle :AniNumber;  
filled :AniBoolean;
constructor (color :string="#ff0000"){ 
super();
this.filled = new AniBoolean(true);
this.startAngle = new AniNumber(0);
this.endAngle = new AniNumber(360);
this.color.set(color) ; 
}
update(msDelta: number, p: Pack): boolean {
    this.startAngle.update(msDelta);
    this.endAngle.update(msDelta);
    //---??
    // this.height.set(this.width.value());
    super.update(msDelta,p);
    return true;
}
//-23-7-2022 - Over ridden contentHeight ::-> this is actually just the copy paste of contentWidth from base comp. Incase of circle the width and height can not be just made equal by setting both to X value SINCE fixels number are not the same on X-axis and Y-axis thus 40% width is not visually equal to 40% height. Thus incase of circl height is always equal to width
contentHeight(): number {
    if (this.responsiveDims == false){return this.width.value()}
    if (this.canvasWidth !== null ){
        return ((this.canvasWidth/100) * this.width.value());
    }else {
        throw new Error("The component is not initialized yet");        
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
    //--we have to use (this.contentWidth()/2) since circle is drawn from centre
    this.contentX() + (this.contentWidth()/2),
    this.contentY() + (this.contentWidth()/2),
    (this.contentWidth()/2), //since radius is half of width
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