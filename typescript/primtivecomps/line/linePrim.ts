import Pack from "../../pack/pack.js";
import Style from "../../pack/style.js";
import IPrimtive from "../IPrimtive.js";

export default class LinePrim implements IPrimtive {
    x1 :number;    
    y1 :number;    
    x2 :number;    
    y2 :number;    
    color :string;    
    lineWidth :number;    
    // opacity :number;    
    lineCap  :0 | 1 | 2;    
    lineJoin :0 | 1 | 2;    
    lineDash :[line:number, gap:number];
/////////////////////
style :Style;    
    //.....
    constructor(
        x1 :number,y1 :number,x2 :number,y2 :number,
        color :string = "black",
        lineWidth :number = 4,
        lineCap :0|1|2,
        lineJoin :0|1|2 = 0,
        lineDash:[number,number] = [1,0]
        ){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.lineJoin = lineJoin;
    this.lineDash = lineDash;

this.style = new Style();    
}
    
draw(p :Pack):boolean{

this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth; 

this.style.lineCap = this.lineCap; 
this.style.lineJoin = this.lineJoin; 
this.style.lineDash = this.lineDash; 
this.style.opacity = (100);

//-----------------------------preDrawEnds
p.drawLine(
    this.x1 ,
    this.y1 ,
    this.x2,
    this.y2,
    this.style
);
return true;
}//draw    
    
}