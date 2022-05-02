// import Bilza from "../lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
 
let bil = new Bilza("bilza",600,300);
let g = bil.gridTempl.dashed();
let txt = bil.add.text(0,60,"Text Sample","red");

txt.d.flagDrawBorder = true;
txt.d.colorBg = "white";
//////////////////////////////////
bil.drawInit();
///////////////////////////////
let interval = setInterval(function(){
    // txt.d.border +=1;
    bil.drawInit();
},150);
///////////////////////////////
///////////////////////////////
///////////////////////////////
//--------fontSizeRange-------
let fontSizeRange = document.getElementById("fontSizeRange");
fontSizeRange.addEventListener("input",function(e){
txt.d.fontSize = parseInt(e.target.value);
    let a = document.getElementById("fontSizeRangeLabel");
    a.innerHTML = txt.d.fontSize; 
});
//--------borderRange-------
let borderRange = document.getElementById("borderRange");
borderRange.addEventListener("input",function(e){
txt.d.border = parseInt(e.target.value);
    let a = document.getElementById("borderRangeLabel");
    a.innerHTML = txt.d.border; 
});
//--------paddingRange-------
let paddingRange = document.getElementById("paddingRange");
paddingRange.addEventListener("input",function(e){
txt.d.padding = parseInt(e.target.value);
let a = document.getElementById("paddingRangeLabel");
a.innerHTML = txt.d.padding; 
});

//--------dynWidthRange-------
let dynWidthRange = document.getElementById("dynWidthRange");
dynWidthRange.addEventListener("input",function(e){
txt.d.dyWidth = parseInt(e.target.value);
let a = document.getElementById("dynWidthRangeLabel");
a.innerHTML = txt.d.dyWidth; 
});
//--------dynHeightRange-------
let dynHeightRange = document.getElementById("dynHeightRange");
dynHeightRange.addEventListener("input",function(e){
txt.d.dynHeight = parseInt(e.target.value);
let a = document.getElementById("dynHeightRangeLabel");
a.innerHTML = txt.d.dynHeight; 
});
//--------dynHeightRange-------
let maxDisplayCharsRange = document.getElementById("maxDisplayCharsRange");
maxDisplayCharsRange.addEventListener("input",function(e){
txt.d.maxDisplayChars = parseInt(e.target.value);
let a = document.getElementById("maxDisplayCharsRangeLabel");
a.innerHTML = txt.d.maxDisplayChars; 
});
////////////////////////////////////////
let flagUseDynResizeToggle = document.getElementById("flagUseDynResizeToggle");
flagUseDynResizeToggle.addEventListener("change",function(e){
let a = document.getElementById("flagUseDynResizeToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.flagUseDynResize = true;
    } else {
        a.innerHTML = "False";
        txt.d.flagUseDynResize = false;
    }
//....................... 
});

//--------contentInput-------
let contentInput = document.getElementById("contentInput");
contentInput.addEventListener("input",function(e){
txt.d.content = (e.target.value);
let a = document.getElementById("contentInputLabel");
a.innerHTML = txt.d.content; 
});
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

/////////---flags--------//////////////
////////////////////////////////////////
let flagDrawContentToggle = document.getElementById("flagDrawContentToggle");
flagDrawContentToggle.addEventListener("change",function(e){
let a = document.getElementById("flagDrawContentToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.flagDrawContent = true;
    } else {
        a.innerHTML = "False";
        txt.d.flagDrawContent = false;

    }
//....................... 
});
////////////////////////////////////////
let flagDrawBorderToggle = document.getElementById("flagDrawBorderToggle");
flagDrawBorderToggle.addEventListener("change",function(e){
let a = document.getElementById("flagDrawBorderToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.flagDrawBorder = true;
    } else {
        a.innerHTML = "False";
        txt.d.flagDrawBorder = false;

    }
//....................... 
});
////////////////////////////////////////
let flagDrawBgToggle = document.getElementById("flagDrawBgToggle");
flagDrawBgToggle.addEventListener("change",function(e){
let a = document.getElementById("flagDrawBgToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.flagDrawBg = true;
    } else {
        a.innerHTML = "False";
        txt.d.flagDrawBg = false;
    }
//....................... 
});
////////////////////////////////////////
let flagTextShadowToggle = document.getElementById("flagTextShadowToggle");
flagTextShadowToggle.addEventListener("change",function(e){
let a = document.getElementById("flagTextShadowToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.flagTextShadow = true;
    } else {
        a.innerHTML = "False";
        txt.d.flagTextShadow = false;
    }
//....................... 
});

