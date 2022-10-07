import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Arrow from "./arrow.js";
import Pack from "../../pack/pack.js";
import {AniNumberDb,AniColorDb,AniBooleanDb} from "../../animationsFacade/animationsDb.js";
import IArrow from "./IArrow.js";


export default class ArrowDb extends CompDb implements IArrow {
   x2 : AniNumberDb;
   y2 : AniNumberDb;
   headWidth :AniNumberDb;
   headHeight :AniNumberDb;
   headFilled :AniBooleanDb;
   colorHead :AniColorDb;
   lineWidth :AniNumberDb;    

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,
x1 :number, y1 :number,x2 :number, y2 :number,color :string){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);

this.x.set(x1);
this.y.set(y1);

this.x2 = new AniNumberDb(x2);
this.y2 = new AniNumberDb(y2);

this.x2.setResp(true,this.canvasWidth() );
this.y2.setResp(true,this.canvasHeight() );

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