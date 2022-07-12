import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Row from "./row.js";
import Text from "../components/text.js";
import { AniNumber } from "../bilza.js";

export default class Paragraph extends BaseComponent {
private rowArray : Row[];
private y_internal :number;
        rowGap :AniNumber;
constructor (){ 
    super();
    this.y_internal = 0;
    this.rowGap = new AniNumber(5);
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
        return wd;
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
        return ht;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}

getCell(row :number, column :number):Text{
    const rw =  this.rowArray[row];
    return rw.getCell(column);
}
draw(p:Pack):boolean{

this.applyRotation(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.opacity = this.opacity.value();

this.style.strokeStyle = this.color.value(); 

//---------------------------------------
const xAligned = this.xAligned();
for (let i = 0; i < this.rowArray.length ; i++) {
    const rw = this.rowArray[i];
    rw.x.override(xAligned);
    rw.y.override(this.yAligned() + this.y_internal);
    rw.draw(p);
    this.y_internal += rw.heightInPix() + this.rowGap.value();
    // console.log("x",txt.x.value());
    // this.x_internal += p.pixToXPerc(txt.widthInPix());
}
//----------------------------
this.removeRotation(p);
this.style.opacity = 1;
this.y_internal = 0;
//----------------------------
return true;
}

addRow (txt :string = "one two"){  
const r = new Row(txt);
this.rowArray.push(r);
}

}