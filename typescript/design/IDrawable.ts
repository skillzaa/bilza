import Pack from "../pack/pack.js";
import {DrawLayer} from "./drawLayer.js";

export default interface IDrawable{
    drawLayer:DrawLayer;
    width(p :Pack):number;
    height(p :Pack):number;
    draw(p :Pack,startingX :number, startingY :number):boolean; 
}
