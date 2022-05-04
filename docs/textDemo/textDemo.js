// import Bilza from "../lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
import {range,toggle,colorPicker,input} from "../uiHandlers/uiHandlers.js";

let bil = new Bilza("bilza",600,300);
let g = bil.gridTempl.simple();
g.d.flagDrawNumbers = true;
let txt = bil.add.text(0,60,"Text Sample","red");

txt.d.x = 50;
txt.d.y = 50;
txt.d.selected = false;
txt.d.visible = true;
txt.d.shadowColor = "grey";
txt.d.shadowOffsetX = 10;
txt.d.shadowOffsetY = 10;
txt.d.shadowBlur = 8;
txt.d.colorBoundingRectangle = "black";
txt.d.xAlignment = "LEFT";
txt.d.yAlignment = "TOP";
txt.d.content = "1234-1234";
txt.d.padding = 20;
txt.d.border = 50;
txt.d.dynWidth = 80;
txt.d.dynHeight = 30;
txt.d.colorBorder = "red";
txt.d.colorBg = "a0a0a";
txt.d.color = "red";
txt.d.fontSize = 25;
txt.d.flagDrawContent = true;
txt.d.flagDrawBorder = true;
txt.d.flagDrawBg = false;
txt.d.flagTextShadow = false;
txt.d.flagBgShadow = false;
txt.d.flagBorderShadow = false;
txt.d.maxDisplayChars = 200;
txt.d.flagUseDynResize = false;
txt.d.flagShrinkHeightToFit = false;
txt.d.flagUseRelativeXY = true;

//////////////////////////////////
//////////////////////////////////
bil.drawInit();
///////////////////////////////
let interval = setInterval(function(){
    // txt.d.border +=1;
    bil.drawInit();
},150);
///////////////////////////////
input(txt,"contentInput","content");
input(txt,"xRange","x",true,0);
input(txt,"yRange","y",true,0);

range(txt,"fontSizeRange","fontSize");
range(txt,"borderRange","border");
range(txt,"paddingRange","padding");
range(txt,"dynWidthRange","dynWidth");
range(txt,"dynHeightRange","dynHeight");
range(txt,"maxDisplayCharsRange","maxDisplayChars");
toggle(txt,"flagUseDynResizeToggle","flagUseDynResize");
toggle(txt,"flagShrinkHeightToFitToggle","flagShrinkHeightToFit");
//--------contentInput-------
input(txt,"contentInput","content");
////////////////////////Drop Down
let xAlignmentDd = document.getElementById("xAlignmentDd");
xAlignmentDd.addEventListener("input",function(e){
switch (e.target.value) {
    case "left":
        txt.d.xAlignment = txt.xAlignmentOptions.Left;
        break;
    case "right":
        txt.d.xAlignment = txt.xAlignmentOptions.Right;
        break;
    case "mid":
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        break;

    default:
        break;
}
let a = document.getElementById("xAlignmentDdLabel");
a.innerHTML = txt.d.xAlignment; 
});
////////////////////////Drop Down
let yAlignmentDd = document.getElementById("yAlignmentDd");
yAlignmentDd.addEventListener("input",function(e){
switch (e.target.value) {
    case "top":
        txt.d.yAlignment = txt.yAlignmentOptions.Top;
        break;
    case "mid":
        txt.d.yAlignment = txt.yAlignmentOptions.Mid;
        break;
    case "bot":
        txt.d.yAlignment = txt.yAlignmentOptions.Bot;
        break;

    default:
        break;
}
let a = document.getElementById("yAlignmentDdLabel");
a.innerHTML = txt.d.yAlignment; 
});

toggle(txt,"flagDrawContentToggle","flagDrawContent");
toggle(txt,"flagDrawBorderToggle","flagDrawBorder");
toggle(txt,"flagDrawBgToggle","flagDrawBg");
toggle(txt,"flagTextShadowToggle","flagTextShadow");
toggle(txt,"flagBgShadowToggle","flagBgShadow");
colorPicker(txt,"colorPicker","color");
colorPicker(txt,"colorBorderPicker","colorBorder");
colorPicker(txt,"colorBgPicker","colorBg");
colorPicker(txt,"shadowColorPicker","shadowColor");
colorPicker(txt,"colorBoundingRectanglePicker","colorBoundingRectangle");

toggle(txt,"flagUseRelativeXYToggle","flagUseRelativeXY");
range(txt,"shadowOffsetXRange","shadowOffsetX");
range(txt,"shadowOffsetYRange","shadowOffsetY");
range(txt,"shadowBlurRange","shadowBlur");
toggle(txt,"visibleToggle","visible");
toggle(txt,"selectedToggle","selected");

//....................
let canvasWidthRange = document.getElementById("canvasWidthRange");
let a = document.getElementById("canvasWidthRangeLabel");

canvasWidthRange.addEventListener("input",function(e){
        bil.setCanvas(parseInt(e.target.value));
        a.innerHTML = "W" + bil.getCanvasWidth() + " , H" + bil.getCanvasHeight(); 
});
//....................
let spitBtn = document.getElementById("spitBtn");
spitBtn.addEventListener("click",function(e){
    console.log("txt.d",txt.d);
});


