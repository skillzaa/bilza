import {Pack,DrawLayer,AnimatedNoBase,BaseComponent } from "../Bilza.js";

export default class Pic extends BaseComponent {
img :HTMLImageElement;
protected orignalWidth :number;
protected orignalHeight :number;
public dynWidth :AnimatedNoBase;    //required by all comps--no
public dynHeight :AnimatedNoBase;    //required by all comps--no

constructor(imgUrl :string,dynWidth:number=10,dynHeight :number=10){
super();
this.dynWidth = new AnimatedNoBase(dynWidth); 
this.dynHeight = new AnimatedNoBase(dynHeight) ;


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
    //--Aspect ratio
    // this.d.widthPercent = widthPercent;
    // if (heightPercent == null) {
    //     this.d.heightPercent = aspectRatioHeight(canvasWidth/100*this.d.widthPercent);
    // }else {
    //     this.d.heightPercent = heightPercent;
    // }
}

init(p: Pack): boolean {
    super.init(p);    
this.dynWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

this.dynHeight.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

if(this.canvasWidth==null){throw new Error("init error");}
if(this.canvasHeight==null){throw new Error("init error");}
const wd = (this.dynWidth.value() * (this.canvasWidth/100)).toString();
this.img.setAttribute("width", wd);    

const ht = (this.dynHeight.value() * (this.canvasHeight/100)).toString();

this.img.setAttribute("height", ht);    

return true;    
}


update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.dynWidth.update(msDelta);
    this.dynHeight.update(msDelta);
    return true;
}

width():number {
if(this.canvasWidth==null){throw new Error("init error");
}    
        let wd =  this.canvasWidth /100 * this.dynWidth.value();
        return wd;
}
height():number {
if(this.canvasHeight==null){throw new Error("init error");}    
        return  this.canvasHeight /100 * this.dynHeight.value();
}

draw(p:Pack):boolean{
    p.drawImage(this.img,
                this.loc.x(),
                this.loc.y(),
                this.width(),
                this.height()
            );    
return true;
}

resize(fromTime :number,toTime :number,fromWidth :number,toWidth :number,fromHeight :number,toHeight :number){
    this.dynWidth.animate(fromTime,toTime,fromWidth,toWidth);
    this.dynHeight.animate(fromTime,toTime,fromHeight,toHeight);
}

}//comp ends

//--important line keep safe
// myImg.style.width = (currWidth + 100) + "px";