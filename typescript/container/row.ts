import {Pack,AniBoolean,AniNumber,AniColor} from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import RawText from "../components/rawText.js";

export default class Row extends BaseComponent {
textArray : RawText[];
private incommingTextArray : string[];
x_internal :number;
colorBackground :AniColor;


constructor (incommingTextArray :string = "one two"){ 
    super();
    this.x_internal = 0;
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
        // txt.width.set(10);---its raw text now

        //--Now the text will use raw pix for width, height ,padding and corrdinates.
        txt.responsiveCoordinates = false;
        txt.responsiveDims = false;
        txt.responsivePadding = false;
        //--fitTextToWidth = false; // very importantay -so now we can keep the size of text same by fontSize.
        // txt.fitTextToWidth = false;
        txt.border.set(0);
        txt.paddingLeft.set(2);
        txt.paddingRight.set(2);
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
        wd += txt.contentWidth();
    }
    return wd;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
contentHeight(): number {
    if (this.canvasWidth !== null ){
    let wd=0;
    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        if (wd < txt.contentHeight() ){
            wd = txt.contentHeight();
        }
    }
        return (wd +this.paddingTop.value() + this.paddingBottom.value()  );
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
setFontSize(fontSize :number){
    for (let i = 0; i < this.textArray.length ; i++) {
        const item = this.textArray[i];
        item.fontSize.set(fontSize);
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
    txt.x.set(this.xAligned() + this.x_internal + this.paddingLeft.value());
    txt.y.set( yAligned + this.paddingTop.value() );
    txt.draw(p);
    this.x_internal += txt.contentWidth();
    // console.log("x",txt.x.value());
    // this.x_internal += p.pixToXPerc(txt.widthInPix());
}
//----------------------------
this.x_internal = 0;//??
//----------------------------
this.postDraw(p);    
return true;
}

}