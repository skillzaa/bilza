import Pack from "../pack/pack.js";
import Component from "../compEngine/compEngine.js";
import ComponentPack from "../componentPack/componentPack.js";

import {AniNumber,AniString,AniBoolean,AniColor,} from "../animations/animations.js";

//-20-sep-2022

export default class Wave extends Component {

numberOfWaves   :AniNumber;
midLineColor    :AniColor;
showMidLine     :AniBoolean;

constructor (id :string,startTime :number,endTime :number,componentPack :ComponentPack,numberOfWaves :number=3,color :string ="blue"){ 

super(componentPack);
this.numberOfWaves = new  AniNumber(numberOfWaves);
this.color.set(color);
this.midLineColor = new AniColor("red");
this.showMidLine = new AniBoolean(true);
this.width.set(20);
this.height.set(20);
}

draw(p:Pack):boolean{
    this.preDraw(p);
//--------------
let increase = Math.PI * this.numberOfWaves.value() / this.width.value(); 

// console.log("increase", increase);
this.style.fillStyle = this.color.value();
this.style.strokeStyle = this.color.value(); 
//---------------------------------------
let oldX = this.contentX();

let endX = this.contentX() + this.width.value();

let oldY =  ( this.contentY() + (this.height.value()/2) );
let counter = 1;

for ( let x = this.contentX()  ; x <= endX ; x += 0.5 ) {

    let y = (Math.sin(counter) * this.height.value()/2 ) ;
    y += ( this.contentY() + (this.height.value()/2) );

    counter +=   increase;
    this.style.lineWidth = 2;
    p.beginPath();
    p.moveTo(oldX, oldY);
    p.lineTo(x,y,this.style);  
    p.stroke();
    //6----------------
    oldX = x;
    oldY = y;
}

//-------draw mid line
if (this.showMidLine.value() == true){
    this.style.fillStyle = this.midLineColor.value();
    this.style.strokeStyle = this.midLineColor.value();
    this.style.lineWidth = 1; 
    p.beginPath();       // Start a new path
    p.moveTo(
        this.contentX(), 
        this.contentY() + (this.height.value()/2));
    
    p.lineTo(
        this.contentX() + this.width.value(), 
        this.contentY() + (this.height.value()/2) ,
        this.style);  
    p.stroke();
}
//----------------------------
this.postDraw(p)
return true;
}
}