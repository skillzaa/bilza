import {IComponent,FontNames} from "../Bilza.js";
import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";

export default class TextTemplates {
private addToArray :IComponent[];
 
constructor(comps :IComponent[]=[]){
this.addToArray = comps;
}

// h1(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",x:number=0,y:number =0, widthPercent:number=10,heightPercent:number=10):Text{
//     let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y, widthPercent,heightPercent);
// txt.setStartTime(startTimeSeconds * 1000); //into mili sec
// txt.setEndTime(endTimeSeconds * 1000);
// //----very imp
//     this.addToArray.push(txt);

// txt.d.xAlignment = txt.xAlignmentOptions.Mid;
// txt.d.yAlignment = txt.yAlignmentOptions.Top;
// txt.d.padding = 5;
// txt.d.margin = 5;
// txt.d.color = color;
// txt.d.colorBorder = color;
// // txt.d.colorBg = lightenDarkenColor(color,10);
// txt.d.colorBg = lightenDarkenColor(color,1); ///????

// txt.d.flagDrawBorder = true;
// txt.d.flagDrawBg = true;
// txt.shadowsOn();
// txt.d.autoScaleFontSize = true;
// return txt;
// }
jt(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",colorBg :string|null =null, x:number=50,y:number =45, widthPercent:number=80,heightPercent:number=25):Text{

let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y, widthPercent,heightPercent);
//----very imp
this.addToArray.push(txt);
//--------------------------------------
txt.d.margin = 0;
txt.d.xAlignment = txt.xAlignmentOptions.Mid;
txt.d.yAlignment = txt.yAlignmentOptions.Mid;
txt.d.autoScaleFontSize = true;
txt.d.flagDrawBg = true;
txt.d.flagDrawBorder = true;
txt.d.flagBgShadow = true;
txt.d.border = 4;
if (colorBg !==null) {
    txt.d.colorBg = colorBg;
}
//--------------------------------------
return txt;
}
h1(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",colorBg :string|null =null, x:number=50,y:number =2, widthPercent:number=60,heightPercent:number=10):Text{

let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y, widthPercent,heightPercent);
//----very imp
this.addToArray.push(txt);
//--------------------------------------
txt.d.margin = 0;
txt.d.xAlignment = txt.xAlignmentOptions.Mid;
txt.d.yAlignment = txt.yAlignmentOptions.Top;
txt.d.autoScaleFontSize = true;
txt.d.flagDrawBg = true;
txt.d.flagDrawBorder = true;
txt.d.flagBgShadow = true;
txt.d.border = 2;
//txt.setShadow(20,20,20,"red");
txt.d.shadowBlur = 4;
txt.d.shadowOffsetX = 6;
txt.d.shadowOffsetY = 6;
txt.d.colorShadow = "grey";
// txt.setShadow(80,30,30,"red");
if (colorBg !==null) {
    txt.d.colorBg = colorBg;
}
//--------------------------------------
return txt;
}
li(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",colorBg :string|null =null, x:number=50,y:number =35, widthPercent:number=75,heightPercent:number=8):Text{

let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y, widthPercent,heightPercent);
//----very imp
this.addToArray.push(txt);
//--------------------------------------
txt.d.margin = 0;
txt.d.xAlignment = txt.xAlignmentOptions.Mid;
txt.d.yAlignment = txt.yAlignmentOptions.Top;
txt.d.autoScaleFontSize = true;
txt.d.flagDrawBg = false;
txt.d.flagDrawBorder = false;
txt.d.flagBgShadow = false;
txt.d.border = 2;
//txt.setShadow(20,20,20,"red");
txt.d.shadowBlur = 4;
txt.d.shadowOffsetX = 6;
txt.d.shadowOffsetY = 6;
txt.d.colorShadow = "grey";
// txt.setShadow(80,30,30,"red");
if (colorBg !==null) {
    txt.d.colorBg = colorBg;
}
//--------------------------------------
return txt;
}

}//class