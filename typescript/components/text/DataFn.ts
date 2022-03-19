import {FontNames} from "../../index.js";
 
export class ObjectData {
frameStart:number;
x :number;
y :number;
//at the heart of a box system is either text or an image at the moment this is text
content:string; 
//--width of each 4 rectangles
widthMargin :number;
widthBorder :number;
widthPadding :number;

flagDrawMargin : boolean;
flagDrawBorder : boolean;
flagDrawPadding : boolean;
flagDrawContentArea : boolean;
flagDrawBoundingRectangle : boolean;
flagDrawText : boolean;

//--colors for each of the 4 blocks and for text
colorMargin :string;
colorBorder :string;
colorPadding :string;
colorContentBg :string;

fontColor :string;
fontSize :number;
fontFamily :FontNames;

constructor(){
this.frameStart =0;
this.x = 50;
this.y = 50;
this.content = "text!"; 
this.widthMargin = 0;
this.widthBorder = 0;
this.widthPadding = 0;
 
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
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}


export class CalcData {

marginX:number;    
marginY:number;  
borderX:number;    
borderY:number;
paddingX:number;    
paddingY:number; 
contentAreaX:number;    
contentAreaY:number; 
//-------------------
contentWidth :number;
contentHeight :number;

constructor(){
this.marginX = 0;     
this.marginY = 0;   
this.borderX = 0;     
this.borderY = 0; 
this.paddingX = 0;     
this.paddingY = 0;  
this.contentAreaX = 0;     
this.contentAreaY = 0;  
//.........
this.contentWidth = 0;
this.contentHeight = 0;

}
};