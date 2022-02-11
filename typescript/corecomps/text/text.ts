import {Component,Pack,Style,Transition } from "../../bilzaa2d/index.js";

import DataFn , {TextData} from "./DataFn.js";

export default class Text extends Component {
    
    compData:Transition<TextData>;
    // dataTransitions:TextData[]; //-dontuse not req
    styleText:Style;
constructor (){
    super();
    this.styleText = new Style();
    this.compData = new Transition(DataFn);
}
width( p: Pack ): number {
return p.chars_width(this.compData.data.content);
}
height(p: Pack): number {
return p.chars_width("Xi");    
}
draw(p: Pack): boolean {
    // p.drawBackground("green");
    p.drawText(this.compData.data.content,
        this.xPerc(this.compData.data.x,p),
        this.yPerc(this.compData.data.y,p),this.styleText);
    return true;
}
update(frame: number, p: Pack): boolean {
// this.compData.apply(frame); //--important!!
return true;    
}

}