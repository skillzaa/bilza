import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IGrid from "./IGrid.js";
import Pack from "../../pack/pack.js";

import {AniNumberDb,AniPercDb,AniBooleanDb, AniColorDb} from "../../animations/animations.js";
import Linker from "../../facade/linker.js";

import Grid from "./grid.js";

export default class GridDb extends CompDb implements IGrid {

lineDash =  [];
cellWidth : AniPercDb;
cellHeight : AniPercDb;
showHorizontalLines  : AniBooleanDb;
showVerticalLines : AniBooleanDb;
lineWidthVertical : AniNumberDb;
lineWidthHorizontal : AniNumberDb;
colorHorizontalLines : AniColorDb;
colorVerticalLines : AniColorDb;
colorNumbers : AniColorDb;
showNumbers : AniBooleanDb;
fontSize : AniNumberDb;


constructor(linker :Linker, color :string="grey",cellWidth :number=10,cellHeight :number=10){



super(linker);

this.lineDash =  [];

//---works likemagin-setResp
this.cellWidth = new AniPercDb(cellWidth,this.canvasWidth());
// this.cellWidth.setResp(true,this.canvasWidth());
//---works likemagin-setResp
this.cellHeight = new AniPercDb(cellHeight , this.canvasHeight());
// this.cellHeight.setResp(true,this.canvasHeight());

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
this.width.set(100);
this.height.set(100);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Grid(this,pack);
   return comp; 
}
    
}