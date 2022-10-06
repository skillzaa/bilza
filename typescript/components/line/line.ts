import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import LineDb from "./lineDb.js";
import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animations/animations.js";

export default class Line extends CompEngine {
lineWidth :AniNumber;
public x2 :AniNumber; 
public y2 :AniNumber;

    
constructor (corePropsDb :LineDb ,pack :Pack){ 
    super(corePropsDb,pack);

///--no responsive and non-responsive in compEngine since they are just for compDband in compengine it is resolved into pic    
this.lineWidth = new AniNumber(corePropsDb.lineWidth);
this.x2 = new AniNumber(corePropsDb.x2);
this.y2 = new AniNumber(corePropsDb.y2);

}
  
update(msDelta: number, p: Pack): boolean {
   super.update(msDelta,p);
   this.x2.update(msDelta); 
   this.y2.update(msDelta); 
   this.lineWidth.update(msDelta); 
   return true;
}

draw(p:Pack):boolean{
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
this.style.lineWidth = this.lineWidth.value(); 

// this.preDraw(p);
this.style.opacity = (this.opacity.value());
this.applyRotation(p);
//--dont draw border or
//-----------------------------preDrawEnds
p.drawLine(
    this.x.value(),
    this.y.value(),
    this.x2.value(),
    this.y2.value(),
    this.style
);
// this.style.opacity = 100;

this.postDraw(p); //its ok to keep
return true;
}
//---we do not need to add padding etc to we just over-written compWidth and compHeight methods.
compWidth(): number {
return Math.floor(Math.abs(this.x2.value() - this.x.value()));    
}
compHeight(): number {
    return this.lineWidth.value();
}
/**
 * line comp is drawn differently- so we do not want to change align at all since that will add extra addition/sub in calc.
 * in the rotate align as well we should just change x value and not y
 */

}//class