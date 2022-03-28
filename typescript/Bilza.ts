import Component from "./component/component.js";
import Pack from "./pack/pack.js";
import Style from "./pack/style.js";
//--the name shd be Bilza and not BilzaEngine
import Bilza from "./engine/bilzaEngine.js";
import {DrawLayer} from "./design/drawLayer.js";
import IComponent from "./design/IComponent.js";
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
IComponent,
FontNames,
CompFactory
}