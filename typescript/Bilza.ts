import Bilza from "./bilzaMod/00bilza.js";
import CompFactory from "./components/compFactory.js";
//--A seperate package on top of which Engine build abstractions
import Pack from "./pack/pack.js";
//--Required by Engine and Comp both
import {DrawLayer} from "./design/drawLayer.js";
//--Export IComponent since developers will use it;
import IComponent from "./design/IComponent";
import BaseComponent from "./BaseComponent/BaseComponent.js"

import { XAlignment } from "./design/xAlignment.js";
import { YAlignment } from "./design/yAlignment.js";

import AnimatedNoBase from "./BaseComponent/animation/aniNumber/animatedNoBase/AnimatedNoBase.js";

import TextTempl from "./templ/textTempl.js";

export default Bilza;

export {
Pack,
DrawLayer,
AnimatedNoBase,
IComponent,
Bilza,
BaseComponent,
CompFactory,
XAlignment,
YAlignment,
TextTempl
}