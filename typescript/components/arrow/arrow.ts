// import Pack from "../../pack/pack.js";
// import Component from "../../component/component.js";
// import ComponentPack from "../../compiler/componentPack.js";

// import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animations/animations.js";

// import Templ from "./templ.js";
// import Theme from "./theme.js";

// export default class Arrow extends Component {
// public x2 : AniNumber; 
// public y2 : AniNumber;
// public headWidth :AniNumber;
// public headHeight :AniNumber;
// public headFilled :AniBoolean;
// public colorHead :AniColor;
// public lineWidth :AniNumber;

// public templ :Templ; 
// public theme :Theme; 

    

// constructor (startTime :number,endTime :number,componentPack :ComponentPack,x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
// super(startTime,endTime,componentPack);

// this.x.set(x1); 
// this.y.set(y1);
// this.headWidth = new AniNumber(4);
// this.headWidth.setResponsive();
// this.headFilled = new AniBoolean(true);
// this.headHeight = new AniNumber(2);
// this.headHeight.setResponsive();
// this.x2 = new AniNumber(x2);
// this.x2.setResponsive();
// this.y2 = new AniNumber(y2);
// this.y2.setResponsive();
// this.lineWidth = new AniNumber(2);

// this.color.set(color);
// this.colorHead = new AniColor(color);

// this.drawLayer = 2;
// this.templ = new Templ(this);
// this.theme = new Theme(this);

// }

    
// update(msDelta: number, p: Pack): boolean {
//    super.update(msDelta,p);
//    this.x2.update(msDelta); 
//    this.y2.update(msDelta); 
//    this.lineWidth.update(msDelta); 
//    this.headFilled.update(msDelta); 
//    this.headHeight.update(msDelta); 
//    this.headWidth.update(msDelta); 
//    return true;
// }

// draw(p:Pack):boolean{
// this.preDrawNonBoxed(p);
// this.style.fillStyle = this.color.value();    
// this.style.strokeStyle = this.color.value(); 
// this.style.lineWidth = this.lineWidth.value(); 
// //----------------------------------------------
// let verticalArrow = false;
// let lineEndX;

// if  (this.x2.value() > this.x.value()){
//     lineEndX = this.x2.value() - (this.headWidth.value() -1);

// }else if (this.x2.value() < this.x.value()) {
//     lineEndX = this.x2.value() + (this.headWidth.value() );

// }else   {   
//     lineEndX = this.x2.value();
//     verticalArrow = true;
// }
// //----------------------------------------------
// let lineEndY;
// if  (this.y2.value() > this.y.value()){
//     if (verticalArrow ==true){
//         lineEndY = this.y2.value() - (this.headWidth.value()  );
//     }else {
//         lineEndY = this.y2.value() - (this.headHeight.value()  );
//     }

// }else if (this.y2.value() < this.y.value()) {
//     if (verticalArrow ==true){
//         lineEndY = this.y2.value() + (this.headWidth.value() );
//     }else {
//         lineEndY = this.y2.value() + (this.headHeight.value() );
//     }
//     // lineEndY = this.y2.value() ;

// }else   {   
//     lineEndY = this.y2.value();
// }

// //--///////////////////////////////////////////////

// p.drawLine(
//     this.x.value(),
//     this.y.value(),
//     lineEndX,
//     lineEndY,
//     this.style
// );
// //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;Arrow Head Code
// p.save();
// const rotateAngle  = Math.atan2(this.y2.value() - lineEndY,this.x2.value() - lineEndX);

// p.translate( this.x2.value() , this.y2.value() );

// //---------------------------------
// p.rotateRad(  rotateAngle );
// //---------------------------------
// this.style.fillStyle = this.colorHead.value();    
// this.style.strokeStyle = this.colorHead.value(); 

// //---Arrow Head-- 
// p.beginPath(); 

// p.moveTo( 0 , 0); 
// p.lineTo( -this.headWidth.value(), this.headHeight.value(),this.style); 
// p.lineTo( -this.headWidth.value(), -this.headHeight.value(),this.style); 
// p.lineTo( 0, 0,this.style); 

// if (this.headFilled.value() ==true){
//     p.fill(this.style);
// }else {
//     p.stroke()
// }

// //----------restored
// p.restore();
// //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// this.postDraw(p); //its ok to keep
// return true;
// }
// //---we do not need to add padding etc to we just over-written compWidth and compHeight methods.
// compWidth(): number {
// return 0;    
// }
// compHeight(): number {
// return 0;
// }
// /**
//  * line comp is drawn differently- so we do not want to change align at all since that will add extra addition/sub in calc.
//  * in the rotate align as well we should just change x value and not y
//  */
// public align(x :0|1|2|null=null, y?: number | null): void {
// //--we do not align line comp so there is no add / sub in the x/y value    
//     super.align(0,0);
// }
// public alignRotate(x :0|1|2|null=null, y?: number | null): void {
//     super.alignRotate(x,0);
// }

// public pointTo(second :number, x :number, y : number){
//     this.x2.goto(second,x);
//     this.y2.goto(second,y);
     
// }
// }//class