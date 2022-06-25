import {Pack,BaseComponent} from "../bilza.js";
import AniNumber from "../aniNumber/aniNumber.js";
export default class TestComp extends BaseComponent {
//   local_x :AniNumber;
//   local_y :AniNumber;
    // lineWidth :AnimatedNoBase;
    color :string;
    // trueWidth :number;
public dynWidth :AniNumber;    //required by all comps--no
public dynHeight :AniNumber;    //required by all comps--no

constructor (color :string="#008000"){ 
    super();
    // this.lineWidth = new AnimatedNoBase(1) ;
    this.color = color ; 
    // this.local_x = new AniNumber(0);
    // this.local_y = new AniNumber(0);
    // this.trueWidth = 0;
    this.dynHeight = new AniNumber(10) ;
    this.dynWidth = new AniNumber(10); 
  
}
init(p: Pack): boolean {
    super.init(p);
    // this.local_x.init();//-------------
    // this.dynWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

    // this.dynHeight.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
    
// this.lineWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
return true;

}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    // this.local_x.update(msDelta);
    // this.local_y.update(msDelta);
    this.x.update(msDelta);
    this.y.update(msDelta);
    // this.lineWidth.update(msDelta);
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
// this.style.lineWidth = this.lineWidth.value();

   p.drawFillRect(
    this.xAligned(),
    this.yAligned(),
    this.width(),
    this.height(),
    this.style
    );
return true;
}

}