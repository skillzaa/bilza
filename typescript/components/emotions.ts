import {Pack,DrawLayer,BaseComponent,AniNumber } from "../bilza.js";

export default class Emotions extends BaseComponent {
img :HTMLImageElement;
//--There is no use for them for now
protected orignalWidth :number;
protected orignalHeight :number;
public row :AniNumber;
public column :AniNumber;
private sourceWidth :number;
private sourceHeight :number;

constructor(imgUrl :string, IconWidth:number=70, IconHeight :number= 70){
super();

this.sourceWidth = IconWidth;
this.sourceHeight = IconHeight;
this.width.set(this.sourceWidth); 
this.height.set(this.sourceHeight); 
this.responsiveDims = false;
this.responsivePadding = false;
this.row = new AniNumber(0);
this.column = new AniNumber(0);

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

update(msDelta: number, p: Pack): boolean {
    this.row.update(msDelta);
    this.column.update(msDelta);
    super.update(msDelta,p);
    return true;
}

draw(p:Pack):boolean{
this.preDraw(p);
/**
 * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
 */
    p.drawImageSrcDest(this.img,
        (this.column.value() * this.sourceWidth),
        (this.row.value() * this.sourceWidth),
        this.sourceWidth, //
        this.sourceHeight,
        this.xAligned(),
        this.yAligned(),
        this.contentWidth(),
        this.contentWidth() //dont use contentHeight or the image is taller
    );   

this.postDraw(p);            
return true;
}

gotoImage(atFrame :number, row :number , column :number){
    this.row.goto(atFrame,row);
    this.column.goto(atFrame , column);
}

}//comp ends

//--important line keep safe
// myImg.style.width = (currWidth + 100) + "px";