import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import LineSegDb from "./lineSegDb.js";
import Vertex from "./vertex.js";
//-----------------------------------------------------
export default class LineSeg extends CompEngine  {
protected filled :boolean;
protected closed :boolean;
protected startX :number;
protected startY :number;

private lineWidth :number;
public data :Vertex[];

constructor (lineSegDb :LineSegDb ,pack :Pack){ 
    super(lineSegDb,pack);
    //-The startX and startY is the start of line segment. It is not the comp.x or comp.y BUT it is in ref to comp.x and comp.y
    this.startX = lineSegDb.startX;
    this.startY = lineSegDb.startY;
    //--
    this.data = lineSegDb.data;
    //--
    this.style.lineCap = lineSegDb.getLineCap(); 
    this.style.lineDash = lineSegDb.getLineDash(); 
    this.style.lineJoin = lineSegDb.getLineJoin(); 
    this.lineWidth = lineSegDb.lineWidth; 
        //--
    this.filled = lineSegDb.filled;
    this.closed = lineSegDb.closed;
    //--- there is some error the x is not being set
    // this.x.set(lineSegDb.x.value());
    // this.y.set(lineSegDb.y.value());
    }
    
/**
 * There is no update since nothing happens internally once it is drawn. The best part about this comps is that it just uses the lib basic comp props only
 */
// update(msDelta: number, p: Pack): boolean {
//     super.update(msDelta,p);
//     return true;
// }

draw(p:Pack):boolean{
this.preDraw(p);    
//---------------------style---------------
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
this.style.lineWidth = this.lineWidth;
//------------------------------------------
const wdFactor = this.width.value()/100;
const htFactor = this.height.value()/100;
//--first command after beginPath is always considered as goto
p.beginPath();
p.moveTo(
    this.contentX() + (wdFactor *  this.startX),
    this.contentY() + (htFactor *  this.startY)
    );
    
for (let i = 0; i < this.data.length; i++) {
    const item = this.data[i];

    if (item.command == "lineTo"){
        p.lineTo(
            this.contentX() + (wdFactor *  item.x),
            this.contentY() + (htFactor *  item.y),
            this.style);
    }else if (item.command == "moveTo"){
        p.moveTo(
            this.contentX() + (wdFactor *  item.x),
            this.contentY() + (htFactor *  item.y),
            );
    }else if (item.command == "fill"){
        if (this.filled == true){ //if not filled dont run local fill
            p.fill(this.style);
        }
    }
        
}    
////////////////--closing--sequence
        if (this.filled == true){
            //--if this line create problems just use p.ctx.fill()
            p.fill(this.style);
            p.closePath(); // fill will auto call closePath 
        }else {
            //---This will close the path by drawing a line if the path is not already closed
            if (this.closed == true){
                p.closePath();
            }
            p.stroke(); //stroke is after close path
        }
/////////////////////////////////////////////////////
this.postDraw(p);
return true;
}


}