import {Pack,BaseComponent,DrawLayer} from "../../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../../animationModule/animations.js";

import Templ from "./templ.js";
import Theme from "./theme.js";

export default class Arrow extends BaseComponent {
public x2 :AniPerc | AniNumber; 
public y2 :AniPerc | AniNumber;
public headWidth :AniPerc;
public headHeight :AniPerc;
public headFilled :AniBoolean;
public colorHead :AniColor;
public lineWidth :AniNumber;

public templ :Templ; 
public theme :Theme; 

    

constructor (x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
super();

this.x.set(x1); 
this.y.set(y1);
this.headWidth = new AniPerc(4);
this.headFilled = new AniBoolean(true);
this.headHeight = new AniPerc(2);
this.x2 = new AniPerc(x2);
this.y2 = new AniPerc(y2);
this.lineWidth = new AniNumber(2);

this.color.set(color);
this.colorHead = new AniColor(color);

this.drawLayer = DrawLayer.MiddleGround;
this.templ = new Templ(this);
this.theme = new Theme(this);

}
//---new addition-----
setRespLoc(tf :boolean=true):boolean{
super.setRespLoc(tf);    
    if (tf == true){
        const x2OldValue = this.x2.value();
        const y2OldValue = this.y2.value();
        this.x2 = new AniPerc(0);
        this.x2.set(x2OldValue);
        this.y2 = new AniPerc(0);
        this.y2.set(y2OldValue);
        return true;
    } else {
        const x2OldValue = this.x2.value();
        const y2OldValue = this.y2.value();
        this.x2 = new AniNumber(0);
        this.x2.set(x2OldValue);
        this.y2 = new AniNumber(0);
        this.y2.set(y2OldValue);
        return false;
    }   
}

init(p: Pack): boolean {  
//--imp--it want us to keep it here or cause init error
super.init(p);     

this.headWidth.init(this.canvasWidth());//canvasWidth
this.headHeight.init(this.canvasWidth());//canvasWidth

if (this.x2 instanceof AniPerc && this.y2 instanceof AniPerc ){
    this.x2.init(this.canvasWidth());//canvasWidth
    this.y2.init(this.canvasHeight());//canvasHeight
}
return true;
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
this.preDrawNonBoxed(p);
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
/**
 * line comp is drawn differently- so we do not want to change align at all since that will add extra addition/sub in calc.
 * in the rotate align as well we should just change x value and not y
 */
public align(x?: number | null, y?: number | null): void {
//--we do not align line comp so there is no add / sub in the x/y value    
    super.align(0,0);
}
public alignRotate(x?: number | null, y?: number | null): void {
    super.alignRotate(x,0);
}

public pointTo(second :number, x :number, y : number){
    this.x2.goto(second,x);
    this.y2.goto(second,y);
     
}
}//class