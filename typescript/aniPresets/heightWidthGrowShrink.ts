import { IComponent,hsl } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default function heightWidthGrowShrink(comp :BaseComponent){

comp.align(1,1);
// comp.x.set(50);
// comp.y.set(50);
comp.setxy(50);
comp.setPaddings(10);
comp.showBackground.set(true);
comp.colorBackground.set(hsl(60));
comp.width.set(10);
comp.height.set(10);
comp.border.set(5);
//-------------------------------
comp.width.oscillate(1,60,10,80,5);
comp.height.oscillate(1,60,10,80,5);    

return comp;
}