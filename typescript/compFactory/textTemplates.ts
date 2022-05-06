import {IComponent,FontNames} from "../Bilza.js";
import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";
import Fn from "../functions/fn.js";

export default class TextTemplates {
private insert :(comp :IComponent)=>IComponent;

private util :Fn; 

constructor(insert :(comp :IComponent)=>IComponent){
    this.insert = insert;
this.util = new Fn();
}


h1(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",colorHax :string="#000000"):Text{
let txt = new Text(startTimeSeconds,endTimeSeconds,content,colorHax,50,5);
//----very imp
this.insert(txt);
// txt.d.x  =  50;  inserted directly into txt
// txt.d.y  =  4;  inserted directly into txt
txt.d.selected  =  false;
txt.d.visible  =  true;
txt.d.shadowColor  =  "#b2abab";
txt.d.shadowOffsetX  =  13;
txt.d.shadowOffsetY  =  9;
txt.d.shadowBlur  =  4;
txt.d.colorBoundingRectangle  =  "#000000";
txt.d.flagUseRelativeXY  =  true;
txt.d.dynWidth  =  80;
txt.d.dynHeight  =  25;
txt.d.flagUseDynResize  =  true;
txt.d.flagShrinkHeightToFit  =  true;
txt.d.xAlignment  =  txt.xAlignmentOptions.Mid;
txt.d.yAlignment  =  txt.yAlignmentOptions.Top;
txt.d.content  =  content;
txt.d.padding  =  8;
txt.d.border  =  4;
txt.d.colorBorder  =  colorHax;
txt.d.colorBg = lightenDarkenColor(colorHax,245);
txt.d.color  =  colorHax;
txt.d.fontSize  =  26;
txt.d.showContent  =  true;
txt.d.showBg  =  true;
txt.d.showTextShadow  =  false;
txt.d.showBgShadow  =  false;
txt.d.showBorderShadow  =  false;
txt.d.maxDisplayChars  =  200;

return txt;
}

jt(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="JUMBO TRON",colorHax :string="#008000"):Text{
let txt = new Text(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
txt.d.x =  50;
txt.d.y =  50;
txt.d.selected =  false;
txt.d.visible =  true;
txt.d.shadowColor =  "#b2abab";
txt.d.shadowOffsetX =  13;
txt.d.shadowOffsetY =  9;
txt.d.shadowBlur =  4;
txt.d.colorBoundingRectangle =  "#000000";
txt.d.xAlignment =  txt.xAlignmentOptions.Mid;
txt.d.yAlignment =  txt.yAlignmentOptions.Mid;
txt.d.content =  content;
txt.d.padding =  20;
txt.d.border =  10;
txt.d.dynWidth =  80;
txt.d.dynHeight =  100;
txt.d.colorBorder =  colorHax;
txt.d.colorBg = lightenDarkenColor(colorHax,245);
txt.d.color =  colorHax;
txt.d.fontSize =  45;
txt.d.showContent =  true;
txt.d.showBg =  true;
txt.d.showTextShadow =  true;
txt.d.showBgShadow =  true;
txt.d.showBorderShadow =  false;
txt.d.maxDisplayChars =  200;
txt.d.flagUseDynResize =  true;
txt.d.flagShrinkHeightToFit =  true;
txt.d.flagUseRelativeXY =  true;
    // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
    // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

return txt;
}
bulletPointMid(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="bulletPointMid",colorHax :string="#008000",y=50):Text{
let txt = new Text(startTimeSeconds,endTimeSeconds,content,colorHax,50,y);
//----very imp
this.insert(txt);
// txt.d.x =  50;
// txt.d.y =  50; directly inserted
txt.d.selected =  false;
txt.d.visible =  true;
txt.d.shadowColor =  "#b2abab";
txt.d.shadowOffsetX =  13;
txt.d.shadowOffsetY =  9;
txt.d.shadowBlur =  4;
txt.d.colorBoundingRectangle =  "#000000";
txt.d.xAlignment =  txt.xAlignmentOptions.Mid;
txt.d.yAlignment =  txt.yAlignmentOptions.Mid;
txt.d.content =  content;
txt.d.padding =  20;
txt.d.border =  0;
txt.d.dynWidth =  80;
txt.d.dynHeight =  30;
txt.d.colorBorder =  colorHax;
txt.d.colorBg = lightenDarkenColor(colorHax,245);
txt.d.color =  colorHax;
txt.d.fontSize =  45;
txt.d.showContent =  true;
txt.d.showBg =  true;
txt.d.showTextShadow =  false;
txt.d.showBgShadow =  false;
txt.d.showBorderShadow =  false;
txt.d.maxDisplayChars =  200;
txt.d.flagUseDynResize =  true;
txt.d.flagShrinkHeightToFit =  true;
txt.d.flagUseRelativeXY =  true;
    // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
    // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

return txt;
}

}//class