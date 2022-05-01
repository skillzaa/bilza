// import Bilza from "../lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",800,200);
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
//--------fontSizeRange-------
let rng = document.getElementById("fontSizeRange");
rng.addEventListener("input",function(e){
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
//--------marginRange-------
let marginRange = document.getElementById("marginRange");
marginRange.addEventListener("input",function(e){
txt.d.margin = parseInt(e.target.value);
let a = document.getElementById("marginRangeLabel");
a.innerHTML = txt.d.margin; 
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
