import {Component,Pack} from "../../Bilza.js";
//Getting text dir since its no more exported by Bilza.js
import Text from "../text/text.js";
import DataFn,{ObjectData} from "./DataFn.js";

export default class List extends Component<ObjectData> {

constructor (msStart=0,msEnd= Number.MAX_SAFE_INTEGER ,x=10,y=10,widthPerc =80){
    super(DataFn,msStart,msEnd);   
    this.d.x = x;
    this.d.y = y;
    this.d.widthPerc = widthPerc;
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

update(ms :number, p: Pack): boolean {
return true;
}

draw(p: Pack):boolean {
    let x = this.d.x;
    let y = this.d.y;
    // this.style.fillStyle = this.d.colorBg;
    // p.drawFillRect(this.d.x,this.d.y,this.width(p),
    // this.height(p),this.style);

    for (let i = 0; i < this.d.items.length; i++) {
        const item = this.d.items[i];
        // item.d.====> Everything is avaialble
        item.d.x = x;
        item.d.y =y;
        item.draw(p);
        y += item.height(p);
        y += this.d.gap;
    }
    
return true;    
}
addItem(content=""){
let item = new Text(this.getStartTime(),this.getEndTime(),content);
item.d.flagDrawBorder = true;
item.d.flagUseRelativeXY = false;

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
}