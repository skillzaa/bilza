import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplates.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import Text from "../text/text.js";
import Para from "../para/para.js";

let tt = new TextTemplates();
export default class SlideHP extends Component<ObjectData> {
hdg :Text;
para :Para;

constructor (startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="The Title",color :string="#00ff37")
{
    super(DataFn);
this.hdg = new Text(startTimeSeconds,endTimeSeconds,content,color);
this.setHdg(color);
// this.hdg = tt.jt(0,60,"Jumbo Tron","yellow","green");
    //------------------------------
    this.para = new Para(startTimeSeconds,endTimeSeconds);
    this.setPara();
    //............................//
    this.drawLayer = DrawLayer.MiddleGround;
    this.setStartTime(startTimeSeconds * 1000); //into mili sec
    this.setEndTime(endTimeSeconds * 1000);
    
}
setPara(){
this.para.d.y = 50;
this.para.d.x = 5;
this.para.d.border = 1;
this.para.d.colorBorder = "blue";
this.para.shadowsOn();
}
setHdg(color :string){
this.hdg.d.x = 50;
this.hdg.d.y = 50;
this.hdg.d.margin = 0;
this.hdg.d.xAlignment = this.hdg.xAlignmentOptions.Mid;
this.hdg.d.yAlignment = this.hdg.yAlignmentOptions.Mid;
this.hdg.d.autoScaleFontSize = true;
this.hdg.d.flagDrawBg = true;
this.hdg.d.flagDrawBorder = true;
this.hdg.d.flagBgShadow = true;
this.hdg.d.border = 4;
this.hdg.d.colorBg = lightenDarkenColor(color,60);
}

addLine(content :string){
this.para.addLine(content);
}

draw(p:Pack):boolean{
this.hdg.setFontSize(p);    
this.hdg.draw(p);
this.para.draw(p);    
return true;
}

}//class