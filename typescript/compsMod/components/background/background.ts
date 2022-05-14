import {Pack,DrawLayer } from "../../../Bilza.js";
import Component from "../../BaseComponent/component.js";

import DataFn,{ObjectData} from "./DataFn.js";
 
export default class Background extends Component<ObjectData> {

constructor (color :string = "#efeee3"){
    super(DataFn);
    this.d.color = color;
    this.drawLayer = DrawLayer.BackGround;
}
width(p:Pack):number {
return  0;
    // return this.d.width;
}
height(p:Pack):number {
return  0;
}

draw(p:Pack):boolean{
p.drawBackground(this.d.color);
return true;
}

}//class