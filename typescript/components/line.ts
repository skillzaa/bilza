import {Pack,BaseComponent,DrawLayer,AniNumber} from "../bilza.js";

export default class Line extends BaseComponent {
    x2 :AniNumber;
    y2 :AniNumber;
    lineWidth :AniNumber;
    
    color :string;
constructor (x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
    super();
this.x.set(x1);
this.y.set(y1);

this.x2 = new AniNumber(x2);
this.y2 = new AniNumber(y2);
this.lineWidth = new AniNumber(2);
this.color = color;
this.drawLayer = DrawLayer.MiddleGround;
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
    p.xPerc(this.x.value()),
    p.yPerc(this.y.value()),
    p.xPerc(this.x2.value()),
    p.yPerc(this.y2.value()),
    this.style
)
return true;
}


}//class