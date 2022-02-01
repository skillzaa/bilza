import Pack from "../pack/pack.js";
import Style from "../style/style.js";
import {DrawLayer} from "./drawLayer.js";


export default interface IDrawable{
    drawLayer:DrawLayer;
    styleTransitions : Style[];
    style:Style;
    frameStart :number;
    frameEnd :number;   
    width(p :Pack):number;
    height(p :Pack):number;
    draw(p :Pack):boolean; 
    update(frame :number, p :Pack):boolean; 
}
