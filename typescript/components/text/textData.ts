import CompDataBase from "../../design/CompDataBase.js";  
import {XAlignment} from "../compsDesign/xAlignment.js";
import {YAlignment} from "../compsDesign/yAlignment.js";

export class ObjectData extends CompDataBase{
    
padding :number;
//---I do not need margin since i will not use webpage like flow rather components will be used in side list,table etc
// margin :number;
border :number;
fontSize :number;
dynWidth :number;
dynHeight :number;
 //--content
content :string;
//--colors
color :string;
colorBorder :string;
colorBg :string;
//--Flags
flagDrawContent :boolean;
flagDrawBorder :boolean;
flagDrawBg :boolean;
flagTextShadow :boolean;
flagBgShadow :boolean; 
flagUseDynResize:boolean;
flagShrinkHeightToFit:boolean;
flagUseRelativeXY:boolean;
//--Misc
maxDisplayChars :number; //implemented
xAlignment :XAlignment;
yAlignment :YAlignment;

constructor(){
super();

this.xAlignment = XAlignment.Left;
this.yAlignment = YAlignment.Top;

this.content = "Text" ; 
this.padding = 2;
// this.margin = 2;
this.border = 2;
this.dynWidth = 80;
this.dynHeight = 30;

this.colorBorder = "black";
this.colorBg = "#e1f4e1";
this.color = "black" ; 

this.fontSize = 25;

this.flagDrawContent = true;
this.flagDrawBorder = false;
this.flagDrawBg = false;
this.maxDisplayChars = 200;
this.flagTextShadow = false;
this.flagBgShadow = false;
this.flagUseDynResize = false;
this.flagShrinkHeightToFit = false;
this.flagUseRelativeXY = true;
} 
};
 
 
export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}