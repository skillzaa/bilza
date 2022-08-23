import {Pack,BaseComponent,DrawLayer} from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";

export default class Line extends BaseComponent {
public x2 :AniPerc | AniNumber; 
public y2 :AniPerc | AniNumber;

lineWidth :AniNumber;
    

constructor (x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
super();

this.x.set(x1); 
this.y.set(y1);

this.x2 = new AniPerc(x2);
this.y2 = new AniPerc(y2);
this.lineWidth = new AniNumber(2);
this.color.set(color);
this.drawLayer = DrawLayer.MiddleGround;
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
if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
}
if (this.x2 instanceof AniPerc && this.y2 instanceof AniPerc ){
    this.x2.init(this.canvasWidth);//canvasWidth
    this.y2.init(this.canvasHeight);//canvasHeight
}
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