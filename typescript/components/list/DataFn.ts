//Getting text dir since its no more exported by index.js
import Text from "../text/text.js";
 
export class ObjectData {
msStart:number;
x :number;
y :number;
colorBg :string;
align :string;
// colorBorder :string;
gap :number;
//--------------------------
listDim :number[];
dimFontColor :string;
dimBgColor :string;
dimBorderColor :string;
//--------------------------
//--------------------------
listFocus :number[];
focusFontColor :string;
focusBgColor :string;
focusBorderColor :string;
//--------------------------
//--------------------------
listHighlight :number[];
highlightFontColor :string;
highlightBgColor :string;
highlightBorderColor :string;
//--------------------------

paddingX :number;
paddingY :number;
fontSize :number;
fontColor :string;
items :Text[];
constructor(){
this.msStart =0;
this.align = "left";
this.x = 50;
this.y = 50;

this.listDim = [];
this.dimFontColor = "#efeded";
this.dimBgColor = "#6B726D";
this.dimBorderColor = "grey";

this.listFocus = [];
this.focusFontColor = "blue";
this.focusBgColor = "white";
this.focusBorderColor = "blue";

this.listHighlight = [];
this.highlightFontColor = "red";
this.highlightBgColor = "#0404a3";
this.highlightBorderColor = "red";
//--------------------------

this.fontSize = 30;
this.colorBg = "blue";
this.paddingX = 4;
this.paddingY = 4;
this.gap = 4;
this.fontColor = "black";
this.items = [];
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
