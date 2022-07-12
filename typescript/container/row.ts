import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Text from "../components/text.js";

export default class Row extends BaseComponent {
textArray : Text[];
incommingTextArray : string[];
x_internal :number;
// numberOfCells :number;

constructor (incommingTextArray :string = "one two"){ 
    super();
    this.x_internal = 0;
    //--save for later use
    this.incommingTextArray = incommingTextArray.split(" ");;
    console.log("this.incommingTextArray",this.incommingTextArray);
    this.textArray = [];
    //-----------create 
    //--this.incommingTextArray and not just incommingTextArray
    for (let i = 0; i < this.incommingTextArray.length; i++) {
        const item = this.incommingTextArray[i];
        const txt = new Text(item);
        txt.width.set(10);
        //--txt.usePercentages = false; // very importantay-Not only will the x and y not use percentages the paddings (all 4) will also be not using percentages. This is genious
        txt.usePercentages = false;
        //--fitTextToWidth = false; // very importantay -so now we can keep the size of text same by fontSize.
        txt.fitTextToWidth = false;
        txt.border.set(0);
        txt.paddingLeft.setInitValue(2);
        txt.paddingRight.setInitValue(2);
        // txt.content.set(incommingTextArray[i]);
        this.textArray.push(txt);
    }
}

init(p: Pack): boolean {
    super.init(p);
    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        txt.charsWidth = this.charsWidth;
        txt.init(p);
    }
    return true;
}

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        txt.update(msDelta,p);
    }
    return true;
}
widthInPix(): number {
    if (this.canvasWidth !== null ){
    let wd=0;
    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        wd += txt.widthInPix();
    }
        return wd;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
heightInPix(): number {
    if (this.canvasWidth !== null ){
    let wd=0;
    for (let i = 0; i < this.textArray.length ; i++) {
        const txt = this.textArray[i];
        if (wd < txt.heightInPix() ){
            wd = txt.heightInPix();
        }
    }
        return wd;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}

getCell(column :number):Text{
    return this.textArray[column];
}
draw(p:Pack):boolean{

this.applyRotation(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.opacity = this.opacity.value();

this.style.strokeStyle = this.color.value(); 

//---------------------------------------
const yAligned = this.yAligned();
for (let i = 0; i < this.textArray.length ; i++) {
    const txt = this.textArray[i];
    txt.x.override(this.xAligned() + this.x_internal);
    txt.y.override( yAligned );
    txt.draw(p);
    this.x_internal += txt.widthInPix();
    // console.log("x",txt.x.value());
    // this.x_internal += p.pixToXPerc(txt.widthInPix());
}
//----------------------------
this.removeRotation(p);
this.style.opacity = 1;
this.x_internal = 0;
//----------------------------
return true;
}

}