import {Pack,BaseComponent} from "../Bilza.js";
import Text from "./text/text.js";
export default class FrameCounter extends BaseComponent {
    textComp :Text;
constructor (color :string="#008000",bgColor :string ="#d1d0c8"){ 
    super();
    this.textComp = new Text("sec:00","#008000");
    this.textComp.color = color ; 
    this.textComp.colorBg = bgColor ; 
}
init(p: Pack): boolean {
    super.init(p);
    this.
return true;

}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.textComp.content = "sec:" +(Math.ceil(msDelta/1000)).toString();
    return true;
}
draw(p:Pack):boolean{
this.textComp.draw(p);
//    p.drawFillRect(
//     this.textComp.loc.x(),
//     this.textComp.loc.y(),
//     this.textComp.width(),
//     this.textComp.height(),
//     this.style
//     );
return true;
}

}