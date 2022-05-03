import Text from "../../src/components/text/text.js";
// import {IComponent} from "../../src/Bilza.js";

function range(comp,id,dValue){
    let labelId = id + "Label";
    let range = document.getElementById(id);
    range.addEventListener("input",function(e){
        comp.d[dValue] = parseInt(e.target.value);
        // this.comp.-
        let a = document.getElementById(labelId);
        a.innerHTML = comp.d[dValue]; 
    });
}
function input(comp,id,dValue,convertToInt=false){
let labelId = id + "Label";    
let inp = document.getElementById(id);
    inp.addEventListener("input",function(e){
        if (convertToInt == true){
            comp.d[dValue] = parseInt(e.target.value);
                // if (v == null || v == undefined){v = defaultValue;}
            // comp.d[dValue] = v ;
        }else{
            comp.d[dValue] = (e.target.value);
        }
    let a = document.getElementById(labelId);
        a.innerHTML = comp.d[dValue]; 
    });
}
function toggle(comp,id,dValue){
let labelId = id + "Label";    
let toggle = document.getElementById(id);
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
colorPicker.addEventListener("change",function(e){
let a = document.getElementById(labelId);
comp.d[dValue] = (e.target.value);
a.innerHTML = (comp.d[dValue]);
});
}

export {range,toggle,colorPicker,input}