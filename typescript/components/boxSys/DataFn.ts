import {FontNames,XAlignment,YAlignment} from "../../index.js";

export class ObjectData {
frameStart:number;
x :number;
y :number;
//at the heart of a box system is either text or an image at the moment this is text
content:string; 
//--width of each 4 rectangles
marginWidth :number;
borderWidth :number;
paddingWidth :number;

//--colors for each of the 4 blocks and for text
marginColor :string;
borderColor :string;
paddingColor :string;
contentBgColor :string;

fontColor :string;
fontSize :number;
fontFamily :FontNames;

constructor(){
this.frameStart =0;
this.x = 50;
this.y = 50;
this.content = "ABCDE"; 
this.marginWidth = 50;
this.borderWidth = 50;
this.paddingWidth = 50;

this.marginColor = "red";
this.borderColor = "black";
this.paddingColor = "blue";
this.contentBgColor = "grey";
this.fontColor = "crimson";
this.fontSize = 16;
this.fontFamily = FontNames.Courier;
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