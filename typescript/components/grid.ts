import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import ComponentPack from "../componentPack/componentPack.js";

import {AniNumber,AniString,AniBoolean,AniColor,} from "../animations/animations.js";

export default class Grid extends Component {
    lineDash :number[];
    
    cellWidth : AniNumber;    
    cellHeight :AniNumber;
    //--Lines---
    showHorizontalLines :AniBoolean ;   
    showVerticalLines :AniBoolean ;   

    lineWidthVertical :AniNumber;
    lineWidthHorizontal :AniNumber;
    
    colorHorizontalLines :AniColor ;   
    colorVerticalLines :AniColor ; 
    //--numbers
    fontSize :AniNumber;
    colorNumbers :AniColor ;   
    showNumbers :AniBoolean ;   

constructor (startTime :number,endTime :number,componentPack :ComponentPack,cellWidth :number=10,cellHeight :number=10,color :string="grey"){
    super(startTime,endTime,componentPack);  

this.fontSize = new AniNumber(12);
//--these 2 are settings but very imp since grid is normally used for entire screen
this.width.set(100);
this.height.set(100);

this.cellWidth = new AniNumber(cellWidth);    
this.cellWidth.setResponsive()
this.cellHeight = new AniNumber(cellHeight);
this.cellHeight.setResponsive()

this.colorHorizontalLines = new AniColor(color);   
this.colorVerticalLines = new AniColor(color);   

this.colorNumbers = new AniColor("black"); 

this.showNumbers = new AniBoolean(true);   
this.showHorizontalLines = new AniBoolean(true);   
this.showVerticalLines = new AniBoolean(true);   
this.lineWidthVertical = new AniNumber(1);
this.lineWidthHorizontal = new AniNumber(1);
this.lineDash = [];
this.drawLayer = 1;   
} 
// init(p: Pack): boolean {  
// //--imp--it want us to keep it here or cause init error
// super.init(p);     
// if (this.canvasWidth == null || this.canvasHeight == null){
//     throw new Error("init error");
// }
//     this.cellWidth.init(this.canvasWidth());//canvasWidth
//     this.cellHeight.init(this.canvasHeight());//canvasHeight
// return true;
// }   

update(msDelta: number, p: Pack): boolean {
//--11 props updated (no need for lineDash)    
this.cellWidth.update(msDelta);
this.cellHeight.update(msDelta);
this.showHorizontalLines.update(msDelta);
this.showVerticalLines.update(msDelta);

this.lineWidthVertical.update(msDelta);
this.lineWidthHorizontal.update(msDelta);

this.colorHorizontalLines.update(msDelta);
this.colorVerticalLines.update(msDelta);
//--
this.fontSize.update(msDelta);
this.colorNumbers.update(msDelta);
this.showNumbers.update(msDelta);

return super.update(msDelta,p);    
}
draw(p:Pack): boolean {
this.preDraw(p);

if (this.showHorizontalLines.value() == true){
    this.draw_horizontal(p);    
}
if (this.showVerticalLines.value() == true){
    this.draw_vertical(p);    
}

this.postDraw(p);
return true;
}    


draw_horizontal(p:Pack){
let y = 0;
let lastLineDrawn = false;
do{
    //---Draw grid line 
    // the last y = theNumber 
    this.drawGridLine(p,0,y,this.contentWidth(),y,y,"horizontal");

        //---if last line is drawn or not            
        if (this.contentY() +  y == this.contentWidth()){
            lastLineDrawn = true;
        }                        
    y += this.cellHeight.value();;    

} while (this.contentHeight() >=  y);

////////////////////=======Step-2
//-draw last line
if (lastLineDrawn == false){
    //this.contentY() + this.contentHeight() // last line Y value
    this.drawGridLine(p,
        0,
        this.contentHeight(),
        this.contentWidth(), 
        this.contentHeight(),
        (this.contentY() + this.contentHeight()),
        "horizontal"
    );    
}
}////

draw_vertical(p:Pack){
let x = 0;
let lastLineDrawn = false;
do{
    //---Draw grid line
    this.drawGridLine(p,x,0,x,this.contentHeight(),x,"vertical");

    //---if last line is drawn or not            
    if (this.contentX() +  x == this.contentWidth()){
        lastLineDrawn = true;
    }                        

   x += this.cellWidth.value();;    

} while (this.contentWidth() >=  x);

////////////////////=======Step-2
//-draw last line
if (lastLineDrawn == false){
    //this.contentX() + this.contentWidth() // last line x value
    this.drawGridLine(p,this.contentWidth(),0,this.contentWidth(), 
        this.contentHeight(),(this.contentX() + this.contentWidth()),"vertical");
}

}//draw_vertical
//--drawGrid line is just for drawing grid lines OR the last lines
//--keep in mind contentX and Y is added by default
drawGridLine(p :Pack,x1 :number,y1 :number,x2 :number,y2 :number, theNumber :number, hv :string){
 this.style.opacity = this.opacity.value();       
 this.style.lineDash = this.lineDash;        
 if (hv == "vertical"){
    this.style.fillStyle = this.colorVerticalLines.value();        
    this.style.strokeStyle = this.colorVerticalLines.value();
    this.style.lineWidth = this.lineWidthVertical.value();        
}
if (hv == "horizontal"){
    this.style.fillStyle = this.colorHorizontalLines.value();        
    this.style.strokeStyle = this.colorHorizontalLines.value();
    this.style.lineWidth = this.lineWidthHorizontal.value();        
}

    p.drawLine(
        this.contentX() +  x1,
        this.contentY() + y1,
        this.contentX() +  x2, 
        this.contentY() + y2, 
        this.style);
//////////-draw text inside drawGrid lines
if (this.showNumbers.value() == true){
    this.drawText(p, Math.ceil(theNumber), this.contentX() +  x1,
            this.contentY() + y1 + 2);
}

}
drawText(p :Pack,theNumber :number,x :number,y :number){
    if (this.showNumbers.value() == false){return;}

this.style.fontSize = this.fontSize.value();    
this.style.strokeStyle = this.colorNumbers.value();    
this.style.fillStyle = this.colorNumbers.value();    
p.drawText(
    theNumber.toString(),
    x  + this.lineWidthVertical.value(),
    y  + this.lineWidthHorizontal.value(),
    this.style);    
}
}
//=============================
