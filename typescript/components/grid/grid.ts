import {Component,Pack,DrawLayer} from "../../index.js";
import DataFn,{ObjectData} from "./DataFn.js";

//import GridTemplates from "./gridTemplates.js";
//export {GridTemplates};


export default class Grid extends Component<ObjectData> {

constructor (){
super(DataFn);
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
        this.style.strokeStyle = this.d.colorHorizontalLines;        
    p.drawLine(x,y,end_x,y,this.style);
        if (this.d.flagDrawNumbers == true){
            this.style.strokeStyle = this.d.colorNumbers;
            p.drawText(y.toString(),x,y,this.style);

        }
    y += this.d.cellHeight;
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
    this.style.strokeStyle = this.d.colorVerticalLines;
    p.drawLine(x,y,x,end_y,this.style);

            if (this.d.flagDrawNumbers == true){
                this.style.strokeStyle = this.d.colorNumbers;
                p.drawText(x.toString(),x,y,this.style);
            }
    x += this.d.cellWidth;
    } while (width > x );
}


}
//=============================
