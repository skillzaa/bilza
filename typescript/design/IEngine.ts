import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";

/**
 * This is the Draw engine of the library. Its main purpose is to create and use The Pack.
 */

export default interface IEngine{
    draw(p :Pack):boolean; 

}
