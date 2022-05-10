// import {Component,Pack,DrawLayer } from "../../Bilza.js";
// import DataFn,{ObjectData} from "./DataFn.js";
// export default class BgShapes extends Component<ObjectData> {

// constructor (count:number=100){
//     super(DataFn);
//     this.d.count = count;
//     this.drawLayer = DrawLayer.BackGround;
// }
// width(p:Pack):number {
//     return 0;
// }
// height(p:Pack):number {
//     return 0;
// }

// draw(p:Pack):boolean{
//     this.style.fillStyle = "#f2edba";
//     this.style.strokeStyle = "#efeee3";
//     for (let i = 0; i < this.d.count ; i++) {
//         p.drawCircle(
//             Math.ceil(Math.random()* p.canvasWidth()),
//             Math.ceil(Math.random()* p.canvasHeight()),
//             15,
//             true,
//             this.style);
//     }
// return true;
// }

// }