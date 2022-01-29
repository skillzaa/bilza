import Pack from "../pack/pack.js";

export default interface IDrawable{
    width(p :Pack):number;
    height(p :Pack):number;
    draw(p :Pack,startingX :number, startingY :number):boolean; 
}
