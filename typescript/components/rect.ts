// import AniNumber from "../BaseComponent/animation/aniNumber/animatedNoBase/AniNumber.js";

import {Pack,BaseComponent,AniNumber} from "../bilza.js";

export default class Rect extends BaseComponent {
public dynWidth :AniNumber;    //required by all comps--no
public dynHeight :AniNumber;    //required by all comps--no
public lineWidth :AniNumber;
public color :string;

constructor (color :string="#000000"){ 
    super();
    this.lineWidth = new AniNumber(1) ;
    this.dynWidth = new AniNumber(10);    
this.dynHeight = new AniNumber(10);    
    this.color = color ; 
    
}
init(p: Pack): boolean {
    super.init(p);
// this.dynWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

// this.dynHeight.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

// this.lineWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
return true;

}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.lineWidth.update(msDelta);
    this.dynWidth.update(msDelta);
    this.dynHeight.update(msDelta);
    return true;
}
width(): number {
    if (this.canvasWidth !== null ){
        return Math.ceil((this.canvasWidth/100) * this.dynWidth.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
height(): number {
    if (this.canvasHeight !== null){
    return Math.ceil((this.canvasHeight/100)*this.dynHeight.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth.value();

   p.drawRect(
    this.xAligned(),
    this.yAligned(),
    this.width(),
    this.height(),
    this.style
    );
return true;
}

}