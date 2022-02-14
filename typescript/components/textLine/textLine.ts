import {Component,Pack,Style,Transition } from "../../bilzaa2d/index.js";

import DataFn , {TextLineData} from "./DataFn.js";

export default class TextLine extends Component {
    
    compData:Transition<TextLineData>;
    styleText:Style;
constructor (){
    super();
    this.styleText = new Style();
    this.compData = new Transition(DataFn);
}
width( p: Pack ): number {
return p.charsWidth(this.compData.data.content,this.styleText.fontSize, this.styleText.fontName);
}
height(p: Pack): number {
return p.charsWidth("Xi",this.styleText.fontSize, this.styleText.fontName);

}
draw(p: Pack): boolean {
    // p.drawBackground("green");
    
    p.drawText(this.compData.data.content,
        p.xPerc(this.compData.data.x),
        p.yPerc(this.compData.data.y),this.styleText);
    return true;
}
update(frame: number, p: Pack): boolean {
this.compData.apply(frame); //--important!!
return true;    
}

}