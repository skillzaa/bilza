import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import ArrowDb from "./arrowDb.js";
import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animations/animations.js";

// import Templ from "./templ.js";
// import Theme from "./theme.js";

export default class Arrow extends CompEngine  {
public x2 : AniNumber; 
public y2 : AniNumber;
public headWidth :AniNumber;
public headHeight :AniNumber;
public headFilled :AniBoolean;
public colorHead :AniColor;
public lineWidth :AniNumber;

// public templ :Templ; 
// public theme :Theme; 

constructor ( arrowDb :ArrowDb,pack :Pack){ 
super( arrowDb ,pack);

this.headWidth = new AniNumber(arrowDb.headWidth );
// this.headWidth.setResponsive();
this.headFilled = new AniBoolean(arrowDb.headFilled);
this.headHeight = new AniNumber(arrowDb.headHeight);
// this.headHeight.setResponsive();
this.x2 = new AniNumber(arrowDb.x2);

this.y2 = new AniNumber(arrowDb.y2);
this.lineWidth = new AniNumber(arrowDb.lineWidth );

this.colorHead = new AniColor(arrowDb.colorHead);

this.drawLayer = 2;//????
// this.templ = new Templ(this);
// this.theme = new Theme(this);
this.color.set(arrowDb.color.value());

//////////////
}
    


    
update(msDelta: number, p: Pack): boolean {
   super.update(msDelta,p);
   this.x2.update(msDelta); 
   this.y2.update(msDelta); 
   this.lineWidth.update(msDelta); 
   this.headFilled.update(msDelta); 
   this.headHeight.update(msDelta); 
   this.headWidth.update(msDelta); 
   return true;
}

draw(p:Pack):boolean{
this.preDraw(p);
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
this.style.lineWidth = this.lineWidth.value(); 
//----------------------------------------------
let verticalArrow = false;
let lineEndX;

if  (this.x2.value() > this.x.value()){
    lineEndX = this.x2.value() - (this.headWidth.value() -1);

}else if (this.x2.value() < this.x.value()) {
    lineEndX = this.x2.value() + (this.headWidth.value() );

}else   {   
    lineEndX = this.x2.value();
    verticalArrow = true;
}
//----------------------------------------------
let lineEndY;
if  (this.y2.value() > this.y.value()){
    if (verticalArrow ==true){
        lineEndY = this.y2.value() - (this.headWidth.value()  );
    }else {
        lineEndY = this.y2.value() - (this.headHeight.value()  );
    }

}else if (this.y2.value() < this.y.value()) {
    if (verticalArrow ==true){
        lineEndY = this.y2.value() + (this.headWidth.value() );
    }else {
        lineEndY = this.y2.value() + (this.headHeight.value() );
    }
    // lineEndY = this.y2.value() ;

}else   {   
    lineEndY = this.y2.value();
}

//--///////////////////////////////////////////////

p.drawLine(
    this.x.value(),
    this.y.value(),
    lineEndX,
    lineEndY,
    this.style
);
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;Arrow Head Code
p.save();
const rotateAngle  = Math.atan2(this.y2.value() - lineEndY,this.x2.value() - lineEndX);

p.translate( this.x2.value() , this.y2.value() );

//---------------------------------
p.rotateRad(  rotateAngle );
//---------------------------------
this.style.fillStyle = this.colorHead.value();    
this.style.strokeStyle = this.colorHead.value(); 

//---Arrow Head-- 
p.beginPath(); 

p.moveTo( 0 , 0); 
p.lineTo( -this.headWidth.value(), this.headHeight.value(),this.style); 
p.lineTo( -this.headWidth.value(), -this.headHeight.value(),this.style); 
p.lineTo( 0, 0,this.style); 

if (this.headFilled.value() ==true){
    p.fill(this.style);
}else {
    p.stroke()
}

//----------restored
p.restore();
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
this.postDraw(p); //its ok to keep
return true;
}
//---we do not need to add padding etc to we just over-written compWidth and compHeight methods.
compWidth(): number {
return 0;    
}
compHeight(): number {
return 0;
}

}//class