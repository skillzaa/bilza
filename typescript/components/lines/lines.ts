import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CurveDb from "./linesDb.js";
import {AniNumber,AniString,AniBoolean,AniPerc,AniColor,} from "../../animations/animations.js";
import LineStruct from "./lineStruct.js";
import LinesDb from "./linesDb.js";
import IPrimtive from "../../primtivecomps/IPrimtive.js";

///////////////
export default class Lines extends CompEngine {

data : IPrimtive[];    
    
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
    const item = this.data[i];
    
    
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