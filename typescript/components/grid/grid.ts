// import {Component,Pack,Style,DrawLayer } from "../../index.js";

// import GridTemplates from "./gridTemplates.js";
// export {GridTemplates};


// export default class Grid extends Component {
// cell_height:number;
// cell_width:number;
// show_numbers:boolean;
// styleLine:Style;    
// styleNumber:Style;    
// constructor(){
// super(); 
// this.styleLine = new Style();
// this.styleNumber = new Style();
// this.drawLayer = DrawLayer.BackGround;   
// this.cell_width = 50;    
// this.cell_height = 50;
// this.show_numbers = false;   
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
//     // this.draw_line(p,x,y,end_x,y);
//     p.drawLine(x,y,end_x,y,this.styleLine);
//         if (this.show_numbers == true){
//             p.drawText(y.toString(),x,y,this.styleNumber);

//         }
//     y += this.cell_height;
//     } while (height > y );
// }
// draw_vertical(p:Pack){
// let x = 0;
// let y = 0;
// let width = p.canvasWidth();
// let height = p.canvasWidth();
// //end y remain the same
// let end_y = y + height;
//     do {   
//     // this.draw_line(p,x,y,x,end_y);
//     p.drawLine(x,y,x,end_y,this.styleLine);

//             if (this.show_numbers == true){
//                 p.drawText(x.toString(),x,y,this.styleNumber);
//             }
//     x += this.cell_width;
//     } while (width > x );
// }


// }
// //=============================
