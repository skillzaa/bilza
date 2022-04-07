import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import Rect from "../../components/rect/rect.js";
import Txt from "../../components/text/text.js";
// import Line
export default class TextComp extends Component<ObjectData> {
 txt :Txt;
 rect :Rect;
constructor (content :string = "Text!"){
    super(DataFn);
    this.txt = new Txt(content);
    this.txt.d.x = 50;
    this.txt.d.y = 50;
    this.rect = new Rect();
} 
width(p:Pack):number {
return 0;
}
height(p:Pack):number {
    return 0;
}
update(msDelta: number, p: Pack): boolean {
    this.rect.d.x = this.txt.d.x;
    this.rect.d.y = this.txt.d.y;
    return true;
}
draw(p:Pack):boolean{
   this.txt.draw(p);
   this.rect.draw(p);
return true;
}


}//class