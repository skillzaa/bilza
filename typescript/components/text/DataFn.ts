import CompDataBase from "../../design/CompDataBase.js";  
import {XAlignment} from "./xAlignment.js";
import {YAlignment} from "./yAlignment.js";

export class ObjectData extends CompDataBase{
   
widthPercent :number;
heightPercent :number;
//margin and padding is not to be drawn just counted-they r blank spaces
padding :number;
margin :number;
border :number;

content :string;

color :string;
colorBorder :string;
colorBg :string;

flagDrawBorder :boolean;
flagDrawBg :boolean;

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

this.flagDrawBorder = false;
this.flagDrawBg = false;

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
