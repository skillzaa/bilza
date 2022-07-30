import {Pack,DrawLayer,AniNumber } from "../../bilza.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
import ImageData from "./imageData.js";
export default class SpriteSheet extends BaseSpriteSheet {

public row :AniNumber;
public column :AniNumber;
//---input from user
private iconWidth :number;
private iconHeight :number;
public totalColumns :number;
public totalRows :number;

constructor(imgUrl :string, iconWidth:number, iconHeight :number, totalColumns :number ,totalRows :number){
super(imgUrl);
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
        ( this.leftExtraPix + (this.column.value() * this.iconWidth)),
        (this.topExtraPix + (this.row.value() * this.iconHeight)),
        this.iconWidth, 
        this.iconHeight,
        this.xAligned(),
        this.yAligned(),
        this.contentWidth(),
        this.contentHeight() 
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

}//comp ends
