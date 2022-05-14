// import {Component,Pack,DrawLayer} from "../../Bilza.js";
// import DataFn,{ObjectData} from "./DataFn.js";

// export default class Grid extends Component<ObjectData> {
 
// constructor (){
// super(DataFn);
// //---no need to set anything else this is alwasy be visisble
// this.insertType = this.insertTypeOptions.AlwaysOn;
// this.drawLayer = DrawLayer.BackGround;   
// }    

// draw(p:Pack): boolean {
//     this.draw_horizontal(p);    
//     this.draw_vertical(p);    
// return true;
// }    
// draw_horizontal(p:Pack){
// let x = 0;
// let y = 0;
// let width = p.canvasWidth();
// let height = p.canvasHeight();
// //end y remain the same
// let end_x = x + width;
//     do {   
//         this.style.strokeStyle = this.d.colorHorizontalLines;        
//         this.style.lineDash = this.d.lineDash;        
//         this.style.lineWidth = this.d.lineWidthHorizontal;        
//     p.drawLine(x,y,end_x,y,this.style);
//         if (this.d.flagDrawNumbers == true){
//             this.style.strokeStyle = this.d.colorNumbers;
//             // p.drawText(y.toString(),x,y,this.style);
//             this.drawText(p,y,x,y);
//         }
//     y += this.d.cellHeight;
//     } while (height > y );
// }
// draw_vertical(p:Pack){
// let x = 0;
// let y = 0;
// let width = p.canvasWidth();
// let height = p.canvasHeight();
// //end y remain the same
// let end_y = y + height;
//     do {   
//     this.style.strokeStyle = this.d.colorVerticalLines;
//     this.style.lineWidth = this.d.lineWidthVertical;        
//     this.style.lineDash = this.d.lineDash;        
//     p.drawLine(x,y,x,end_y,this.style);

//             if (this.d.flagDrawNumbers == true){
//                 this.style.strokeStyle = this.d.colorNumbers;
//                 this.drawText(p,x,x,y);//2nd x = content
//                 // p.drawText(x.toString(),x,y,this.style);
//             }
//     x += this.d.cellWidth;
//     } while (width > x );
// }

// drawText(p :Pack,content :number,x :number,y :number){
// this.style.fontSize = this.d.fontSize;    
// this.style.strokeStyle = this.d.colorNumbers;    
// this.style.fillStyle = this.d.colorNumbers;    
// p.drawText(
//     content.toString(),
//     x + this.d.lineWidthVertical -2, //why -2 error
//     y + this.d.lineWidthHorizontal,
//     this.style);    
// }
// }
// //=============================
