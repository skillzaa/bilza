import CompDataBase from "../../design/CompDataBase.js";  
import {XAlignment} from "../compsDesign/xAlignment.js";
import {YAlignment} from "../compsDesign/yAlignment.js.js";

export class ObjectData extends CompDataBase{
//--width and height perc are applicable only if dynamicFontSize = true    
widthPercent :number;
heightPercent :number;
//margin and padding is not to be drawn just counted-they r blank spaces
padding :number;
margin :number;
border :number;
//-if autoScaleFontSize = true then fontSize is changed dynamically to adjest widthPercentage and heightPercentage. if dynamicFontSize == false then the normal fontSize is used. 
fontSize :number;
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
dynamicFontSize :boolean;
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
this.margin = 2;
this.border = 2;

this.colorBorder = "black";
this.colorBg = "#e1f4e1";
this.color = "black" ; 

this.widthPercent = 10;
this.heightPercent = 10;
this.fontSize = 25;

this.flagDrawContent = true;
this.flagDrawBorder = false;
this.dynamicFontSize = true;
this.flagDrawBg = false;
this.maxDisplayChars = 200;
this.flagTextShadow = false;
this.flagBgShadow = false
}
};
 
 
export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
