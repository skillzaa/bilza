import {Pack} from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";

import BaseComponent from "../BaseComponent/00BaseComponent.js";
import RawText from "../components/rawText.js";

export default class Row extends BaseComponent {
textArray : RawText[];
private incommingTextArray : string[];
private x_local :number;

constructor (incommingTextArray :string = "one two"){ 
super();
this.x_local = 0;
//--save for later use
this.incommingTextArray = incommingTextArray.split(" ");

this.colorBackground = new AniColor("grey");
// console.log("this.incommingTextArray",this.incommingTextArray);
this.textArray = [];
//-----------create 
//--this.incommingTextArray and not just incommingTextArray
    for (let i = 0; i < this.incommingTextArray.length; i++) {
        const item = this.incommingTextArray[i];
        const txt = new RawText(item);
        //--will use raw pix for width, height ,padding and corrdinates.
        // txt.responsiveCoordinates = false;
        // txt.responsiveDims = false;
        // txt.responsivePadding = false;

        txt.border.set(1);
        txt.width.set(30);
        txt.colorBorder.set("hsl(200,100%,50%)");
        txt.paddingLeft.set(10);
        txt.paddingRight.set(10);
        txt.paddingTop.set(10);
        txt.paddingBottom.set(10);
        // txt.content.set(incommingTextArray[i]);
        this.textArray.push(txt);
    }
}
init(p: Pack): boolean {
    super.init(p);
//--?? not req since text does not need it.
    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        txt.charsWidth = this.charsWidth;
        txt.init(p);
    }
    // console.log(this.textArray);
    return true;
}

update(msDelta: number, p: Pack): boolean {

    this.colorBackground.update(msDelta);
    super.update(msDelta,p);

    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        txt.update(msDelta,p);
    }
    //-------------------------------------------
    return true;
}
contentWidth(): number {
    if (this.canvasWidth !== null ){
    let wd=0;
    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        wd += txt.compWidth();
    }
    return wd;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
contentHeight(): number {
    if (this.canvasWidth !== null ){
    let ht=0;
    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        if (ht < txt.compHeight() ){
            ht = txt.compHeight();
        }
    }
        return (ht +this.paddingTop.value() + this.paddingBottom.value()  );
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
setFontSize(fontSize :number){
    for (let i = 0; i < this.textArray.length ; i++) {
        const item = this.textArray[i];
        //--in raw text there is no font size just width
        item.width.set(fontSize);
    }
}
setFontColor(fontColor :string){
    for (let i = 0; i < this.textArray.length ; i++) {
        const item = this.textArray[i];
        item.color.set(fontColor);
    }
}
getCell(column :number):RawText{
    return this.textArray[column];
}
draw(p:Pack):boolean{

this.preDraw(p);    
//--------------
this.style.fillStyle = this.color.value();    
this.style.opacity = this.opacity.value();

this.style.strokeStyle = this.color.value(); 

const yAligned = this.yAligned();
for (let i = 0; i < this.textArray.length ; i++) {
    const txt = this.textArray[i];
const _x = this.xAligned() + this.x_local + this.paddingLeft.value(); 
const _y =  yAligned + this.paddingTop.value(); 

    txt.x.set( _x);
    txt.y.set( _y);
    
    
    txt.draw(p);
    this.x_local += txt.compWidth();
    // console.log("x",txt.x.value());
    // this.x_local += p.pixToXPerc(txt.widthInPix());
}
//----------------------------
this.x_local = 0;//??
//----------------------------
this.postDraw(p);    
return true;
}

}