// import Pack from "../../pack/pack.js";
// import CompEngine from "../../compEngine/compEngine.js";
// import ArcDb from "./arcDb.js";
// import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animations/animations.js";

// export default class Arc extends CompEngine {

//     lineWidth:AniNumber;
//     midX:AniNumber;
//     midY:AniNumber;
//     endX:AniNumber;
//     endY:AniNumber;
    
// constructor (propsDb :ArcDb ,pack :Pack){ 
//     super(propsDb,pack);

//     this.lineWidth  = new AniNumber(propsDb.lineWidth );
//     this.midX       = new AniNumber(propsDb.midX );
//     this.midY       = new AniNumber(propsDb.midY );
//     this.endX       = new AniNumber(propsDb.endX );
//     this.endY       = new AniNumber(propsDb.endY );
//     //--core props
//     // this.color.set(propsDb.color.value());
// }
  
// update(msDelta: number, p: Pack): boolean {
//    super.update(msDelta,p);
//    this.lineWidth.update(msDelta); 
//    this.midX.update(msDelta); 
//    this.midY.update(msDelta); 
//    this.endX.update(msDelta); 
//    this.endY.update(msDelta); 
//    return true;
// }

// draw(p:Pack):boolean{
// this.style.fillStyle = this.color.value();    
// this.style.strokeStyle = this.color.value(); 
// // this.style.fillStyle = "red";    
// // this.style.strokeStyle = "red"; 
// this.style.lineWidth = this.lineWidth.value(); 

// this.preDraw(p);
// // this.style.opacity = (this.opacity.value());
// // this.applyRotation(p);
// //--dont draw border or
// //-----------------------------preDrawEnds

// // if (this.showBoundingLines == true){
// //     p.beginPath();
// //     // p.strokeStyle = 'gray';
// //     p.moveTo(this.start);
// //     p.ctx.lineTo(this.mid.x,this.mid.y);
// //     p.ctx.lineTo(this.end.x,this.end.y);
// //     p.stroke();
    
// // }

// p.beginPath();
// p.ctx.lineWidth = 6;
// p.ctx.strokeStyle = "red";
// p.ctx.moveTo(100, 100);
// p.ctx.quadraticCurveTo(300, 300, 500, 100);
// p.ctx.stroke();


// p.ctx.strokeStyle = "yellow";
// p.ctx.lineWidth = 2;
// p.beginPath();
// p.ctx.moveTo(100,100);
// p.ctx.lineTo(300,300);
// p.ctx.lineTo(500,100);
// p.ctx.stroke();
// // p.arcTo(
// //     this.midX.value(),
// //     this.midX.value(),
// //     this.endX.value(),
// //     this.endY.value(),
// //     40,
// //     this.style
// //     );

// // p.arcTo(this.mid,this.end,this.style,40);
// p.stroke();

// return true;
// this.postDraw(p); //its ok to keep
// return true;
// }
// //---we do not need to add padding etc to we just over-written compWidth and compHeight methods.
// compWidth(): number {
//     return 0;
// // return Math.floor(Math.abs(this.x2.value() - this.x.value()));    
// }
// compHeight(): number {
//     return this.lineWidth.value();
// }


// }//class