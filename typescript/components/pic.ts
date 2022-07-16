import {Pack,DrawLayer,BaseComponent } from "../bilza.js";

export default class Pic extends BaseComponent {
img :HTMLImageElement;
//--There is no use for them for now
protected orignalWidth :number;
protected orignalHeight :number;

constructor(imgUrl :string, width:number=25, height :number=25){
super();

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
this.img.setAttribute("width", this.contentWidth().toString());    
this.img.setAttribute("height", this.contentHeight().toString());    
return true;    
}


draw(p:Pack):boolean{
this.preDraw(p);

    p.drawImage(this.img,
                this.xAligned(),
                this.yAligned(),
                this.contentWidth(),
                this.contentHeight()
    );   

this.postDraw(p);            
return true;
}

}//comp ends

//--important line keep safe
// myImg.style.width = (currWidth + 100) + "px";