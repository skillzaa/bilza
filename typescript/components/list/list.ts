import {Component,Pack} from "../../Bilza.js";
//Getting text dir since its no more exported by Bilza.js
import Text from "../text/text.js";
import DataFn,{ObjectData} from "./DataFn.js";

export default class List extends Component<ObjectData> {

constructor (msStart=0,msEnd= Number.MAX_SAFE_INTEGER ,x=10,y=10,dynWidth =80){
    super(DataFn,msStart,msEnd);   
    this.d.x = x;
    this.d.y = y;
    this.d.dynWidth = dynWidth;
}
/////////////////////////////////////////
width( p: Pack ): number {
    let wd = 0;
    for (let i = 0; i < this.d.items.length; i++) {
        const item = this.d.items[i];
        if (item.width(p) > wd){
            wd = item.width(p);
        }
    }
 return   wd + (this.d.paddingX * 4);
}
height(p: Pack,perc=0): number {
    let ht = this.d.paddingY; //top gap
    for (let i = 0; i < this.d.items.length; i++) {
        const item = this.d.items[i];
            ht += item.height(p);
            // ht += this.d.gap;
    }
 return  ht + (this.d.paddingY);
}

init(p: Pack): boolean {
    for (let i = 0; i < this.d.items.length; i++) {
        this.d.items[i].init(p);
    }
let smallestFontSize = this.getSmallestFontSize();    
for (let i = 0; i < this.d.items.length; i++) {
    this.d.items[i].d.fontSize = smallestFontSize;
}
return true;    
}
update(ms :number, p: Pack): boolean {
return true;
}

draw(p: Pack):boolean {
    let x = this.d.x;
    let y = this.d.y;
   
    for (let i = 0; i < this.d.items.length; i++) {
        const item = this.d.items[i];
        // item.d.====> Everything is avaialble
        item.d.x = x;
        item.d.y =y;
        item.draw(p);
        y += item.height(p);
        y += this.d.gap;
        if (y > p.canvasHeight()){this.log("too long to fit");}
    }
    
return true;    
}
addItem(content=""){
let item = new Text(this.getStartTime(),this.getEndTime(),content);
item.d.flagDrawBorder = true;
item.d.flagUseRelativeXY = false;
item.d.flagUseDynResize = true;
//--change later
item.d.dynWidth = this.d.dynWidth;

    this.d.items.push(item);
}
setX(item:Text,p :Pack):number{
    const movableArea = this.width(p) - item.width(p);
    let answer = 0;
    switch (this.d.align) {
        case "left":
            answer =  0;
            break;
        case "right":
            answer =  movableArea - this.d.paddingX;
            break;
        case "centre":
            answer =  movableArea/2; 
        default:
            break;
    }
    return answer;
}
private getSmallestFontSize():number{
if (this.d.items.length == 0 ){return 5;}

let sm  = this.d.items[0].d.fontSize;     

for (let i = 0; i < this.d.items.length; i++) {
    const item = this.d.items[i];
    if (item.d.fontSize < sm){sm = item.d.fontSize}
}
return sm;
}
}