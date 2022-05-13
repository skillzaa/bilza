import Component from "./BaseComponent/component.js";
import Pack from "./pack/pack.js";
import Style from "./style.js";
//--the name shd be Bilza and not BilzaEngine
import Bilza from "./engine/00bilzaEngine.js";
import {DrawLayer} from "./design/drawLayer.js";
import IComponent from "./BaseComponent/IComponent.js";
import Transition from "./transition/transition.js";
import {FontNames} from "./design/fontNames.js";
import IMsStart from "./design/IMsStart.js";
////////////////////////////
import CompFactory from "./compFactory/compFactory.js";

export default Bilza;

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