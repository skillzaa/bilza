// import {Pack,DrawLayer } from "../../../Bilza.js";
import Component from "../../BaseComponent/Basecomponent.js";

// import DataFn,{ObjectData} from "./DataFn.js";
// import TextTemplates from "../../compFactory/textTemplates.js";
// import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
// import Text from "../text/text.js";
// import Para from "../para/para.js";

// let tt = new TextTemplates();
// export default class SlideHP extends Component<ObjectData> {
// hdg :Text;
// para :Para;

// constructor (startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="The Title",color :string="#00ff37")
// {
//     super(DataFn);
// this.hdg  = this.getHdg(startTimeSeconds,endTimeSeconds,content,color);
// //------------------------------
// this.para = new Para(startTimeSeconds,endTimeSeconds);
// this.setPara();
// //............................//
// this.drawLayer = DrawLayer.MiddleGround;
// this.setStartTime(startTimeSeconds * 1000); //into mili sec
// this.setEndTime(endTimeSeconds * 1000);
    
// }
// setPara(){
// this.para.d.y = 50;
// this.para.d.x = 5;
// this.para.d.border = 1;
// this.para.d.colorBorder = "blue";
// this.para.shadowsOn();
// }
// getHdg(startTimeSeconds :number,endTimeSeconds:number,content :string,color :string):Text{
// let txt = new Text(this.getStartTime(),this.getEndTime(),content,color);

// txt.d.x = 50;
// txt.d.y = 25;
// txt.d.border = 4;
// txt.d.margin = 0;

// // txt.d.widthPercent = 80;
// // txt.d.heightPercent = 15;

// txt.d.xAlignment = txt.xAlignmentOptions.Mid;
// txt.d.yAlignment = txt.yAlignmentOptions.Mid;

// // txt.d.dynamicFontSize = true; //if this is not true setFontSize will not work.also widthPercent etc should be set
// txt.d.showBg = true;
// txt.d.flagDrawBorder = true;
// txt.d.showBgShadow = true;

// txt.d.colorBg = lightenDarkenColor(color,60);
// txt.d.showBgShadow = true;
// return txt;
// }

// addLine(content :string){
// this.para.addLine(content);
// }

// draw(p:Pack):boolean{
// // this.hdg.setDynamicFontSize(p);
// this.hdg.draw(p);
// this.para.draw(p);    
// return true;
// }

// }//class