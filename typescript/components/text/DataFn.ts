import CompDataBase from "../../design/CompDataBase.js";  
import {XAlignment} from "./xAlignment.js";
import {YAlignment} from "./yAlignment.js";

export class ObjectData extends CompDataBase{
   
widthPercent :number;
padding :number;
margin :number;
heightPercent :number;
content :string;
color :string;
colorMargin :string;
colorBg :string;
// dimColor :string;
// dimColorMargin :string;
// dimColorBg :string;
flagDrawMargin :boolean;
flagDrawBg :boolean;
flagDim :boolean;
// xAlignmentOptions = XAlignment;  
xAlignment :XAlignment;
yAlignment :YAlignment;

constructor(){
super();

this.xAlignment = XAlignment.Left;
this.yAlignment = YAlignment.Top;

this.content = "Text" ; 
this.padding = 2;
this.margin = 2;

this.colorMargin = "black";
this.colorBg = "#e1f4e1";


this.color = "black" ; 

this.widthPercent = 10;
this.heightPercent = 10;

this.flagDrawMargin = false;
this.flagDrawBg = false;
this.flagDim = false;

// this.dimColor = "grey";
// this.dimColorMargin = "grey" ;
// this.dimColorBg = "#e5e3e3";
}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
