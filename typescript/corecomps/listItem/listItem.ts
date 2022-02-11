import {Component,Pack,Style,Transition } from "../../bilzaa2d/index.js";

import DataFn , {TextData} from "./DataFn.js";

export default class ListItem extends Component {
    
content :string;
x :number;
y :number;
rectangleStyle :Style;
constructor (style = new Style()){
    super(style);
    this.content = "ffff";
    this.x = 0;
    this.y = 0;
    this.rectangleStyle = new Style();
}
width( p: Pack ): number {
return p.chars_width(this.content);
}
height(p: Pack): number {
return p.chars_width("Xi");    
}
draw(p: Pack): boolean {
let x = this.xPerc(this.x,p);
let y = this.yPerc(this.y,p);

    p.drawFillRect(x,y,this.width(p),this.height(p),this.rectangleStyle);

    p.drawText(this.content,
        x,y,this.style);
    return true;
}
update(frame: number, p: Pack): boolean {
this.applyStyleTransitons(frame); //--important!!
// if (this.style.fillStyle == "")
// this.compData.apply(frame); //--important!!
return true;    
}

}