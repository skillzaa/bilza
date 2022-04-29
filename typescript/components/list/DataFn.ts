import CompDataBase from "../../design/CompDataBase.js";  
//Getting text dir since its no more exported by index.js
import Text from "../text/text.js";
 
export class ObjectData extends CompDataBase{
msStart:number;
x :number;
y :number;
align :string;
gap :number;
//----Colors
colorBg :string;
colorFont :string;
colorBorder :string;
//--flags
flagShowBorder :boolean;
flagShowBg :boolean;

paddingX :number;
paddingY :number;
widthPerc :number;
items :Text[];

constructor(){
super();
this.msStart =0;
this.align = "left";
this.x = 10;
this.y = 10;
 
this.widthPerc = 80;
this.colorBg = "blue";
this.paddingX = 4;
this.paddingY = 4;
this.gap = 0;
this.colorFont = "black";
this.colorBorder = "black";
this.colorBg = "green";
this.items = [];
this.flagShowBorder = true;
this.flagShowBg = true;
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
