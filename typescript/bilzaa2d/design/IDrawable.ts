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
    update(frame :number, p :Pack):boolean; 
    draw(p :Pack):boolean; 
}
