// import Pack from "../../pack/pack.js";
// import compEngine from "../../compEngine/compEngine.js";
// import CompDb from "../../compDb/compDb.js";
// import {AniNumberDb,AniBooleanDb, AniColorDb} from "../../animations/animations.js";
import CircleDb from "./circleDb.js";


export default class MarkerDb extends CircleDb {
   
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   
constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,x :number, y :number, color :string="red",radius :number=5){

//--in marker args are color and radius in circle its radius , color    
super(startTime,endTime,insertAction,canvasWidth,canvasHeight,radius,color);
this.x.set(x);
this.y.set(y);
this.filled.set(true); 
// this.width.setResp(false);
this.showBackground.set(false);
} 
    
}