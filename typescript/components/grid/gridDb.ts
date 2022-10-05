import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IGrid from "./IGrid.js";
import Pack from "../../pack/pack.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
import AniColorDb from "../../animationsFacade/aniColorDb/AniColorDb.js";
import AniBooleanDb from "../../animationsFacade/aniBooleanDb/AniBooleanDb.js";

import Grid from "./grid.js";

export default class GridDb extends CompDb implements IGrid {

lineDash =  [];
cellWidth : AniNumberDb;
cellHeight : AniNumberDb;
showHorizontalLines  : AniBooleanDb;
showVerticalLines : AniBooleanDb;
lineWidthVertical : AniNumberDb;
lineWidthHorizontal : AniNumberDb;
colorHorizontalLines : AniColorDb;
colorVerticalLines : AniColorDb;
colorNumbers : AniColorDb;
showNumbers : AniBooleanDb;
fontSize : AniNumberDb;


constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn", color :string="grey",cellWidth :number=10,cellHeight :number=10){

super(startTime,endTime,insertAction);

this.lineDash =  [];
this.cellWidth = new AniNumberDb(cellWidth);
this.cellHeight = new AniNumberDb(cellHeight);
this.showHorizontalLines = new AniBooleanDb(true);
this.showVerticalLines = new AniBooleanDb(true);
this.lineWidthVertical = new AniNumberDb(1);
this.lineWidthHorizontal = new AniNumberDb(1);
this.colorHorizontalLines = new AniColorDb(color);
this.colorVerticalLines = new AniColorDb(color);
this.colorNumbers = new AniColorDb("black");
this.showNumbers = new AniBooleanDb(false);
this.fontSize = new AniNumberDb(40);

//////////////////////////////
this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Grid(this,pack);
   return comp; 
}
    
}