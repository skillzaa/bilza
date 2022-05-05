import Text from "../../src/components/text/text.js";
// import {IComponent} from "../../src/Bilza.js";
// import Fn from ".."
function range(comp,id,dValue){
    let labelId = id + "Label";
    let range = document.getElementById(id);
    let a = document.getElementById(labelId);
    range.value = comp.d[dValue];
    a.innerHTML = comp.d[dValue]; 
    range.addEventListener("input",function(e){
        comp.d[dValue] = parseInt(e.target.value);
        let a = document.getElementById(labelId);
        a.innerHTML = comp.d[dValue]; 
    });
}
function input(comp,id,dValue,convertToInt=false){
let labelId = id + "Label";    
let inp = document.getElementById(id);
let a = document.getElementById(labelId);
    inp.value = comp.d[dValue]; 
    a.innerHTML = comp.d[dValue]; 
    inp.addEventListener("input",function(e){
        if (convertToInt == true){
            comp.d[dValue] = parseInt(e.target.value);
                // if (v == null || v == undefined){v = defaultValue;}
            // comp.d[dValue] = v ;
        }else{
            comp.d[dValue] = (e.target.value);
        }
    let aa = document.getElementById(labelId);
        aa.innerHTML = comp.d[dValue]; 
    });
}
function toggle(comp,id,dValue){
let labelId = id + "Label";    
let toggle = document.getElementById(id);
let a = document.getElementById(labelId);
if (comp.d[dValue] == true) {
    a.innerHTML = "True";
    toggle.checked = true;
} else {
    a.innerHTML = "False";
    toggle.checked = false;
}

toggle.addEventListener("change",function(e){
let a = document.getElementById(labelId);
        if (e.currentTarget.checked) {
            a.innerHTML = "True";
            comp.d[dValue] = true;
        } else {
            a.innerHTML = "False";
            comp.d[dValue] = false;
        }
    });
}
function colorPicker(comp,id,dValue){
let labelId = id + "Label";    

let colorPicker = document.getElementById(id);
let a = document.getElementById(labelId);
a.innerHTML = (comp.d[dValue]);
// colorPicker.value = comp.d[dValue];
colorPicker.value = comp.d[dValue];


colorPicker.addEventListener("change",function(e){
let a = document.getElementById(labelId);
comp.d[dValue] = (e.target.value);
a.innerHTML = (comp.d[dValue]);
});
}

export {range,toggle,colorPicker,input}


function getHexColor(colorStr) {
    var a = document.createElement('div');
    a.style.color = colorStr;
    var colors = window.getComputedStyle( document.body.appendChild(a) ).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
    document.body.removeChild(a);
    return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false;
}