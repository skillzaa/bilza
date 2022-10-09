import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import LinesDb from "./linesDb.js";
import ILinesSubComp from "./ILinesSubComp.js";

///////////////
export default class Lines extends CompEngine {

data : ILinesSubComp[];    
    
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
    item.draw(p,this.xAligned(),this.yAligned() , this.compWidth(),this.compHeight());
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