import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CurveDb from "./linesDb.js";
import {AniNumber,AniString,AniBoolean,AniPerc,AniColor,} from "../../animations/animations.js";
import LineStruct from "./lineStruct.js";
import LinesDb from "./linesDb.js";

export default class Lines extends CompEngine {

data : LineStruct[];    
    
constructor ( linesDb :LinesDb ,pack :Pack){ 
super(linesDb,pack);
//---------------------------------------------------------------
this.data = linesDb.data;    
//---------------------------------------------------------------
}
  

draw(p:Pack):boolean{
    
this.preDraw(p);
//------------------------------------------
for (let i = 0; i < this.data.length; i++) {
    const line = this.data[i];
    this.style.fillStyle = line.color;    
    this.style.strokeStyle = line.color; 
    
    this.style.lineWidth = line.lineWidth; 
    
    // this.style.opacity = line.opacity; 
    
    this.style.lineCap =     line.lineCap;
    this.style.lineJoin =    line.lineJoin;
    this.style.lineDash =    line.lineDash;

    p.drawLine(
        
        this.xAligned() + this.resolveX(line.x1) ,
        this.yAligned() + this.resolveY(line.y1) ,

        this.xAligned() + this.resolveX(line.x2) ,
        this.yAligned() + this.resolveY(line.y2) ,
        
        this.style
    );
    
}

/////////////////////////////////////////////
this.postDraw(p); //its ok to keep
return true;
}


private resolveX(no :number):number{
return (this.width.value()/100) * no;
}
private resolveY(no :number):number{
return (this.height.value()/100) * no;
}

}//class