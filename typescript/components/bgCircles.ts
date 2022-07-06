import {Pack,BaseComponent,DrawLayer} from "../Bilza.js";

export default class BgCircles extends BaseComponent {
    count :number;
    size :number;
    delay :number;
    private delayCounter :number;
    color :string;
constructor (count :number= 10,color :string="#008000",delay :number=1) { 
    super();
    this.drawLayer = DrawLayer.BackGround;
    // this.lineWidth = new AnimatedNoBase(1) ;
    this.count = count ;   
    this.color = color ;  
    this.size = 20; 
    this.delay = delay * 60 ; // 1min * 60 = 60 frames   
    //for first time this.delayCounter = this.delay to draw immediately
    this.delayCounter = this.delay ;   
}


draw(p:Pack):boolean{
if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
    
}    
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        for (let i = 0; i < this.count ; i++) {
            p.drawCircle(
                (Math.random() * this.canvasWidth),
                (Math.random() * this.canvasHeight),
                this.size,
                true,
                0,
                (2 * Math.PI),
                this.style);
        }
return true;
}

}