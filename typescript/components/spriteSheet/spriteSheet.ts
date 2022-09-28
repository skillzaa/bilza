import {Pack } from "../../bilza.js";
import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animationModule/animations.js";

import BaseSpriteSheet from "./BaseSpriteSheet.js";

import ImageData from "./imageData.js";

//--We have togoImage and gotoImageName both in this class where as in SpriteSheetAlt we just have gotoImageName.
//--And we can define images in both BUT incase of SpriteSheetAlt we must define some image before we can use it.

export default class SpriteSheet extends BaseSpriteSheet {
public imagesList :ImageData[];
public row :AniNumber;
public column :AniNumber;
//---input from user
private iconWidth :number;
private iconHeight :number;
public totalColumns :number;
public totalRows :number;

constructor(imgUrl :string, iconWidth:number, iconHeight :number, totalColumns :number ,totalRows :number){
super(imgUrl);
this.imagesList = [];
// this.leftExtraPix = 0;
// this.topExtraPix = 0;
this.totalColumns = totalColumns;
this.totalRows = totalRows;
this.iconWidth = iconWidth;
this.iconHeight = iconHeight;

this.width.set(this.iconWidth); 
this.height.set(this.iconHeight); 


this.row = new AniNumber(0);
this.column = new AniNumber(0);

}


update(msDelta: number, p: Pack): boolean {
    this.row.update(msDelta);
    this.column.update(msDelta);
    super.update(msDelta,p);
    return true;
}

defineImage(name :string, column :number, row:number){
    const a = new ImageData (name,column,row);
    this.imagesList.push(a);
}
draw(p:Pack):boolean{
this.preDraw(p);
/**
 * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
 */ 
    p.drawImageSrcDest(this.img,
        ( this.leftExtraPix + (this.column.value() * this.iconWidth)),
        (this.topExtraPix + (this.row.value() * this.iconHeight)),
        this.iconWidth, 
        this.iconHeight,
        this.xAligned(),
        this.yAligned(),
        this.width.value(),
        this.height.value() 
    );   
this.postDraw(p);            
return true;
}

gotoImage(atFrame :number, row :number , column :number){
if (row > this.totalRows || column > this.totalColumns){
    console.info(`the value of row (${row}) or column (${column}) exceeds total rows (${this.totalRows}) or total columns (${this.totalColumns})`);
    return;
}    
    this.row.goto(atFrame,row);
    this.column.goto(atFrame , column);
}
 
gotoImageName(atFrame :number, imageName :string):boolean{
    for (let i = 0; i < this.imagesList.length; i++) {
        if (this.imagesList[i].name == imageName){
            this.column.goto(atFrame, this.imagesList[i].column );
            this.row.goto(atFrame, this.imagesList[i].row );
            return true;
        }
    }
return false;
}
    
}//comp ends