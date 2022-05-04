// import Bilza from "../lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
import {range,toggle,colorPicker,input} from "../uiHandlers/uiHandlers.js";

let bil = new Bilza("h1",300,200);
let g = bil.gridTempl.dashed();

let txt = bil.textTempl.test();
// let txt02 = bil.textTempl.hdg(0,60,"Hdg");
// let txt = bil.add.text(0,60,"Text Sample","red");
// let txt02 = bil.add.text(0,60,"Text Two","green");


bil.start();