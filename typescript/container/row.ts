// import {Pack,AniBoolean,AniNumber,AniColor} from "../bilza.js";
// import BaseComponent from "../BaseComponent/00BaseComponent.js";
// import Text from "../components/text.js";

// export default class Row extends BaseComponent {
// textArray : Text[];
// private incommingTextArray : string[];
// x_internal :number;
// colorBackground :AniColor;


// constructor (incommingTextArray :string = "one two"){ 
//     super();
//     this.x_internal = 0;
//     //--save for later use
//     this.incommingTextArray = incommingTextArray.split(" ");
   
    

//     this.colorBackground = new AniColor("grey");
//     // console.log("this.incommingTextArray",this.incommingTextArray);
//     this.textArray = [];
//     //-----------create 
//     //--this.incommingTextArray and not just incommingTextArray
//     for (let i = 0; i < this.incommingTextArray.length; i++) {
//         const item = this.incommingTextArray[i];
//         const txt = new Text(item);
//         txt.width.set(10);
//         //--txt.usePercentages = false; // very importantay-Not only will the x and y not use percentages the paddings (all 4) will also be not using percentages. This is genious
//         txt.responsive = false;
//         //--fitTextToWidth = false; // very importantay -so now we can keep the size of text same by fontSize.
//         txt.fitTextToWidth = false;
//         txt.border.set(0);
//         txt.paddingLeft.set(2);
//         txt.paddingRight.set(2);
//         // txt.content.set(incommingTextArray[i]);
//         this.textArray.push(txt);
//     }
// }

// init(p: Pack): boolean {
//     super.init(p);

//     for (let i = 0; i < this.textArray.length ; i++) {
//         const txt = this.textArray[i];
//         txt.charsWidth = this.charsWidth;
//         txt.init(p);
//     }
//     return true;
// }

// update(msDelta: number, p: Pack): boolean {
    
//     this.colorBackground.update(msDelta);
//     super.update(msDelta,p);

//     for (let i = 0; i < this.textArray.length ; i++) {
//         const txt = this.textArray[i];
       
//         txt.update(msDelta,p);
//     }
//     //-------------------------------------------
//     return true;
// }
// widthInPix(): number {
//     if (this.canvasWidth !== null ){
//     let wd=0;
//     for (let i = 0; i < this.textArray.length ; i++) {
//         const txt = this.textArray[i];
//         wd += txt.widthInPix();
//     }
//     return (wd + this.paddingLeft.value() + this.paddingRight.value() );
//     }else {
//         throw new Error("the component is not initialized yet");        
//     }
// }
// heightInPix(): number {
//     if (this.canvasWidth !== null ){
//     let wd=0;
//     for (let i = 0; i < this.textArray.length ; i++) {
//         const txt = this.textArray[i];
//         if (wd < txt.heightInPix() ){
//             wd = txt.heightInPix();
//         }
//     }
//         return (wd +this.paddingTop.value() + this.paddingBottom.value()  );
//     }else {
//         throw new Error("the component is not initialized yet");        
//     }
// }
// setFontSize(fontSize :number){
//     for (let i = 0; i < this.textArray.length ; i++) {
//         const item = this.textArray[i];
//         item.fontSize.set(fontSize);
//     }
// }
// setFontColor(fontColor :string){
//     for (let i = 0; i < this.textArray.length ; i++) {
//         const item = this.textArray[i];
//         item.color.set(fontColor);
//     }
// }
// getCell(column :number):Text{
//     return this.textArray[column];
// }
// draw(p:Pack):boolean{

// this.applyRotation(p);
// //--------------
// this.style.fillStyle = this.color.value();    
// this.style.opacity = this.opacity.value();

// this.style.strokeStyle = this.color.value(); 

// //---------------------------------------
// this.drawBackground(p);
// //---------------------------------------
// const yAligned = this.yAligned();
// for (let i = 0; i < this.textArray.length ; i++) {
//     const txt = this.textArray[i];
//     txt.x.set(this.xAligned() + this.x_internal + this.paddingLeft.value());
//     txt.y.set( yAligned + this.paddingTop.value() );
//     txt.draw(p);
//     this.x_internal += txt.widthInPix();
//     // console.log("x",txt.x.value());
//     // this.x_internal += p.pixToXPerc(txt.widthInPix());
// }
// //----------------------------
// this.removeRotation(p);
// this.style.opacity = 1;
// this.x_internal = 0;
// //----------------------------
// return true;
// }
// drawBackground(p :Pack){

// this.style.fillStyle = this.colorBackground.value();    
// this.style.strokeStyle = this.colorBackground.value();  

// p.drawFillRect (this.xAligned(), this.yAligned(),
// this.widthInPix() , this.heightInPix(),this.style);
// } 

// }