import {Pack,BaseComponent} from "../bilza.js";

import {AniNumber,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
/**
 * The rect a very interesting component. All it need it a border and a background , which every component has by default. But still it has another rectangle inside it. Thus it has border ==> inside which there is background ==> inside which is padding ==> and inside which is the contentArea where the actual rect is drawn.
 * Actually it is just the box system of bilza library. 
 */
export default class Rect extends BaseComponent {
public lineWidth :AniNumber;

constructor (color :string="#000000"){ 
    super();
    this.color.set(color); 
    this.lineWidth = new AniNumber(1);
    
}

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.lineWidth.update(msDelta);
    return true;
}

draw(p:Pack):boolean{
this.preDraw(p)
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
this.style.lineWidth = this.lineWidth.value();

   p.drawRect(
    this.contentX(),
     this.contentY(),

    this.width.value(),
    this.height.value(),
    this.style
    );

this.postDraw(p);
return true;
}
}