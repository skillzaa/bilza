import {Pack,BaseComponent,DrawLayer,AniNumber} from "../Bilza.js";
import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";

export default class Line extends BaseComponent {
public x2 :AniNoXPerc; 
public y2 :AniNoYPerc;

lineWidth :AniNumber;
    
color :string;
constructor (x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
super();
//--we can not use set directly for props which need init
// this.x.set(x1); //wrong
this.x.setInitValue(x1); 
this.y.setInitValue(y1);

this.x2 = new AniNoXPerc(x2);
this.y2 = new AniNoYPerc(y2);
this.lineWidth = new AniNumber(2);
this.color = color;
this.drawLayer = DrawLayer.MiddleGround;
}

init(p: Pack): boolean {
super.init(p);    
if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
}
//--The X and Y class needs to be init but The AniNumber wrapped insde does not need init
this.x2.init(this.usePercentages,this.canvasWidth);//canvasWidth
this.y2.init(this.usePercentages,this.canvasHeight);//canvasHeight
return true;
}
    
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
   this.x2.update(msDelta); 
   this.y2.update(msDelta); 
   this.lineWidth.update(msDelta); 
   return true;
}
draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth.value(); 
p.drawLine(
    this.x.value(),
    this.y.value(),
    this.x2.value(),
    this.y2.value(),
    this.style
)
return true;
}


}//class