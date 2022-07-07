import {Pack,DrawLayer,AniNumber} from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";


export default class StaticGrid extends BaseComponent {
    cellWidth :AniNumber;    
    cellHeight :AniNumber;
    lineWidthVertical :AniNumber;
    lineWidthHorizontal :AniNumber;
    
    colorHorizontalLines :string ;   
    colorVerticalLines :string ;    
    colorNumbers :string ;   
    
    flagDrawNumbers :boolean ;   
    flagDrawHorizontal :boolean ;   
    flagDrawVertical :boolean ;   
    fontSize :number;
    lineDash :number[];
      
    
constructor (cellWidth :number=100,cellHeight :number=100, color :string="#efe1e1"){
super();

this.cellWidth = new AniNumber(cellWidth);
this.cellHeight = new AniNumber(cellHeight);

this.lineWidthVertical = new AniNumber(1);
this.lineWidthHorizontal = new AniNumber(1);

this.colorHorizontalLines = color;
this.colorVerticalLines = color;
this.drawLayer = DrawLayer.MiddleGround;

this.fontSize = 8;

this.colorNumbers = "grey"; 

this.flagDrawNumbers = false;   
this.flagDrawHorizontal = false;   
this.flagDrawVertical = false;   
this.lineDash = [];
}    

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.cellWidth.update(msDelta);
    this.cellHeight.update(msDelta);
    this.lineWidthHorizontal.update(msDelta);
    this.lineWidthVertical.update(msDelta);
    return true;
}
draw(p:Pack): boolean {
    this.draw_horizontal(p);    
    this.draw_vertical(p);    
return true;
}    
draw_horizontal(p:Pack){
let x = 0;
let y = 0;
let width = p.canvasWidth();
let height = p.canvasHeight();
//end y remain the same
let end_x = x + width;
    do {   
        this.style.strokeStyle = this.colorHorizontalLines;        
        this.style.lineDash = this.lineDash;        
        this.style.lineWidth = this.lineWidthHorizontal.value();        
    p.drawLine(x,y,end_x,y,this.style);
        if (this.flagDrawNumbers == true){
            this.style.strokeStyle = this.colorNumbers;
            // p.drawText(y.toString(),x,y,this.style);
            this.drawText(p,y,x,y);
        }
    y += this.cellHeight.value();
    } while (height > y );
}
draw_vertical(p:Pack){
let x = 0;
let y = 0;
let width = p.canvasWidth();
let height = p.canvasHeight();
//end y remain the same
let end_y = y + height;
    do {   
    this.style.strokeStyle = this.colorVerticalLines;
    this.style.lineWidth = this.lineWidthVertical.value();        
    this.style.lineDash = this.lineDash;        
    p.drawLine(x,y,x,end_y,this.style);

            if (this.flagDrawNumbers == true){
                this.style.strokeStyle = this.colorNumbers;
                this.drawText(p,x,x,y);//2nd x = content
                // p.drawText(x.toString(),x,y,this.style);
            }
    x += this.cellWidth.value();
    } while (width > x );
}

drawText(p :Pack,content :number,x :number,y :number){
this.style.fontSize = this.fontSize;    
this.style.strokeStyle = this.colorNumbers;    
this.style.fillStyle = this.colorNumbers;    
p.drawText(
    content.toString(),
    x + this.lineWidthVertical.value() -2, //why -2 error
    y + this.lineWidthHorizontal.value(),
    this.style);    
}
}
//=============================
