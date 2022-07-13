import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Row from "./row.js";
//--So that normal Text Element is not used by js
import Text from "../components/text.js";
import {AniNumber,AniBoolean,AniColor } from "../bilza.js";

export default class Paragraph extends BaseComponent {
private rowArray : Row[];
private y_internal :number;
public rowGap :AniNumber;
public border :AniNumber;
public padding :AniNumber;
public fontSize :AniNumber;
public opacityBackground :AniNumber;
public showBackground :AniBoolean;
public uniformFontSize :AniBoolean;
public colorBackground :AniColor;
public colorBorder :AniColor;
constructor (){ 
    super();
    this.y_internal = 0;
    this.showBackground  = new AniBoolean(true);
    this.uniformFontSize  = new AniBoolean(false);
    this.padding = new AniNumber(0);
    this.fontSize = new AniNumber(50);
    this.rowGap = new AniNumber(5);
    this.border = new AniNumber(0);
    this.opacityBackground = new AniNumber(100);
    this.colorBackground = new AniColor("grey");
    this.colorBorder = new AniColor("black");
    this.rowArray = [];
}

init(p: Pack): boolean {
    super.init(p);
    for (let i = 0; i < this.rowArray.length ; i++) {
        const rw = this.rowArray[i];
        //---This on line saved us from re-writting the entire app
        rw.charsWidth = this.charsWidth;
        rw.init(p);
    }
    return true;
}

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.rowGap.update(msDelta);
    this.fontSize.update(msDelta);
    if (this.uniformFontSize.value() == true){
        this.setFontSize(this.fontSize.value());
    }
    
    for (let i = 0; i < this.rowArray.length ; i++) {
        const rw = this.rowArray[i];
        rw.update(msDelta,p);
    }
    return true;
}
widthInPix(): number {
    if (this.canvasWidth !== null ){
    let wd=0;
    for (let i = 0; i < this.rowArray.length ; i++) {
        const rw = this.rowArray[i];
        if (rw.widthInPix() > wd){
            wd = rw.widthInPix();
        }
    }
        return (wd + (this.padding.value() * 2) );
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
heightInPix(): number {
    if (this.canvasWidth !== null ){
    let ht=0;
    for (let i = 0; i < this.rowArray.length ; i++) {
        const rw = this.rowArray[i];
            ht += rw.heightInPix();
    }
        ht += (this.rowGap.value() * (this.rowArray.length - 1))
        ht += (this.padding.value() * 2);
        return ht;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
private setFontSize(fontSize :number){
    for (let i = 0; i < this.rowArray.length ; i++) {
        const item = this.rowArray[i];
        item.setFontSize(fontSize);
    }
}
getCell(row :number, column :number):Text{
    const rw =  this.rowArray[row];
    return rw.getCell(column);
}
getRow(row :number):Row{
    return  this.rowArray[row];
}
draw(p:Pack):boolean{
// this.opacity.set(100);
this.applyRotation(p);
//---why this needs to be done for all new comps?
this.style.opacity = 100;
//--------------
if (this.border.value() > 0){
    this.drawBorder(p);
}
if (this.showBackground.value() == true){
    this.style.opacity = this.opacityBackground.value();
    this.drawBackground(p);
    this.style.opacity = 100;
}
//--------------
this.style.fillStyle = this.color.value();    

this.style.strokeStyle = this.color.value(); 

//---------------------------------------
const xAligned = this.xAligned();
for (let i = 0; i < this.rowArray.length ; i++) {
    const rw = this.rowArray[i];
    rw.x.override(xAligned + this.padding.value());
    rw.y.override(this.yAligned() + this.padding.value() +this.y_internal);
    rw.draw(p);
    this.y_internal += rw.heightInPix() + this.rowGap.value();
}
//----------------------------
this.removeRotation(p);
this.style.opacity = 1;
this.y_internal = 0;
//----------------------------
return true;
}
drawBackground(p :Pack){
this.style.fillStyle = this.colorBackground.value();
this.style.strokeStyle = this.colorBackground.value();

p.drawFillRect(this.xAligned(),this.yAligned(),this.widthInPix(),this.heightInPix(),this.style);

}
drawBorder(p :Pack){
this.style.fillStyle = this.colorBorder.value();
this.style.strokeStyle = this.colorBorder.value();
this.style.lineWidth = this.border.value();
p.drawRect(this.xAligned(),this.yAligned(),this.widthInPix(),this.heightInPix(),this.style);

}
addRow (txt :string = "one two"){  
const r = new Row(txt);
this.rowArray.push(r);
}

}