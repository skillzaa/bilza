import {Pack,DrawLayer,BaseComponent } from "../Bilza.js";

export default class Pic extends BaseComponent {
img :HTMLImageElement;
//--There is no use for them for now
protected orignalWidth :number;
protected orignalHeight :number;

constructor(imgUrl :string, width:number=10, height :number=10){
super();
//--Remember width and height are percentages
this.width.set(width); 
this.height.set(height); 

// this.img = document.getElementById(imgId) as HTMLImageElement;
this.img = new Image();
this.img.src = imgUrl;
    if (this.img == null){
        throw new Error("image could not be found");
    }else {
        //--before clientHeight we need appendChild
        //--we need to save these since once display == none then they are 0
        document.body.appendChild(this.img);
        this.orignalWidth = this.img.clientWidth;
        this.orignalHeight = this.img.clientHeight;
        this.img.style.display = "none";
    }

    //--Draw Layer
    this.drawLayer = DrawLayer.MiddleGround;
}

init(p: Pack): boolean {
    super.init(p);    
//---do i need them ?????? isnt it covered in super.init?    
if(this.canvasWidth==null){throw new Error("init error");}
if(this.canvasHeight==null){throw new Error("init error");}
//--importantay 
this.img.setAttribute("width", this.widthInPix().toString());    
this.img.setAttribute("height", this.heightInPix().toString());    
return true;    
}

// update(msDelta: number, p: Pack): boolean {
//     super.update(msDelta,p);
//     return true;
// }

widthInPix():number {
if(this.canvasWidth==null){throw new Error("init error");}    
return  this.canvasWidth /100 * this.width.value();
}
heightInPix():number {
if(this.canvasHeight==null){throw new Error("init error");}    
return  this.canvasHeight /100 * this.height.value();
}

draw(p:Pack):boolean{
    p.drawImage(this.img,
                this.xAligned(),
                this.yAligned(),
                this.widthInPix(),
                this.heightInPix()
            );    
return true;
}

}//comp ends

//--important line keep safe
// myImg.style.width = (currWidth + 100) + "px";