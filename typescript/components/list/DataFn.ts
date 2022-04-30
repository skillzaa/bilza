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
this.colorFont = "red";
this.colorBorder = "#10c910";
this.colorItemBorder = "blue";
this.colorBg = "green";
this.items = [];
this.flagShowBorder = true;
this.flagShowBg = true;
this.flagShrinkTofitVertically = false;
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
