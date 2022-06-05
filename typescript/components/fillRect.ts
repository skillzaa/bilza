import {Pack,BaseComponent,AnimatedNoBase} from "../Bilza.js";

export default class FillRect extends BaseComponent {
  
    // lineWidth :AnimatedNoBase;
    color :string;
    trueWidth :number;
    public dynWidth :AnimatedNoBase;    //required by all comps--no
public dynHeight :AnimatedNoBase;    //required by all comps--no

constructor (color :string="#000000"){ 
    super();
    // this.lineWidth = new AnimatedNoBase(1) ;
    this.color = color ; 
    this.trueWidth = 0;
    this.dynHeight = new AnimatedNoBase(10) ;
    this.dynWidth = new AnimatedNoBase(10); 
  
}
init(p: Pack): boolean {
    super.init(p);
    this.dynWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

    this.dynHeight.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
    
// this.lineWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
return true;

}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
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
    this.loc.x(),
    this.loc.y(),
    this.width(),
    this.height(),
    this.style
    );
return true;
}

}