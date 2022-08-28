import {Pack,DrawLayer,} from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";

export default class Grid extends BaseComponent {
    lineDash :number[];
    
    cellWidthPerc :AniNumber;    
    cellHeightPerc :AniNumber;
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
//-----
// private _x_iteration :number;
// private _y_iteration :number;

constructor (cellWidthPerc :number=10,cellHeightPerc :number=10,color :string="grey"){
super();
this.fontSize = new AniNumber(12);
//--these 2 are settings but very imp since grid is normally used for entire screen
this.width.set(100);
this.height.set(100);

this.cellWidthPerc = new AniNumber(cellWidthPerc);    

this.cellHeightPerc = new AniNumber(cellHeightPerc);
// this._y_iteration = 100/this.cellHeightPerc.value(); 

this.colorHorizontalLines = new AniColor(color);   
this.colorVerticalLines = new AniColor(color);   

this.colorNumbers = new AniColor("black"); 

this.showNumbers = new AniBoolean(true);   
this.showHorizontalLines = new AniBoolean(true);   
this.showVerticalLines = new AniBoolean(true);   
this.lineWidthVertical = new AniNumber(1);
this.lineWidthHorizontal = new AniNumber(1);
this.lineDash = [];
this.drawLayer = DrawLayer.BackGround;   
}    
update(msDelta: number, p: Pack): boolean {
this.cellWidthPerc.update(msDelta);
this.cellHeightPerc.update(msDelta);
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
let _y_iteration = 100/this.cellHeightPerc.value();
const yFactor = ( (this.contentHeight()/100) * this.cellHeightPerc.value() );
//--convert this.width.value to this.contentWidth
let end_x = this.contentX() + this.contentWidth();

for (let i = 0; i < ( _y_iteration + 1); i++) {
    this.style.strokeStyle = this.colorHorizontalLines.value(); 
    this.style.opacity = this.opacity.value();       
    this.style.fillStyle = this.colorHorizontalLines.value();        
    this.style.lineDash = this.lineDash;        
    this.style.lineWidth = this.lineWidthHorizontal.value();        

p.drawLine( this.contentX() ,
this.contentY() + y,
    end_x,
this.contentY() + y ,this.style);

    if (this.showNumbers.value() == true && i < (_y_iteration)){
        this.style.strokeStyle = this.colorNumbers.value();
        this.drawText(p, Math.ceil(y), this.contentX() ,this.contentY() + y+ 2);
    }
y += yFactor;
}
}

draw_vertical(p:Pack){
let x = 0;
let _x_iteration = 100/this.cellWidthPerc.value(); 

let end_y = this.contentY() + this.contentHeight();
const Xfactor = ( (this.width.value()/100) * this.cellWidthPerc.value());
this.style.opacity = this.opacity.value();       
    

for (let i = 0; i < ( _x_iteration + 1); i++) {
    this.style.strokeStyle = this.colorVerticalLines.value();
    this.style.fillStyle = this.colorVerticalLines.value();        
    this.style.lineWidth = this.lineWidthVertical.value();        
    this.style.lineDash = this.lineDash;        
    //---Draw grid line
        p.drawLine(
            this.contentX() +  x,
            this.contentY(),
            this.contentX() +  x, 
            end_y , 
            this.style);
    //---Draw Numbers
                if (this.showNumbers.value() == true && i < (_x_iteration) ){
                    this.style.strokeStyle = this.colorNumbers.value();
                    this.drawText(p, Math.ceil(x), this.contentX()+x ,this.contentY() + 2);
                }
        x += Xfactor;    
}
}

drawText(p :Pack,theNumber :number,x :number,y :number){
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
