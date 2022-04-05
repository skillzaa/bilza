import Bilza from "../../Bilza.js";
let bil = new Bilza("bilza", 800, 300, 10000);

let g = bil.add.gridTempl.dashed();

bil.add.line(10,10,90,10,"crimson",3);
bil.add.line(10,90,90,90,"green",3);

bil.add.line(10,10,10,90,"blue",3);
bil.add.line(90,10,90,90,"red",3);

bil.draw();


setInterval(function(){
bil.setCanvas(400,150);
bil.draw();
},3000);