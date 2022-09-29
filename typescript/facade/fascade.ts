import { IComponent } from "../../bilza.js";
import getCanvasElement from "../../functions/getCanvasElement.js";
import StartTimeObj from "./baseComponentDB/startTimeObj.js";
import EndTimeObj from "./baseComponentDB/endTimeObj.js";
import BaseCompDb from "./baseComponentDB/baseCompDb.js";
///////////////////////////////////////////////////

export default class Fascade {
public readonly canvasId :string;
public readonly canvasWidthPerc :number;
public readonly canvas :HTMLCanvasElement;
public readonly canvasWidth :number;
public readonly canvasHeight :number;
private comps :BaseCompDb[];
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


addTextComp(startTime :number | StartTimeObj, endTime :number | EndTimeObj){
const base = new BaseCompDb(startTime,endTime,this.canvasWidth,this.canvasHeight);
this.comps.push(base);
console.log(this.comps);

}


    
}