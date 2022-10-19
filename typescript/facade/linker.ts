import { IComponent } from "../bilza.js";
import CompDb from "../compDb/compDb.js";

//-------------------------------------------
export default class Linker {
private readonly _startTime :number;
private readonly _endTime :number;
private _insertAction :"add"|"append" | "alwaysOn";
private readonly _canvasWidth :number;
private readonly _canvasHeight :number;
private comps :IComponent[];
public readonly charsWidth : (chars:string,fontSize:number,fontName:string)=> number;

////////////////////////////////////////////////////
constructor(startTime :number,endTime :number,comps :IComponent[],insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,charsWidth : (chars:string,fontSize:number,fontName:string)=> number ){

this.comps = comps;
this._startTime = startTime;
this._endTime = endTime;
this._insertAction = insertAction;
this._canvasWidth = canvasWidth;
this._canvasHeight = canvasHeight;
this.charsWidth = charsWidth;
}

public canvasWidth():number{return this._canvasWidth;}
public canvasHeight():number{return this._canvasHeight;}
public startTime():number {return this._startTime;}
public endTime():number {return this._endTime;}

public insertAction():"add"|"append" | "alwaysOn" {
    return this._insertAction;
}

public setInsertAction(insertAction :"add"|"append" | "alwaysOn"){
this._insertAction = insertAction;
}
public push(compDb :CompDb){
    this.comps.push(compDb);
}
// public charsWidth(chars:string,fontSize:number,fontName:string):number{
// return this._charsWidth(chars,fontSize,fontName); 
// }
//-------------    
}