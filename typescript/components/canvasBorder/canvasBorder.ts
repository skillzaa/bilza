
import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CorePropsDb from "../../compDb/corePropsDb.js";
import { AniNumber } from "../../animations/animations.js";
import CanvasBorderDb from "./canvasBorderDb.js";

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export default class CanvasBorder extends CompEngine {
borderWidth :AniNumber;
    
constructor ( canvasBorderDb :CanvasBorderDb ,pack :Pack ){
super( canvasBorderDb , pack );  

this.borderWidth = new AniNumber(canvasBorderDb.borderWidth);
this.color.set( canvasBorderDb.color.value() );
this.drawLayer = 1;
}

    
update(msDelta: number, p: Pack): boolean {
   super.update(msDelta,p);
   this.borderWidth.update(msDelta); 
   return true;
}

draw(p:Pack):boolean{
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 

// this.preDraw(p);
this.style.opacity = (this.opacity.value());
// this.applyRotation(p);
//--dont draw border or
//-----------------------------preDrawEnds
const reqWidth = (p.canvasWidth()/100) * this.borderWidth.value();
//--left
p.drawFillRect(0,0,reqWidth,p.canvasHeight(),this.style);
//--right
p.drawFillRect(p.canvasWidth()-reqWidth,0,reqWidth,p.canvasHeight(),this.style);
//--top
p.drawFillRect(0,0,p.canvasWidth(),reqWidth,this.style);

//--Bot
p.drawFillRect(0,p.canvasHeight()-reqWidth,p.canvasWidth(),reqWidth,this.style);


//-------------------------
this.postDraw(p); //its ok to keep
return true;
}



}//class
