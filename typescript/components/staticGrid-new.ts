import {Pack,DrawLayer} from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
import Text from "./text-dynamicFontSize.js";
import Line from "./line.js";

import BaseComponent from "../BaseComponent/00BaseComponent.js";


export default class StaticGrid extends BaseComponent {
    numbers :Text;
    lineVertical :Line;
    lineHorizontal :Line;

    cellWidth :AniNumber;    
    cellHeight :AniNumber;
 
    drawNumbers : AniBoolean ;   
    drawHorizontal :AniBoolean ;   
    drawVertical :AniBoolean ;   

    // lineWidthVertical :AniNumber;
    // lineWidthHorizontal :AniNumber;
    
    // colorHorizontalLines :AniColor ;   
    // colorVerticalLines :AniColor ;    
    // colorNumbers :AniColor ;   
    
     // fontSize :number;
    // lineDash :number[];
      
     
constructor (cellWidth :number=100,cellHeight :number=100, color :string="#efe1e1"){
super();

this.cellWidth = new AniNumber(cellWidth);
this.cellHeight = new AniNumber(cellHeight);

// this.lineWidthVertical = new AniNumber(1);
// this.lineWidthHorizontal = new AniNumber(1);

// this.colorHorizontalLines = new AniColor(color);
// this.colorVerticalLines = new AniColor(color);
this.drawLayer = DrawLayer.BackGround;

//--flags
this.drawNumbers = new AniBoolean(false);   
this.drawHorizontal =new AniBoolean(true);
this.drawVertical = new AniBoolean(true);

// this.lineDash = [];
this.numbers = new Text("0", "grey");
this.lineHorizontal = new Line(0,0,100,100);
this.lineVertical = new Line(0,0,200,200);
this.lineHorizontal.setRespLoc(false);
this.lineVertical.setRespLoc(false);
}    

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    //--- These are local props
    this.cellWidth.update(msDelta);
    this.cellHeight.update(msDelta);
    // this.lineWidthHorizontal.update(msDelta);
    // this.lineWidthVertical.update(msDelta);
    //--- This is a contained component 
    this.numbers.update(msDelta,p);
    this.lineHorizontal.update(msDelta,p);
    this.lineVertical.update(msDelta,p);
    return true;
}


draw(p:Pack): boolean {
    if (this.drawHorizontal.value() == true){
        this.draw_horizontal(p);    
    }
    if (this.drawVertical.value() == true){
        this.draw_vertical(p);    
    }
return true;
}


draw_horizontal(p:Pack){
let x = 0;
let y = 0;
let width = this.compWidth();
let height = this.compHeight();

do {   
        this.lineHorizontal.x2.set(width);
        this.lineHorizontal.y.set(y);
        this.lineHorizontal.y2.set(y);
        this.lineHorizontal.update(0,p);

        this.lineHorizontal.draw(p);
    y += this.cellHeight.value();
    } while (height > y );
}
draw_vertical(p:Pack){
    let x = 0;
    // let y = 0;
    // let width = this.compWidth();
    let height = this.compHeight();
    this.lineVertical.y2.set(height);
    do {   
        this.lineVertical.x.set(x); //0
            this.lineVertical.x2.set(x);
            this.lineVertical.update(0,p);
    
            this.lineVertical.draw(p);
    x += this.cellHeight.value();
    } while (height > x );
}

drawText(p :Pack,content :number,x :number,y :number){
//     this.style.opacity = this.numbers.opacity.value();       
// //--The fontSize exist in rawText
// this.style.fontSize = this.numbers.fontSize.value();    
// this.style.strokeStyle = this.colorNumbers.value();    
// this.style.fillStyle = this.colorNumbers.value();    
// p.drawText(
//     content.toString(),
//     x + this.lineWidthVertical.value() -2, //why -2 error
//     y + this.lineWidthHorizontal.value(),
//     this.style);    
}
}
//=============================
