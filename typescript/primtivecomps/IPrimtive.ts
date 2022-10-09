import Pack from "../pack/pack.js";
import Style from "../pack/style.js";


export default interface IPrimtive {
// style :Style;
draw(p :Pack):boolean;
}