import TimeObj from "./90TimeObj.js";

export default class Shadow extends TimeObj {
shadowColor :string;
shadowOffsetX :number;
shadowOffsetY :number;
shadowBlur :number;

constructor(){
super();
    //--shadow
this.shadowColor = "grey";
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
}

shadowsOff(){
this.style.shadowBlur = 0;
this.style.shadowOffsetX = 0;
this.style.shadowOffsetY = 0;
}
setShadow(shadowBlur :number=8,shadowOffsetX :number=10,shadowOffsetY :number =10,shadowColor :string ="grey"){
this.style.shadowBlur = shadowBlur;
this.style.shadowOffsetX = shadowOffsetX;
this.style.shadowOffsetY = shadowOffsetY;
this.style.shadowColor = shadowColor;
}
shadowsOn(){
    this.style.shadowBlur = 8;
    this.style.shadowOffsetX = 10;
    this.style.shadowOffsetY = 10;
    this.style.shadowColor = "grey";
}


}//claass