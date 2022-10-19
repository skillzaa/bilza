import Pack  from "../pack/pack.js";
import BackgroundDb from "../components/background/backgroundDb.js";


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export default class EngineDb {
public readonly canvasId :string;
public readonly canvasWidthPerc :number;
// public readonly canvas :HTMLCanvasElement;
public readonly canvasWidth :number;
public readonly canvasHeight :number;
public charsWidth : (chars:string,fontSize:number,fontName:string)=> number;

// public readonly pack:Pack;
// public backgroundDb :BackgroundDb;

//////////////////////////////////////////////
constructor(canvasId :string="bilza",canvasWidthPerc :number=70){
this.canvasId = canvasId;
this.canvasWidthPerc = canvasWidthPerc;
const pack = new Pack(this.canvasId,this.canvasWidthPerc);
// this.responsiveMode = true;
//---This is where the canvas width and height begin
this.canvasWidth =  pack.canvasWidth();
this.canvasHeight = pack.canvasHeight(); //--took me one hour
//---The engineDb gets charsWidth 
this.charsWidth = pack.charsWidth.bind(pack);
///--we need to have a background object as well
// this.backgroundDb = new BackgroundDb(0,0,"alwaysOn",
// this.canvasWidth,this.canvasHeight,"#efeee3");

}

// setResponsiveMode(responsiveMode :boolean,canvasWidth :number| null=null, canvasHeight :number | null=null){
// if (responsiveMode==true && canvasWidth == null){throw new Error("for responsive mode providing canvas width is must");}
// this.responsiveMode = responsiveMode;
// }





///////////////////////////////////////////
}