//-------color picker
/////////////////////////////////////////////////////
let colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change",function(e){
let a = document.getElementById("colorPickerLabel");
txt.d.color = (e.target.value);
a.innerHTML = (txt.d.color);
});
/////////////////////////////////////////////////////
let colorBorderPicker = document.getElementById("colorBorderPicker");
colorBorderPicker.addEventListener("change",function(e){
let a = document.getElementById("colorBorderPickerLabel");
txt.d.colorBorder = (e.target.value);
a.innerHTML = (txt.d.colorBorder);
});
/////////////////////////////////////////////////////
let colorBgPicker = document.getElementById("colorBgPicker");
colorBgPicker.addEventListener("change",function(e){
let a = document.getElementById("colorBgPickerLabel");
txt.d.colorBg = (e.target.value);
a.innerHTML = (txt.d.colorBg);
});
///////////////////////////////////////////////////////
///////////-----------Base Class Variables----////////
//--------xRange-------
let xRange = document.getElementById("xRange");
xRange.addEventListener("input",function(e){
txt.d.x = parseInt(e.target.value);
    let a = document.getElementById("xRangeLabel");
    a.innerHTML = txt.d.x; 
});
//--------yRange-------
let yRange = document.getElementById("yRange");
yRange.addEventListener("input",function(e){
txt.d.y = parseInt(e.target.value);
    let a = document.getElementById("yRangeLabel");
    a.innerHTML = txt.d.y; 
});
let flagUseRelativeXYToggle = document.getElementById("flagUseRelativeXYToggle");
flagUseRelativeXYToggle.addEventListener("change",function(e){
let a = document.getElementById("flagUseRelativeXYToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.flagUseRelativeXY = true;
      xRange.max = 100;
      yRange.max = 100;
    } else {
        a.innerHTML = "False";
        txt.d.flagUseRelativeXY = false;
        xRange.max = 1500;
        yRange.max = 1500;
    }
//....................... 
});
/////////////////////////////////////////////////////
let colorBoundingRectanglePicker = document.getElementById("colorBoundingRectanglePicker");
colorBoundingRectanglePicker.addEventListener("change",function(e){
let a = document.getElementById("colorBoundingRectanglePickerLabel");
txt.d.colorBoundingRectangle = (e.target.value);
a.innerHTML = (txt.d.colorBoundingRectangle);
});

/////////////////////////////////////////////
let shadowDisplayToggle = document.getElementById("shadowDisplayToggle");
shadowDisplayToggle.addEventListener("change",function(e){
let a = document.getElementById("shadowDisplayToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.shadowDisplay = true;
    } else {
        a.innerHTML = "False";
        txt.d.shadowDisplay = false;
    }
//....................... 
});
///////////////////////////////////////
let shadowOffsetXRange = document.getElementById("shadowOffsetXRange");
shadowOffsetXRange.addEventListener("input",function(e){
txt.d.shadowOffsetX = parseInt(e.target.value);
    let a = document.getElementById("shadowOffsetXRangeLabel");
    a.innerHTML = txt.d.shadowOffsetX; 
});
///////////////////////////////////////
let shadowOffsetYRange = document.getElementById("shadowOffsetYRange");
shadowOffsetYRange.addEventListener("input",function(e){
txt.d.shadowOffsetY = parseInt(e.target.value);
    let a = document.getElementById("shadowOffsetYRangeLabel");
    a.innerHTML = txt.d.shadowOffsetY; 
});
///////////////////////////////////////
let shadowBlurRange = document.getElementById("shadowBlurRange");
shadowBlurRange.addEventListener("input",function(e){
txt.d.shadowBlur = parseInt(e.target.value);
    let a = document.getElementById("shadowBlurRangeLabel");
    a.innerHTML = txt.d.shadowBlur; 
});
////////////////////////////////////////////////
let visibleToggle = document.getElementById("visibleToggle");
visibleToggle.addEventListener("change",function(e){
let a = document.getElementById("visibleToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.visible = true;
    } else {
        a.innerHTML = "False";
        txt.d.visible = false;
    }
//....................... 
});
////////////////////////////////////////////////
let selectedToggle = document.getElementById("selectedToggle");
selectedToggle.addEventListener("change",function(e){
let a = document.getElementById("selectedToggleLabel");
//.......................
    if (e.currentTarget.checked) {
      a.innerHTML = "True";
      txt.d.selected = true;
    } else {
        a.innerHTML = "False";
        txt.d.selected = false;
    }
//....................... 
});