// import IComponent from "../../../design/IComponent.js";
// import Text from "./text.js";
// ///--later use util.lighte..
// import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
// import Fn from "../../functions/fn.js";
// export default class TextTemplates {

// constructor(){
// }

// h1(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Heading One",colorHax :string="#000000"):Text{
// let txt = new Text(duration,content,colorHax,50,5);
// txt.d.selected  =  false;
// txt.d.visible  =  true;
// txt.d.shadowColor  =  "#b2abab";
// txt.d.shadowOffsetX  =  13;
// txt.d.shadowOffsetY  =  9;
// txt.d.shadowBlur  =  4;
// txt.d.colorBoundingRectangle  =  "#000000";
// txt.d.flagUseRelativeXY  =  true;
// txt.d.dynWidth  =  80;
// txt.d.dynHeight  =  25;
// txt.d.flagUseDynResize  =  true;
// txt.d.flagShrinkHeightToFit  =  true;
// txt.d.xAlignment  =  txt.xAlignmentOptions.Mid;
// txt.d.yAlignment  =  txt.yAlignmentOptions.Top;
// txt.d.content  =  content;
// txt.d.padding  =  8;
// txt.d.border  =  4;
// txt.d.colorBorder  =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color  =  colorHax;
// txt.d.fontSize  =  26;
// txt.d.showContent  =  true;
// txt.d.showBg  =  true;
// txt.d.showTextShadow  =  false;
// txt.d.showBgShadow  =  false;
// txt.d.showBorderShadow  =  false;
// txt.d.maxDisplayChars  =  200;

// return txt;
// }
// // detailed(duration :number,endTimeSeconds:number=300,content :string="bgText",colorFontHax :string="#008000",colorBgHax :string="#008000",x :number=0,y:number=0,dynWidth:number=20,dynHeight:number=20):Text{

// // let txt = new Text(duration,content,colorFontHax,x,y,dynWidth,dynHeight);

// // //----very imp

// // txt.d.x =  0;
// // txt.d.y =  100;
// // txt.d.selected =  false;
// // txt.d.visible =  true;
// // txt.d.shadowColor =  "#b2abab";
// // txt.d.shadowOffsetX =  13;
// // txt.d.shadowOffsetY =  9;
// // txt.d.shadowBlur =  4;
// // txt.d.colorBoundingRectangle =  "#000000";
// // txt.d.xAlignment =  txt.xAlignmentOptions.Left;
// // txt.d.yAlignment =  txt.yAlignmentOptions.Bot;
// // txt.d.content =  content;
// // txt.d.padding =  5;
// // txt.d.border =  0;
// // txt.d.dynWidth =  20;
// // txt.d.dynHeight =  200;
// // txt.d.colorBorder =  colorHax;
// // txt.d.colorBg = lightenDarkenColor(colorHax,245);
// // txt.d.color =  colorHax;
// // txt.d.fontSize =  45;
// // txt.d.showContent =  true;
// // txt.d.showBg =  true;
// // txt.d.showTextShadow =  false;
// // txt.d.showBgShadow =  false;
// // txt.d.showBorderShadow =  false;
// // txt.d.maxDisplayChars =  200;
// // txt.d.flagUseDynResize =  true;
// // txt.d.flagShrinkHeightToFit =  true;
// // txt.d.flagUseRelativeXY =  true;
 
// // return txt;
// // }
// jt(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="JUMBO TRON",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp
// txt.d.x =  50;
// txt.d.y =  50;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Mid;
// txt.d.yAlignment =  txt.yAlignmentOptions.Mid;
// txt.d.content =  content;
// txt.d.padding =  20;
// txt.d.border =  10;
// txt.d.dynWidth =  80;
// txt.d.dynHeight =  100;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  true;
// txt.d.showBgShadow =  true;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// lb(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Left Bottom",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  0;
// txt.d.y =  100;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Left;
// txt.d.yAlignment =  txt.yAlignmentOptions.Bot;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// lm(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Left Mid",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  0;
// txt.d.y =  50;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Left;
// txt.d.yAlignment =  txt.yAlignmentOptions.Mid;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// lt(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Left Top",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  0;
// txt.d.y =  0;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Left;
// txt.d.yAlignment =  txt.yAlignmentOptions.Top;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }

// rb(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Right Bottom",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  100;
// txt.d.y =  100;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Right;
// txt.d.yAlignment =  txt.yAlignmentOptions.Bot;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// rm(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Right Mid",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  100;
// txt.d.y =  50;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Right;
// txt.d.yAlignment =  txt.yAlignmentOptions.Mid;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// rt(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Right Top",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  100;
// txt.d.y =  0;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Right;
// txt.d.yAlignment =  txt.yAlignmentOptions.Top;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// mt(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Mid Top",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  50;
// txt.d.y =  0;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Mid;
// txt.d.yAlignment =  txt.yAlignmentOptions.Top;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// mm(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Mid Mid",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  50;
// txt.d.y =  50;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Mid;
// txt.d.yAlignment =  txt.yAlignmentOptions.Mid;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// mb(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Mid Bottom",colorHax :string="#008000"):Text{
// let txt = new Text(duration,content,colorHax);
// //----very imp

// txt.d.x =  50;
// txt.d.y =  100;
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Mid;
// txt.d.yAlignment =  txt.yAlignmentOptions.Bot;
// txt.d.content =  content;
// txt.d.padding =  5;
// txt.d.border =  0;
// txt.d.dynWidth =  20;
// txt.d.dynHeight =  200;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }
// bulletPointMid(duration :number,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="bulletPointMid",colorHax :string="#008000",y=50):Text{
// let txt = new Text(duration,content,colorHax,50,y);
// //----very imp

// // txt.d.x =  50;
// // txt.d.y =  50; directly inserted
// txt.d.selected =  false;
// txt.d.visible =  true;
// txt.d.shadowColor =  "#b2abab";
// txt.d.shadowOffsetX =  13;
// txt.d.shadowOffsetY =  9;
// txt.d.shadowBlur =  4;
// txt.d.colorBoundingRectangle =  "#000000";
// txt.d.xAlignment =  txt.xAlignmentOptions.Mid;
// txt.d.yAlignment =  txt.yAlignmentOptions.Mid;
// txt.d.content =  content;
// txt.d.padding =  20;
// txt.d.border =  0;
// txt.d.dynWidth =  80;
// txt.d.dynHeight =  30;
// txt.d.colorBorder =  colorHax;
// txt.d.colorBg = lightenDarkenColor(colorHax,245);
// txt.d.color =  colorHax;
// txt.d.fontSize =  45;
// txt.d.showContent =  true;
// txt.d.showBg =  true;
// txt.d.showTextShadow =  false;
// txt.d.showBgShadow =  false;
// txt.d.showBorderShadow =  false;
// txt.d.maxDisplayChars =  200;
// txt.d.flagUseDynResize =  true;
// txt.d.flagShrinkHeightToFit =  true;
// txt.d.flagUseRelativeXY =  true;
//     // txt.d.colorBg = lightenDarkenColor("#0ab513",175);
//     // txt.d.colorBorder = lightenDarkenColor("#0ab513",20);

// return txt;
// }

// }//class