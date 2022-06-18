import { YAlignment } from "../design/yAlignment.js";
import notInitError from "../functions/noInitError.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import {OffScreenYOpt} from "../design/OffScreenYOpt.js";
import LocItem from "./locItem.js";

export default function solveY(ls :LocItem,compHeight :number|null=null,canvasHeight :number|null=null):number{

if (canvasHeight == null ){ throw new Error("canvasWidth = null");}
let localX = 0;

if (typeof ls.y != "number"){
const converted = OffScreenToNumber(ls.y,compHeight,canvasHeight);
const adjest = adjestAlign(converted,ls.yAlign,compHeight);
localX = converted + ls.xExtra;
}else {
    const pix = yPercToPix(ls.y,canvasHeight);
    const adjest = adjestAlign(pix,ls.yAlign,compHeight);
    return adjest + ls.xExtra;
}
return localX;    
}
 
function  yPercToPix(perc :number,canvasHeight :number):number{
let r = 0;
    if (canvasHeight == null){
        notInitError();
    }else {
        let checked = setBWzeroNhundred(perc);
        r = Math.ceil((canvasHeight  /100) * checked); 
    }
return r;    
}

function OffScreenToNumber(value :OffScreenYOpt,compHeight :number |null,canvasHeight :number |null):number{
if (compHeight == null || canvasHeight == null){
    throw new Error("module is not initialized");
}
//-------------------------------------------------    
let r = 0;
switch (value) {
    case OffScreenYOpt.YTop:
        r = -1 * (canvasHeight);
        break;
    case OffScreenYOpt.YBot:
        r = yPercToPix(100,canvasHeight) + canvasHeight;
        break;
    default:
        break;
}
return Math.ceil(r);
} 
function adjestAlign(incomming :number,yAlign :YAlignment, compHeight :number |null):number{
if(compHeight==null){throw new Error("init error");
}    
let x = incomming    
switch (yAlign) {
    case YAlignment.Top:
        break;
    case YAlignment.Mid:
         x = Math.floor(x - ((compHeight/2)));
        break;
    case YAlignment.Bot:
        x = Math.floor(x - (compHeight));
        break;
}
return x ;
}  