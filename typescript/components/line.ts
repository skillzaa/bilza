import {Pack,BaseComponent,DrawLayer} from "../bilza.js";

export default class Line extends BaseComponent {
    x1 :number;
    y1 :number;
    x2 :number;
    y2 :number;
    lineWidth :number;
    
    color :string;
constructor (x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
    super();
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
this.lineWidth = 2;
this.color = color;
    this.drawLayer = DrawLayer.MiddleGround;
}


draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth; 
p.drawLine(
    p.xPerc(this.x1),
    p.yPerc(this.y1),
    p.xPerc(this.x2),
    p.yPerc(this.y2),
    this.style
)
return true;
}


}//class