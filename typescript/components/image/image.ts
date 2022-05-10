import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ImageData} from "./imageData.js";
import aspectRatioHeight from "../../functions/aspectRatioHeight.js"; 
import {XAlignment} from "../../BaseComponent/xAlignment.js";
import {YAlignment} from "../../BaseComponent/yAlignment.js";


export default class BilzaImage extends Component<ImageData> {
    xAlignmentOptions:typeof XAlignment;   
    yAlignmentOptions:typeof YAlignment;  
    img :HTMLImageElement;
    orignalWidth :number;
    orignalHeight :number;
constructor (startTimeSeconds :number=0,endTimeSeconds:number=300,
    imgId :string,
    x :number=0, y :number=0){

    super(DataFn,startTimeSeconds,endTimeSeconds);
    this.xAlignmentOptions = XAlignment; //final-ok
    this.yAlignmentOptions = YAlignment; //final-ok
   
    this.img = document.getElementById(imgId) as HTMLImageElement;
    if (this.img == null){
        throw new Error("image could not be found");
        
    }else {
        //--before clientHeight we need appendChild
        //--we need to save these since once display == none then they are 0
        document.body.appendChild(this.img);
        this.orignalWidth = this.img.clientWidth;
        this.orignalHeight = this.img.clientHeight;
        // console.log("clientWidth", this.img.clientWidth);
        // console.log("clientHeight", this.img.clientHeight);
        //--if display == none then width and height = 0
        //---uffffffffffffffff
        this.img.style.display = "none";
    }

    this.d.x = x;
    this.d.y = y;
    //--Draw Layer
    this.drawLayer = DrawLayer.MiddleGround;
    //--Aspect ratio
    // this.d.widthPercent = widthPercent;
    // if (heightPercent == null) {
    //     this.d.heightPercent = aspectRatioHeight(canvasWidth/100*this.d.widthPercent);
    // }else {
    //     this.d.heightPercent = heightPercent;
    // }
}

width(p:Pack):number {
    if (this.d.useDynResize == true) {
        let wd =  p.canvasWidth()/100 * this.d.dynWidthPercent;;
        return wd;
    }else {
        let wd =  this.orignalWidth;
        return wd;
    }
}
height(p:Pack):number {
    if (this.d.useDynResize == true) {
        return  p.canvasHeight()/100 * this.d.dynHeightPercent;
    }else {
        return  this.orignalHeight;
    }
}

draw(p:Pack):boolean{

    p.drawImage(this.img,
                this.getX(p),
                this.getY(p),
                this.width(p),
                this.height(p)
            );
    
return true;
}
private getX(p :Pack):number{
let x = p.xPerc(this.d.x);    
            
switch (this.d.xAlignment) {
    case this.xAlignmentOptions.Left:
        
        break;
    case this.xAlignmentOptions.Mid:
         x = x - ((this.width(p)/2));
        break;
    
    case this.xAlignmentOptions.Right:
        x = x - (this.width(p));
        break;
}
return x ;
}
private getY(p :Pack):number{
    let y =   p.yPerc(this.d.y);  
    
switch (this.d.yAlignment) {
    case this.yAlignmentOptions.Top:
        break;
    case this.yAlignmentOptions.Mid:
         y = y - ((this.height(p)/2));
        break;
    
    case this.yAlignmentOptions.Bot:
        y = y - (this.height(p));
        break;
}
return y ;
}

}//comp ends

//--important line keep safe
// myImg.style.width = (currWidth + 100) + "px";