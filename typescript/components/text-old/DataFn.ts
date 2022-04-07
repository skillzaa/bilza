import {FontNames} from "../../Bilza.js";
 
export class ObjectData {
msStart:number;
x :number;
y :number;
//at the heart of a box system is either text or an image at the moment this is text
content:string; 
//--width of each 4 rectangles
widthMargin :number;
widthBorder :number;
widthPadding :number;
boundingRectXYExtra :number[];
 
flagDrawMargin : boolean;
flagDrawBorder : boolean;
flagDrawPadding : boolean;
flagDrawContentArea : boolean;
flagDrawBoundingRectangle : boolean;
flagDrawText : boolean;
flagTextShadow : boolean;
flagBoundingRectShadow : boolean;

//--colors for each of the 4 blocks and for text
colorBoundingRect :string;
colorMargin :string;
colorBorder :string;
colorPadding :string;
colorContentBg :string;
 
fontColor :string;
fontSize :number;
fontFamily :FontNames;
////////////////////////////////////
//--text shadow
textShadowColor : string;
textShadowOffsetX : number;
textShadowOffsetY :number;
textShadowBlur :number;

//--bounding rect shadow
boundingRectShadowColor : string;
boundingRectShadowOffsetX : number;
boundingRectShadowOffsetY :number;
boundingRectShadowBlur :number;


////////////////////////////////////
constructor(){
this.msStart =0;
this.x = 50;
this.y = 50;

this.content = "text!"; 

this.widthMargin = 0;
this.widthBorder = 0;
this.widthPadding = 0;
 
this.boundingRectXYExtra = [50,50];
this.colorBoundingRect = "black";
this.colorMargin = "red";
this.colorBorder = "green";
this.colorPadding = "blue";
this.colorContentBg = "yellow";

this.fontColor = "black";
this.fontSize = 32;
this.fontFamily = FontNames.Courier;
//-----
this.flagDrawMargin = false;
this.flagDrawBorder = false;
this.flagDrawPadding = false;
this.flagDrawContentArea = false;
this.flagDrawBoundingRectangle = false;
this.flagDrawText = true; // kep this true

this.flagTextShadow =  false;
this.flagBoundingRectShadow  = false;

//--text shadow
this.textShadowColor = "grey";
this.textShadowOffsetX = 10;
this.textShadowOffsetY = 10;
this.textShadowBlur = 5;
//--Bounding Rect shadow
this.boundingRectShadowColor = "grey";
this.boundingRectShadowOffsetX = 15;
this.boundingRectShadowOffsetY = 15;
this.boundingRectShadowBlur = 5;

}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}


