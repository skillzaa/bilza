import {Pack,BaseComponent,DrawLayer,AniNumber} from "../bilza.js";
import AniNoPerc from "../animations/aniNoPerc/AniNoPerc.js";

export default class Line extends BaseComponent {
public x2 :AniNoPerc; 
public y2 :AniNoPerc;

lineWidth :AniNumber;
    

constructor (x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
super();

this.x.set(x1); 
this.y.set(y1);

this.x2 = new AniNoPerc(x2);
this.y2 = new AniNoPerc(y2);
this.lineWidth = new AniNumber(2);
this.color.set(color);
this.drawLayer = DrawLayer.MiddleGround;
}

init(p: Pack): boolean {
super.init(p);    
if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
}
//--The X and Y class needs to be init but The AniNumber wrapped insde does not need init
this.x2.init(this.responsiveCoordinates,this.canvasWidth);//canvasWidth
this.y2.init(this.responsiveCoordinates,this.canvasHeight);//canvasHeight
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
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
this.style.lineWidth = this.lineWidth.value(); 

this.preDraw(p);

p.drawLine(
    this.x.value(),
    this.y.value(),
    this.x2.value(),
    this.y2.value(),
    this.style
);
this.postDraw(p);
return true;
}


}//class