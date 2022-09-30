///////////////////////////////////////////////////

import { Pack } from "../bilza.js";

//--comps is not part of engine db this is just global data for engine
export default class EngineDb {
public readonly canvasId :string;
public readonly canvasWidthPerc :number;
// public readonly canvas :HTMLCanvasElement;
public readonly canvasWidth :number;
public readonly canvasHeight :number;
public readonly pack:Pack;
//////////////////////////////////////////////
constructor(canvasId :string="bilza",canvasWidthPerc :number=70){
this.canvasId = canvasId;
this.canvasWidthPerc = canvasWidthPerc;
this.pack = new Pack(this.canvasId,this.canvasWidthPerc);

this.canvasWidth =  this.pack.canvasWidth();
this.canvasHeight = this.pack.canvasWidth();
}


    
}