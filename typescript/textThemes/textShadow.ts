import TransitionData from "../design/transitionData.js";


export default function textShadow(startFrame:number=0,x:number,y:number):TransitionData{
let td = new TransitionData();
td.startFrame = 5;

td.ctxData.startFrame = 3;
td.ctxData.fontSize = 70;
td.ctxData.fillStyle = "blue";
td.ctxData.x = 300;
td.ctxData.y = 100;
td.ctxData.shadowOffsetX = 4;
td.ctxData.shadowOffsetY = 4;
td.ctxData.shadowBlur = 4;
td.ctxData.shadowColor = "black";
return td;
}