import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplates.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import Text from "../text/text.js";
import List from "../list/list.js";

export default class SlideHL extends Component<ObjectData> {
hdg :Text;
list :List;

constructor (startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="The Title",color :string="#00ff37")
{
    super(DataFn);
    this.hdg = new Text(startTimeSeconds,endTimeSeconds,content,color,50,1);
    
    this.hdg.d.border = 2;
    this.hdg.d.xAlignment = this.hdg.xAlignmentOptions.Mid;
    this.hdg.d.yAlignment = this.hdg.yAlignmentOptions.Top;
    this.hdg.d.flagDrawBorder = true;
    // txt.d.colorBorder = bil.util.lightenDarkenColor("#e54e12",-20);
    // txt.d.colorBg = bil.util.lightenDarkenColor("#e54e12",175);
    this.hdg.d.flagDrawBg = true;
    this.hdg.d.dynWidth = 80;
    this.hdg.d.color = "#008000";
    this.hdg.d.dynHeight = 25;
    this.hdg.d.flagUseDynResize = true;
    this.hdg.d.flagShrinkHeightToFit = true;
    //------------------------------
    this.list = new List(0,6000,8,30,80);
    this.list.d.colorBg = "#e0e5e0";
    this.list.d.colorBorder = "#008000";
    this.list.d.colorItemBorder = "white";
    this.list.d.colorFont = "#015901";
    this.drawLayer = DrawLayer.MiddleGround;
    this.setStartTime(startTimeSeconds * 1000); //into mili sec
    this.setEndTime(endTimeSeconds * 1000);
     
}
init(p: Pack): boolean {
    this.hdg.init(p);
    this.list.init(p);
    return true;
}
addItem(content :string, startDim:boolean=true, unDimSecond :number = 2){
this.list.addItem(content);
// this.list.addItem("123456789-123456789");
//     this.list.addItem("2222222");
//     this.list.addItem("3333333");
//     this.list.addItem("4444444");
//     this.list.addItem("5555555");
// return this.list.; 
}

width(p:Pack):number {
return 0;
}
height(p:Pack):number {
return 0;
}
 
update(msDelta: number, p: Pack): boolean {
    // for (let i = 0; i < this.lis.length; i++) {
    //     const element = this.lis[i];
    //     element.applyTransition(msDelta);
    // }
    return true;
}

draw(p:Pack):boolean{
this.hdg.draw(p);
this.list.draw(p);    
return true;
}

}//class