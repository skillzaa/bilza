import {Cornor} from "./cornor.js";

export default class Xy {
public cornor :Cornor;

constructor(cornor :Cornor = Cornor.leftTop){
this.cornor = cornor;
}
X(xperc :number, comp_width :number,canvasWidth :number):number{
xperc = this.setBWZeronHundred(xperc);    
let x = 0;    
switch (this.cornor) {
    case Cornor.leftTop:
    x = ((canvasWidth/100) * xperc);     
    break;

    default:
        break;
}
return x;
}
Y(yperc :number, comp_width :number,canvasHeight :number):number{
yperc = this.setBWZeronHundred(yperc);    

let y = 0;    
switch (this.cornor) {
    case Cornor.leftTop:
    y = ((canvasHeight/100) * yperc);     
    break;

    default:
        break;
}
return y;
}

private setBWZeronHundred(n:number):number{
  if (n < 0 ){return 0;}  
  if (n > 100 ){return 100;}
  return n;  
}

}