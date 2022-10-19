// import {FontFamily} from "../../pack/fontFamily.js";
// import Text from "./text.js";

// export default class TextTempl {
// private  comp:Text;    

// constructor(comp :Text){
// this.comp = comp;    
// }

// hdg(XAlignment :0|1|2|null=1, y:number= 10 ,height :number=10){
// this.setXAlignment(XAlignment,0);    // this.comp.align(1,0);
// this.comp.y.set(y);


// this.comp.fitToHeight.set(true);
// this.comp.height.set(height);

// this.comp.fitToWidth.set(false);
// this.comp.width.set(100);

// this.comp.showBackground.set(true);
// this.comp.border.set(5);
// this.comp.setPaddings(8);
//     return this.comp;
// }

// jumbotron(XAlignment :0|1|2|null=1, y:number=50,height :number=30){
// this.setXAlignment(XAlignment,1);
// this.comp.y.set(y);
    
// this.comp.width.set(80);
// this.comp.fitToWidth.set(true);
// // this.comp.height.set(height);
// this.comp.setPaddings(10);
// // this.comp.fontSize.set(100);  
// this.comp.showBackground.set(true);
// this.comp.border.set(5);
// // this.comp.respFontSize.set(false);
// return this.comp;
// }
// ftNote(XAlignment :0|1|2|null, y:number,height :number){
//     this.setXAlignment(XAlignment);
//     this.comp.y.set(y);    
//     //------------------------  
//     this.comp.showBackground.set(true);
//     this.comp.border.set(1);
//     this.comp.setPaddings(4);
//     return this.comp;
// }
// bltPt(XAlignment :0|1|2|null, y:number,height :number){
// this.setXAlignment(XAlignment);
// this.comp.y.set(y);
// //------------------------  
// this.comp.fitToWidth.set(false);
// this.comp.width.set(300);

// this.comp.fitToHeight.set(true);
// this.comp.height.set(height);

// this.comp.showBackground.set(true);
// this.comp.border.set(0);
// this.comp.setPaddings(3);
// this.comp.fontSize.set(120);
// this.comp.height.set(height);
// return this.comp;
// }
// // slim(fontSize :number=50){
// //     this.comp.showBackground.set(false);
// //     this.comp.border.set(0);
// //     this.comp.setPaddings(0);
// //     this.comp.fontSize.set(fontSize);
// //     // this.comp.shrinkToHeight.set(false);
// //     return this.comp;
// // }


// //-------------
// private setXAlignment(alignX :0|1|2|null=0,y :0|1|2|null=0){
//     switch (alignX) {
//         case 2:
//             this.comp.align(alignX,y);
//             this.comp.x.set(100);
//         break;

//         case 1:
//             this.comp.align(alignX,y);
//             this.comp.x.set(50);
//         break;

//         case 0:
//         default:
//             this.comp.align(alignX,y);
//             this.comp.x.set(0);
//         break;
//     }
// }
// }