import CtxData from "../design/ctxData.js";


export default function textShadow(startFrame:number=0,x:number,y:number):CtxData{
let ctxData = new CtxData(5);

ctxData.startFrame = 3;
ctxData.fontSize = 70;
ctxData.fillStyle = "blue";
ctxData.x = x;
ctxData.y = y;
ctxData.shadowOffsetX = 4;
ctxData.shadowOffsetY = 4;
ctxData.shadowBlur = 4;
ctxData.shadowColor = "black";
return ctxData;
}