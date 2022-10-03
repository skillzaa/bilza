import ComponentPack from "./componentPack.js";
import Pack from "../pack/pack.js";



export default function getComponentPack(pack :Pack):ComponentPack {
const canvasWidth :number = pack.canvasWidth();
const canvasHeight :number = pack.canvasHeight();

const charsWidth:(chars:string,fontSize:number,fontName:string)=>number
 = pack.charsWidth;

 const compPack = new ComponentPack(
    canvasWidth,
    canvasHeight,
    charsWidth,
 );
 return compPack;
}