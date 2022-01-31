import CtxData from "./templ.js";


export default function ctxDefaultInit ():CtxData{
let ctxData = new CtxData();
ctxData.fillStyle = "#070707";
ctxData.strokeStyle = "#070707";
ctxData.fontName = "serif";
ctxData.fontSize = 25;
ctxData.lineWidth = 2;
ctxData.x = 0;
ctxData.y = 0;
    
return ctxData;
}