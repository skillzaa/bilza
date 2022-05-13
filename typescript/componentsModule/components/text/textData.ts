import CompDataBase from "../../BaseComponent/CompDataBase.js";  
import {XAlignment} from "../../BaseComponent/xAlignment.js";
import {YAlignment} from "../../BaseComponent/yAlignment.js";

export class ObjectData extends CompDataBase{
//--Basics
content :string;
padding :number;
border :number;
maxDisplayChars :number; //implemented

//=======================POSITIONING===============
//--the x and y are in BaseComp obj (its super class)
fontSize :number;
dynWidth :number;
dynHeight :number;
flagUseDynResize:boolean;
flagShrinkHeightToFit:boolean;
flagUseRelativeXY:boolean;

//=======================poistioning ends===============

//--colors
color :string;
colorBorder :string;
colorBg :string;

//--Display Flags (marked by show)
showContent :boolean;
showBg :boolean;
showTextShadow :boolean;
showBorderShadow :boolean; 
showBgShadow :boolean; 


constructor(){
super();

this.x = 0; //x is in BaseComp obj
this.y = 0; //x is in BaseComp obj

this.flagUseRelativeXY = true;//outof box its RESPONSIVE text
this.dynWidth = 25;
this.dynHeight = 30;
this.flagUseDynResize = true; //--dynResize ON by default
this.flagShrinkHeightToFit = true; //--shring ON by default

this.xAlignment = XAlignment.Left;
this.yAlignment = YAlignment.Top;

this.content = "Text Component" ; 
this.padding = 0;
this.border = 0;


this.colorBorder = "black";
this.colorBg = "#e1f4e1";
this.color = "black" ; 

this.fontSize = 25;

this.showContent = true;
this.showBg = false;

this.showTextShadow = false;
this.showBgShadow = false;
this.showBorderShadow = false;

this.maxDisplayChars = 200;


//-------Base Component Values--keep all here except x and y
this.selected = false;
this.visible = true;
this.shadowColor = "#b2abab";
this.shadowOffsetX = 13;
this.shadowOffsetY = 9;
this.shadowBlur = 4;
this.colorBoundingRectangle = "#000000";
} 
};
 
 
export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
