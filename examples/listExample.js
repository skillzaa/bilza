import Bilza from "../src/index.js";
let bilzaa = new Bilza("bilza", 800, 400, 15000);
bilzaa.add.grid();
bilzaa.add.frameCounter(0, 350, bilzaa.getTimeEnd());
let lst = bilzaa.add.list(10,100,38);
lst.d.gap = 6;
lst.d.fontColor = "white";
lst.addItem("The first point");
lst.addItem("Secondly its important");
lst.addItem("Third is the charm");
lst.addItem("Fourth times is hardwork");
lst.addItem("Fifth should be expert by now");

let tr = lst.addTransition(3000);
// tr.fontColor = "magenta";
tr.listDim = [0,1]; //--This changes everything 
tr.listFocus = [2,3]; //--This changes everything 
tr.listHighlight = [4]; //--This changes everything 
// tr.listDim.push(0);
bilzaa.start();
