import {Pack,BaseComponent,DrawLayer} from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";

export default class CanvasBorder extends BaseComponent {


borderWidth :AniNumber;
    

constructor ( color :string="grey" , borderWidth :number=0.5 ){
super();

this.borderWidth = new AniNumber(borderWidth);
this.color.set(color);
this.drawLayer = DrawLayer.MiddleGround;
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