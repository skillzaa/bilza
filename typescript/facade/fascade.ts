import IComponent  from "./IComponent.js";
import getCanvasElement from "../functions/getCanvasElement.js";
import StartTimeObj from "./compDB/startTimeObj.js";
import EndTimeObj from "./compDB/endTimeObj.js";
import BaseCompDb from "./compDB/compDb.js";
import CompFactory from "./compFactory.js";

///////////////////////////////////////////////////

export default class Fascade {
public readonly canvasId :string;
public readonly canvasWidthPerc :number;
public readonly canvas :HTMLCanvasElement;
public readonly canvasWidth :number;
public readonly canvasHeight :number;
private comps :IComponent[];
//////////////////////////////////////////////
constructor(canvasId :string="bilza",canvasWidthPerc :number=70){
this.comps = [];    
this.canvasId = canvasId;
this.canvasWidthPerc = canvasWidthPerc;
this.canvas = getCanvasElement(this.canvasId);

// this.canvasWidth = this.canvas.width;
this.canvasWidth = 680;
this.canvasHeight = 320;
}

add(secStart :number,secEnd :number):CompFactory{
const cf = new CompFactory(secStart,secEnd,this.comps,"add",this.canvasWidth,this.canvasHeight);
return cf;
}

    
}