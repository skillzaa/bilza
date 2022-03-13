import {FontNames,XAlignment,YAlignment} from "../../index.js";

export class ObjectData {
frameStart:number;
x :number;
y :number;
content :string;
//--Fonts    
xAlignment = XAlignment.Mid; 
yAlignment = YAlignment.Top; 
//--Fonts  
fontSize :number;
fontFamily : FontNames;    
fontColor : string;    
//--underline   
underline = false;
underlineExtend = false ;
underlineColor = "black";
underlineWidth = 2;
//--Overline
overline = false;
overlineExtend = false ;
overlineColor = "black";
overlineWidth = 2;
// //--Highlight
// highlight = false;
// highlightExtend = false ;
// highlightColor = "yellow";
//--Shadow
shadow = true;
shadowBlur = 5;
shadowColor = "grey";
shadowOffsetX = 8;
shadowOffsetY = 8;
//--Borders
// showBorder = true;
// borderColor = "black";
// borderWidth = 8;


constructor(){
this.frameStart =0;
this.x =0;
this.y =0;
this.content = "Text..";
this.xAlignment = XAlignment.Left; 
this.yAlignment = YAlignment.Top; 
//--Fonts    
this.fontSize = 50;
this.fontFamily = FontNames.Courier;    
this.fontColor =  "black";    
//--underline   
this.underline = false;
this.underlineExtend = false ;
this.underlineColor = "black";
this.underlineWidth = 2;
//--Overline
this.overline = false;
this.overlineExtend = false ;
this.overlineColor = "black";
this.overlineWidth = 2;
//--Highlight
// this.highlight = false;
// this.highlightExtend = false ;
// this.highlightColor = "yellow";
//--Shadow
this.shadow = true;
this.shadowBlur = 5;
this.shadowColor = "grey";
this.shadowOffsetX = 8;
this.shadowOffsetY = 8;
//--Borders
// this.showBorder = true;
// this.borderColor = "black";
// this.borderWidth = 8;

}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}