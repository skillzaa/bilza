import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplates.js";
import Text from "../text/text.js";

export default class SlideHnL extends Component<ObjectData> {
hdg :Text;
lis :Text[];
private tt :TextTemplates;
//Args==> content-color-x-y-widthPerc-heightPerc
constructor (contentHdg :string="The Title")
{
    super(DataFn);
    this.tt = new TextTemplates();
    this.hdg = this.tt.h1(contentHdg);
    this.hdg.d.y = 5;
    this.lis = [];
    this.drawLayer = DrawLayer.MiddleGround;
}
addItem(content :string){
 this.lis.push(this.tt.li(content,"#0000ff",null,50));
}
width(p:Pack):number {
return 0;
}
height(p:Pack):number {
return 0;
}

update(msDelta: number, p: Pack): boolean {
    return true;
}

draw(p:Pack):boolean{
this.hdg.draw(p);
this.drawLis(p);    
return true;
}
drawLis(p :Pack){
let y = this.d.listStartY;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].d.y = y;

            this.lis[i].draw(p);
            let ht = this.lis[i].height(p); 
            y +=  this.lis[i].d.heightPercent + this.d.listGapFactor;
        }    

}
}//class