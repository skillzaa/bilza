import Pack  from "../pack/pack.js";
import Background from "../components/background/background.js";
import BackgroundDb from "../components/background/backgroundDb.js";


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export default class EngineDb {
public readonly canvasId :string;
public readonly canvasWidthPerc :number;
// public readonly canvas :HTMLCanvasElement;
public readonly canvasWidth :number;
public readonly canvasHeight :number;
// public readonly pack:Pack;
public backgroundDb :BackgroundDb;
//////////////////////////////////////////////
constructor(canvasId :string="bilza",canvasWidthPerc :number=70){
this.canvasId = canvasId;
this.canvasWidthPerc = canvasWidthPerc;
const pack = new Pack(this.canvasId,this.canvasWidthPerc);

this.canvasWidth =  pack.canvasWidth();
this.canvasHeight = pack.canvasWidth();

///--we need to have a background object as well
this.backgroundDb = new BackgroundDb(0,1,"alwaysOn","grey");
}


    
}
