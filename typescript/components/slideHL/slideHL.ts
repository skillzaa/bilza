import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplWrapper.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import Text from "../text/text.js";
import List from "../list/list.js";

export default class SlideHL extends Component<ObjectData> {
hdg :Text;
list :List;

constructor (startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="The Title",color :string="#00ff37")
{
    super(DataFn);
    this.setStartTime(startTimeSeconds * 1000); //into mili sec
    this.setEndTime(endTimeSeconds * 1000); 
    
    this.hdg =  this.getHdg();
    this.list = this.getList();
    this.drawLayer = DrawLayer.MiddleGround;

        
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
    this.hdg.update(msDelta,p);
    this.list.update(msDelta,p);    
    return true;
}

draw(p:Pack):boolean{
this.hdg.draw(p);
this.list.draw(p);    
return true;
}
private getList():List{
  //------------------------------
  let lis = new List(0,6000,8,30,80);
  lis.d.colorBg = "#e0e5e0";
  lis.d.colorBorder = "#008000";
  lis.d.colorItemBorder = "white";
  lis.d.colorFont = "#015901";
return lis;
}
private getHdg(content :string="The Title",color :string="#00ff37"):Text{

let hdg = new Text(this.getStartTime(),this.getEndTime(),
content,color,50,1);
    
    hdg.d.border = 2;
    hdg.d.xAlignment = hdg.xAlignmentOptions.Mid;
    hdg.d.yAlignment = hdg.yAlignmentOptions.Top;
    // txt.d.colorBorder = bil.util.lightenDarkenColor("#e54e12",-20);
    // txt.d.colorBg = bil.util.lightenDarkenColor("#e54e12",175);
    hdg.d.showBg = true;
    hdg.d.dynWidth = 80;
    hdg.d.color = "#008000";
    hdg.d.dynHeight = 25;
    hdg.d.flagUseDynResize = true;
    hdg.d.flagShrinkHeightToFit = true;
    return hdg;
}
}//class