import {Pack,BaseComponent,DrawLayer} from "../bilza.js";
import XY from "../design/xy.js";

export default class BgCircles extends BaseComponent {
    count :number;
    size :number;
    delay :number;
    private xy :XY[];
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
    this.xy =[];
}


draw(p:Pack):boolean{
    if (this.delayCounter <= this.delay){
        this.delayCounter += 1;

        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        for (let i = 0; i < this.xy.length ; i++) {
            p.drawCircle(
                this.xy[i].x,
                this.xy[i].y,
                this.size,
                true,
                0,
                (2 * Math.PI),
                this.style);
        }
        return false;
    }else {
        this.xy.length = 0;
        for (let i = 0; i < this.count ; i++) {
        let xy = new XY(
         Math.ceil(Math.random()* p.canvasWidth()),
         Math.ceil(Math.random()* p.canvasHeight())
        ) ;           
        this.xy.push(xy);
        }
        this.delayCounter=0;
    }    
   

   
return true;
}

}