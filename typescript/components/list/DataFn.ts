//Getting text dir since its no more exported by index.js
import Text from "../text/text.js";
 
export class ObjectData {
frameStart:number;
x :number;
y :number;
colorBg :string;
// colorBorder :string;
gap :number;
paddingX :number;
paddingY :number;
fontSize :number;
items :Text[];
constructor(){
this.frameStart =0;
this.x = 50;
this.y = 50;
this.fontSize = 30;
this.colorBg = "blue";
this.paddingX = 4;
this.paddingY = 4;
this.gap = 4;
this.items = [];
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}


// export class CalcData {

// marginX:number;    
// marginY:number;  
// borderX:number;    
// borderY:number;
// paddingX:number;    
// paddingY:number; 
// contentAreaX:number;    
// contentAreaY:number; 
// //-------------------
// contentWidth :number;
// contentHeight :number;

// constructor(){
// this.marginX = 0;     
// this.marginY = 0;   
// this.borderX = 0;     
// this.borderY = 0; 
// this.paddingX = 0;     
// this.paddingY = 0;  
// this.contentAreaX = 0;     
// this.contentAreaY = 0;  
// //.........
// this.contentWidth = 0;
// this.contentHeight = 0;

// }
// };