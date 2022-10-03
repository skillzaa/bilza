import Pack from "../pack/pack.js";
import Component from "../compEngine/compEngine.js";
import ComponentPack from "../componentPack/componentPack.js";


export default class Pic extends Component {
img :HTMLImageElement;
//--There is no use for them for now
protected orignalWidth :number;
protected orignalHeight :number;

constructor(startTime :number,endTime :number,componentPack :ComponentPack,imgUrl :string, width:number=25, height :number=25){

super(componentPack);

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
this.drawLayer = 2;
}

init(p: Pack): boolean {
    // super.init(p);    
//---do i need them ?????? isnt it covered in super.init?    
if(this.canvasWidth==null){throw new Error("init error");}
if(this.canvasHeight==null){throw new Error("init error");}
//--importantay 
this.img.setAttribute("width", this.width.value().toString());    
this.img.setAttribute("height", this.height.value().toString());    
return true;    
}


draw(p:Pack):boolean{
this.preDraw(p);

    p.drawImage(this.img,
                this.contentX(),
                this.contentY(),
                this.width.value(),
                this.height.value()
    );   

this.postDraw(p);            
return true;
}

}//comp ends

//--important line keep safe
// myImg.style.width = (currWidth + 100) + "px";