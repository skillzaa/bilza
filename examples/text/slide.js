import Bilza from "../../src/Bilza.js";
let canvasWidth = 800;
let canvasHeight = 400;
let bil = new Bilza("bilza",canvasWidth,canvasHeight);
// bil.dynamicCanvas(90,90);
let g = bil.add.gridTempl.dashed();

let first = bil.add.textTempl.hdg("This is First Heading","#0000ff",null,50,1,95,10);
let listColor = "#b3d640";
let listStartY = 25;
let listX = 50;
let listHeight = 20;
let listWidth = 50;

let third = bil.add.textTempl.hdg("list item list item list item list item ","#008000",null,listX,listStartY,listWidth,listHeight);

let fourth = bil.add.textTempl.hdg("list item list item list item list item ","#008000",null,listX,listStartY + 20,listWidth,listHeight);
let fifth = bil.add.textTempl.hdg("list item list item list item list item ","#008000",null,listX,listStartY + 40,listWidth,listHeight);
let sixth = bil.add.textTempl.hdg("list item list item list item list item ","#008000",null,listX,listStartY + 60,listWidth,listHeight);

//////////////////////////////////
bil.start();


let int = setInterval(function(){
    canvasWidth -= 50;
    canvasHeight = Math.ceil(canvasWidth/16) * 9;
    bil.setCanvas(canvasWidth,canvasHeight);
    if (canvasWidth < 200){
        clearInterval(int);
    }
},3000);