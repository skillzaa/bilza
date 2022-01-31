import {Cornor} from "./cornor.js";


export default class Xy {
cornor :Cornor;
x :number | null;
y :number | null;
width :number;
height :number;

constructor(x:number=0,y:number=0 ,width :number=0,height :number=0,cornor :Cornor =Cornor.leftTop){

this.cornor = cornor;
this.x = this.setBWZeronHundredOrNull(x);
this.y = this.setBWZeronHundredOrNull(y);
this.width = this.setBWZeronHundred(width);
this.height = this.setBWZeronHundred(height);
}
X(canvasWidth :number):number | null{
if (this.x == null){return null;}    
let x = 0;    
switch (this.cornor) {
    case Cornor.leftTop:
    x = ((canvasWidth/100) * this.x);     
    break;

    default:
        break;
}
return x;
}
Y(canvasHeight :number):number | null{
    if (this.y == null){return null;}     
let y = 0;    
switch (this.cornor) {
    case Cornor.leftTop:
    y = ((canvasHeight/100) * this.y);     
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
private setBWZeronHundredOrNull(n:number | null):number | null{
    if (n == null ){return null;}
  if (n < 0 ){return 0;}  
  if (n > 100 ){return 100;}
  return n;  
}
}