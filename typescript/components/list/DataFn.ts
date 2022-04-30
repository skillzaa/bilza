import CompDataBase from "../../design/CompDataBase.js";  
//Getting text dir since its no more exported by index.js
import Text from "../text/text.js";
 
export class ObjectData extends CompDataBase{
msStart:number;
x :number;
y :number;
align :string;
gap :number;
widthBorder :number;
//----Colors
colorBg :string;
colorFont :string;
colorBorder :string;
colorItemBorder :string;
//--flags
flagShowBorder :boolean;
flagShowBg :boolean;
flagShrinkTofitVertically :boolean;

paddingX :number;
paddingY :number;
dynWidth :number;
items :Text[];
// //--------------------------
listDim :number[];
dimFontColor :string;
dimBgColor :string;
dimBorderColor :string;
listHighlight :number[];
highlightFontColor :string;
highlightBgColor :string;
highlightBorderColor :string;
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
constructor(){
super();
this.msStart =0;
this.align = "centre";
this.x = 10;
this.y = 10;
 this.widthBorder = 3;
this.dynWidth = 80;
this.colorBg = "blue";
this.paddingX = 4;
this.paddingY = 4;
this.gap = 10;
this.colorFont = "black";
this.colorBorder = "#10c910";
this.colorItemBorder = "blue";
this.colorBg = "green";
this.items = [];
this.flagShowBorder = true;
this.flagShowBg = true;
this.flagShrinkTofitVertically = false;
//////////////
this.listDim = [0,2];
this.dimFontColor = "grey";
this.dimBgColor = "#6B726D";
this.dimBorderColor = "grey";
////////////////////////////
this.listHighlight = [3];
this.highlightFontColor = "red";
this.highlightBgColor = "blue";
this.highlightBorderColor = "red";

}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
