import Pack from "../../pack/pack.js";

import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";

import Arrow from "./arrow.js";
import IArrow from "./IArrow.js";

import {AniNumberDb,AniPercDb,AniColorDb,AniBooleanDb} from "../../animations/animations.js";

import Linker from "../../facade/linker.js";
/////----------------------------------------------------------

export default class ArrowDb extends CompDb implements IArrow {
   x2 : AniPercDb;
   y2 : AniPercDb;
   headWidth :AniNumberDb;
   headHeight :AniNumberDb;
   headFilled :AniBooleanDb;
   colorHead :AniColorDb;
   lineWidth :AniNumberDb;    

constructor(linker :Linker,
x1 :number, y1 :number,x2 :number, y2 :number,color :string){

super(linker);

this.x.set(x1);
this.y.set(y1);

this.x2 = new AniPercDb(x2 , this.canvasWidth());
this.y2 = new AniPercDb(y2 , this.canvasHeight());


this.headWidth = new AniNumberDb(75);
this.headHeight = new AniNumberDb(40);
this.headFilled = new AniBooleanDb (false);

this.colorHead = new AniColorDb(color);
this.lineWidth = new AniNumberDb(1);    
this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Arrow(this,pack);
   return comp; 
}

///////////////////////////////////
/**
 * line comp is drawn differently- so we do not want to change align at all since that will add extra addition/sub in calc.
 * in the rotate align as well we should just change x value and not y
 */
public align(x :0|1|2|null=null, y?: number | null): void {
//--we do not align line comp so there is no add / sub in the x/y value    
    super.align(0,0);
}
public alignRotate(x :0|1|2|null=null, y?: number | null): void {
    super.alignRotate(x,0);
}

public pointTo(second :number, x :number, y : number){
    this.x2.goto(second,x);
    this.y2.goto(second,y);
     
}

/////////////
}