import Bilza from "../src/index.js";
let bilzaa = new Bilza("bilza", 800, 350, 15000);
bilzaa.add.grid();
bilzaa.add.frameCounter(0, 0, bilzaa.getTimeEnd());

let lst = bilzaa.add.list(10,100,38);
lst.d.gap = 6;
lst.d.fontColor = "white";
lst.addItem("The first point");
lst.addItem("Secondly its important");
lst.addItem("Third is the charm");
lst.addItem("Fourth times is hardwork");
lst.addItem("Fifth should be expert by now");

// tr.fontColor = "magenta";
let tr = lst.addTransition(3000);
tr.listDim = [1,2,3,4]; //--This changes everything 
tr.listHighlight = [0]; //--This changes everything 

let tr02 = lst.addTransition(5000);
tr02.listDim = [0,2,3,4]; //--This changes everything 
tr02.listHighlight = [1]; //--This changes everything 

let tr03 = lst.addTransition(7000);
tr03.listDim = [0,1,3,4]; //--This changes everything 
tr03.listHighlight = [2]; //--This changes everything 

let tr04 = lst.addTransition(9000);
tr04.listDim = [0,1,2,4]; //--This changes everything 
tr04.listHighlight = [3]; //--This changes everything 

let tr05 = lst.addTransition(11000);
tr05.listDim = [0,1,2,3]; //--This changes everything 
tr05.listHighlight = [4]; //--This changes everything 


bilzaa.start();
