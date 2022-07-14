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


}//component ends 