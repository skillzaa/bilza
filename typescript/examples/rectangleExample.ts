import Bilza from "../Bilza.js";
let bil = new Bilza("bilza", 800, 300, 1000);
let g = bil.add.gridTempl.simple("red");
g.d.flagDrawNumbers = true;
g.d.fontSize = 12;

bil.dynamicResizing = true;
/////-------======---///
let recLt = bil.add.fillRect();
recLt.d.widthPercent = 50;
recLt.d.heightPercent = 50;
recLt.d.x = 0;
recLt.d.y = 0;

let topR = bil.add.fillRect();
topR.d.widthPercent = 50;
topR.d.color = "green";
topR.d.heightPercent = 50;
topR.d.x = 50;
topR.d.y = 0;

let botL = bil.add.fillRect();
botL.d.widthPercent = 50;
botL.d.color = "blue";
botL.d.heightPercent = 50;
botL.d.x = 0;
botL.d.y = 50;

let botR = bil.add.fillRect();
botR.d.widthPercent = 50;
botR.d.color = "ashwhite";
botR.d.heightPercent = 50;
botR.d.x = 50;
botR.d.y = 50;


bil.draw();


setInterval(function(){
bil.setCanvas(400,150);
// rec.d.width = 200;
bil.draw();
},3000);