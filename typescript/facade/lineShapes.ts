import LineShapeFactory from "./lineShapesFactory.js";
import CompDb from "../compDb/compDb.js";


export default class LineShapes {
private comps :CompDb[];
private _canvasHeight :number;
private _canvasWidth :number;

constructor(canvasWidth :number, canvasHeight :number, comps :CompDb[] ){
this.comps = comps;
this._canvasWidth = canvasWidth;
this._canvasHeight = canvasHeight;
}

//--does not need ComponentPack since this is DB object
add(secStart :number,secEnd :number):LineShapeFactory{
const cf = new LineShapeFactory(secStart,secEnd,this.comps,"add",this._canvasWidth,this._canvasHeight);
return cf;
}

alwaysOn():LineShapeFactory{
const cf = new LineShapeFactory(0,1,this.comps,"alwaysOn",this._canvasWidth,this._canvasHeight);
return cf;
}

append(duration :number):LineShapeFactory{
const cf = new LineShapeFactory(0,duration,this.comps,"append",this._canvasWidth,this._canvasHeight);
return cf;
}


}