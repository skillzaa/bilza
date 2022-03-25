import Component from "./component/component.js";
import Pack from "./pack/pack.js";
import Style from "./pack/style.js";
import Bilza from "./bilza/bilza.js";
import {DrawLayer} from "./design/drawLayer.js";
import IDrawable from "./design/IDrawable.js";
import Transition from "./transition/transition.js";
import {FontNames} from "./design/fontNames.js";
import IMsStart from "./design/IMsStart.js";
////////////////////////////
import CompFactory from "./compFactory/compFactory.js";

export default Bilza;
// export default class bilza;
export {
Pack,
DrawLayer,
Style,
Transition,
Component,
IMsStart,
IDrawable,
FontNames,
CompFactory
}