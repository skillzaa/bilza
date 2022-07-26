import {Pack,DrawLayer,BaseComponent,AniNumber } from "../../bilza.js";
import ImageData from "./imageData.js";

export default class SpriteSheet extends BaseComponent {
img :HTMLImageElement;
//--There is no use for them for now
protected orignalWidth :number;
protected orignalHeight :number;

public imagesList :ImageData[];
private currentImage :AniNumber;

constructor(imgUrl :string){
super();
this.imagesList = [];
this.currentImage = new AniNumber(0);
this.responsiveDims = false;
this.responsivePadding = false;


this.imagesList.push(new ImageData("aaaa",0,0,30,30));
this.imagesList.push(new ImageData("bbbb",10,10,30,30));
this.imagesList.push(new ImageData("cccc",30,30,30,30));
this.imagesList.push(new ImageData("dddd",20,20,30,30));
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
if(this.imagesList.length < 1){throw new Error("no images added");}
this.currentImage.set(0);
if(this.canvasWidth==null){throw new Error("init error");}
if(this.canvasHeight==null){throw new Error("init error");}
//--importantay 
this.img.setAttribute("width", this.contentWidth().toString());    
this.img.setAttribute("height", this.contentHeight().toString());    
return true;    
}

update(msDelta: number, p: Pack): boolean {
    this.currentImage.update(msDelta);
    super.update(msDelta,p);
    return true;
}
addImage(name :string,x :number,y:number,width:number,height:number){
    const a = new ImageData(name,x,y,width,height);
    this.imagesList.push(a);
}
draw(p:Pack):boolean{
this.preDraw(p);
/**
 * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
 */
    p.drawImageSrcDest(this.img,
        0,0,500,500,
        // this.imagesList[this.currentImage.value()].x ,
        // this.imagesList[this.currentImage.value()].y ,
        // this.imagesList[this.currentImage.value()].width ,
        // this.imagesList[this.currentImage.value()].height ,
        // this.xAligned(),
        // this.yAligned(),
        // this.contentWidth(),
        // this.contentHeight() 
        0,0,500,500
    );   
this.postDraw(p);            
return true;
}

gotoImage(atFrame :number, imageName :string):boolean{
let nameAdded = false;    
for (let i = 0; i < this.imagesList.length; i++) {
    if (this.imagesList[i].name == imageName){
        nameAdded = true;
        this.currentImage.set(i);
        return true;
    }
}
return false;
}

// private nameExists(name :String):boolean{
// let exists = false;
// for (let i = 0; i < this.imagesList.length; i++) {
//     if (this.imagesList[i].name == name){
//         exists = true;
//     }
// }
// return exists;
// }
// public getImageNames():{}{
// const names = { "aa" : 111 , "bb" : 334};
// let str = "{ ";
// for (let i = 0; i < this.imagesList.length; i++) {
//     str = str + `"${this.imagesList[i].name}" : "${this.imagesList[i].name}" `;
// }
// str = str + "  }";
// return names;
// }
}//comp ends

//--important line keep safe
// myImg.style.width = (currWidth + 100) + "px";