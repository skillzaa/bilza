import Shadow from "./80Shadow.js";

export default class WidthHeight extends Shadow {

constructor (){
    super();
}
widthInPix(): number {
    if (this.canvasWidth !== null ){
        return Math.ceil((this.canvasWidth/100) * this.width.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
heightInPix(): number {
    if (this.canvasHeight !== null){
    return Math.ceil((this.canvasHeight/100)*this.height.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
//--bad wrong
// widthInPix(): number {
// return 0;
// }
// //--width is actually /shd be dynWidth in pix
// heightInPix(): number {   
// return 0;
// }


}//component ends 