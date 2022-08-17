import {Pack } from "../../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../../animationModule/animations.js";

import ImageDataOpt from "./imageDataOpt.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";

export default class SpriteSheetAlt extends BaseSpriteSheet {

public imagesList :ImageDataOpt[];
public currentImage :AniNumber;

constructor(imgUrl :string){
super(imgUrl);
this.imagesList = [];
this.currentImage = new AniNumber(0);
}

init(p: Pack): boolean {
    super.init(p);    

if(this.imagesList.length < 1){console.error("Sprite Sheet Optimized :no images added");} 

this.currentImage.set(0);
return true;    
}

update(msDelta: number, p: Pack): boolean {
    this.currentImage.update(msDelta);
    this.width.set(this.imagesList[this.currentImage.value()].width);
    this.height.set(this.imagesList[this.currentImage.value()].height);
    super.update(msDelta,p);
    return true;
}

draw(p:Pack):boolean{
this.preDraw(p);
/**
 * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
 */
    p.drawImageSrcDest(this.img,
        this.imagesList[this.currentImage.value()].x ,
        this.imagesList[this.currentImage.value()].y ,
        this.imagesList[this.currentImage.value()].width ,
        this.imagesList[this.currentImage.value()].height ,
        this.xAligned(),
        this.yAligned(),
        this.width.value(),
        this.height.value() 
    );   
this.postDraw(p);            
return true;
}

defineImage(name :string,x :number,y:number,width:number,height:number){
    const a = new ImageDataOpt(name,x,y,width,height);
    this.imagesList.push(a);
}

gotoImageName(atFrame :number, imageName :string):boolean{
for (let i = 0; i < this.imagesList.length; i++) {
    if (this.imagesList[i].name == imageName){
        this.currentImage.goto(atFrame,i);
        return true;
    }
}
return false;
}

}//comp ends
