import {Component,Pack,Style,Transition } from "../../bilzaa2d/index.js";
import ContentObject  from "./contentObject.js";
import DataFn , {ObjectData} from "./DataFn.js";

export default class TextGroup extends Component {
    
    private compData:Transition<ObjectData>;
    styleText:Style;
    styleUnderline:Style;
    styleOverline:Style;
    d :ObjectData;
    contentObjs:ContentObject[];
constructor (content:string){
    super();
    this.styleText = new Style();
    this.styleUnderline = new Style();
    this.styleOverline = new Style();

    this.compData = new Transition(DataFn);
    this.d = this.compData.data;
    this.contentObjs = this.getContentObj(content);
}
width( p: Pack ): number {
// return p.charsWidth(this.d.content,this.styleText.fontSize, this.styleText.fontName);
return 0;
}
height(p: Pack): number {
return p.charsWidth("W",this.styleText.fontSize, this.styleText.fontName);

}
draw(p: Pack): boolean {
    // this.drawBackground(p);
    // this.drawBorder(p);
    // p.drawBackground("green");
// let start  = this.d.content.indexOf("an example");
// console.log("start",start);
    this.drawContent(p);
    // this.drawUnderline(p);
    // this.drawOverline(p);
    return true;
}
update(frame: number, p: Pack): boolean {
this.compData.apply(frame); //--important!!
return true;    
}
private drawBackground(p :Pack){
    // if (this.d.showBackground == true){
    //     this.styleBackground.fillStyle = this.d.backgroundColor;
    //     p.drawFillRect(
    //         p.xPerc(this.d.x),
    //         p.yPerc(this.d.y),
    //         this.width(p),this.height(p),this.styleBackground);
    // }
}
private drawBorder(p :Pack){
    // if (this.d.showBorder == true){
    //     this.styleBorder.fillStyle = this.d.borderColor;
    //     this.styleBorder.lineWidth = this.d.borderWidth;
    //     p.drawRect(
    //         p.xPerc(this.d.x),
    //         p.yPerc(this.d.y),
    //         this.width(p),this.height(p),this.styleBorder);
    // }
}
private drawUnderline(p :Pack){
    if (this.d.underline == true){
        this.styleUnderline.fillStyle = this.d.underlineColor;
        this.styleUnderline.strokeStyle = this.d.underlineColor;
        this.styleUnderline.lineWidth = this.d.underlineWidth;
        p.drawLine(
            p.xPerc(this.d.x),
        p.yPerc(this.d.y) + this.height(p),
        p.xPerc(this.d.x) + this.width(p),p.yPerc(this.d.y)+ this.height(p),
        this.styleUnderline);
        
    }
}
private drawOverline(p :Pack){
    if (this.d.overline == true){
        this.styleUnderline.fillStyle = this.d.underlineColor;
        this.styleUnderline.strokeStyle = this.d.underlineColor;
        this.styleUnderline.lineWidth = this.d.underlineWidth;
        p.drawLine(
            p.xPerc(this.d.x),
        p.yPerc(this.d.y),
        p.xPerc(this.d.x) + this.width(p),p.yPerc(this.d.y),
        this.styleUnderline);
        
    }
}
private drawContent(p :Pack){
let x = p.xPerc(this.d.x);
let y = p.yPerc(this.d.y);

for (let i = 0; i < this.contentObjs.length; i++) {
    const elm = this.contentObjs[i];
    this.styleText.fillStyle = elm.fontColor;
    this.styleText.strokeStyle = elm.fontColor;
    this.styleText.fontSize = elm.fontSize;
    // this.styleText.fontName = this.d.fontName;

    p.drawText(elm.content,
        x,
        y,
        this.styleText);
        x += (p.charsWidth(elm.content,elm.fontSize,elm.fontName) + this.d.gapBwWords);

}
       
}
getContentObj(content:string):ContentObject[]{
let     r :ContentObject[] = [];
let words = content.split(" ");
for (let i = 0; i < words.length; i++) {
    const item = words[i];
    let o = new ContentObject();
    o.fontSize = 100;
    o.fontColor = "red";
    // o.fontName = "serif";
    o.content = item;
    r.push(o);
}
// console.log("word",r);
return r;
}

setFontColor(lookfor:string, color="blue"){
for (let i = 0; i < this.contentObjs.length; i++) {
    let elm = this.contentObjs[i];
    if (elm.content == lookfor){
        elm.fontColor = color;
    }
}
}
setFontSize(lookfor:string, fontSize=26){
for (let i = 0; i < this.contentObjs.length; i++) {
    let elm = this.contentObjs[i];
    if (elm.content == lookfor){
        elm.fontSize = fontSize;
    }
}
}
// getContentFromContentObj(){
//     let s:string= "";
// for (let i = 0; i < this.contentObjs.length; i++) {
//     const elm = this.contentObjs[i];
//     s += elm.content;
// }
// return s;
// }
}