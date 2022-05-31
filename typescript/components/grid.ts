import {Pack,DrawLayer} from "../Bilza.js";

import Basecomponent from "../BaseComponent/BaseComponent.js";

export default class Grid extends Basecomponent {

    lineDash :number[];
    
    cellWidthPerc :number;    
    cellHeightPerc :number;
    
    //--Lines---
    showHorizontalLines :boolean ;   
    showVerticalLines :boolean ;   
    
    lineWidthVertical :number;
    lineWidthHorizontal :number;
    
    colorHorizontalLines :string ;   
    colorVerticalLines :string ; 
    //--numbers
    fontSize :number;
    colorNumbers :string ;   
    showNumbers :boolean ;   
    
      
constructor (colorHax :string="grey",cellWidthPerc :number=10,cellHeightPerc :number=10){
super();
this.fontSize = 12;

this.cellWidthPerc = 10;    
this.cellHeightPerc =10;

this.colorHorizontalLines = "grey";   
this.colorVerticalLines = "grey";   

this.colorNumbers = "black"; 

this.showNumbers = true;   
this.showHorizontalLines = true;   
this.showVerticalLines = true;   
this.lineWidthVertical = 1;
this.lineWidthHorizontal = 1;
this.lineDash = [];
 this.drawLayer = DrawLayer.BackGround;   
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
        this.style.lineWidth = this.lineWidthHorizontal;        
    p.drawLine(x,y,end_x,y,this.style);
        if (this.showNumbers == true){
            this.style.strokeStyle = this.colorNumbers;
            // p.drawText(y.toString(),x,y,this.style);
            this.drawText(p,Math.ceil(y) ,x+4,y+4);
        }
    y += ((p.canvasHeight()/100) * this.cellHeightPerc);
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
    this.style.lineWidth = this.lineWidthVertical;        
    this.style.lineDash = this.lineDash;        
    p.drawLine(x,y,x,end_y,this.style);

            if (this.showNumbers == true){
                this.style.strokeStyle = this.colorNumbers;
                // this.drawText(p,x,x,y);//2nd x = content
                this.drawText(p,Math.ceil(x) ,x+4,y+2);

                // p.drawText(x.toString(),x,y,this.style);
            }
    x += ((p.canvasWidth()/100) * this.cellWidthPerc);

    } while (width > x );
}

drawText(p :Pack,content :number,x :number,y :number){
this.style.fontSize = this.fontSize;    
this.style.strokeStyle = this.colorNumbers;    
this.style.fillStyle = this.colorNumbers;    
p.drawText(
    content.toString(),
    x + this.lineWidthVertical -2, //why -2 error
    y + this.lineWidthHorizontal,
    this.style);    
}
}
//=============================
