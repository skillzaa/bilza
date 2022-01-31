import Pack from "../pack/pack.js";
import CtxData from "./ctxData.js";
import {DrawLayer} from "./drawLayer.js";


export default interface IDrawable{
    drawLayer:DrawLayer;
    transitions : CtxData[];
    ctxData:CtxData;
    frameStart :number;
    frameEnd :number;   
    width(p :Pack):number;
    height(p :Pack):number;
    draw(p :Pack):boolean; 
    update(frame :number, p :Pack):boolean; 
}
