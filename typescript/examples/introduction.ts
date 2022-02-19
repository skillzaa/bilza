import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import {TextTemplates} from "../components/text/text.js";
import {GridTemplates} from "../components/grid/grid.js";
import FrameCounter from "../containers/frameCounter/frameCounter.js";

let bilzaa = new Bilzaa2d();
let fc = new FrameCounter();
bilzaa.add(fc);
let g = GridTemplates.dashedGrid();
bilzaa.add(g);


let title = TextTemplates.h1Mid("Welcome to Bilzaa2d");
title.frameStart = 1;
title.frameEnd = 8;
bilzaa.add(title);

let lineOne = TextTemplates.lineMid("Bilzaa2d is a javascript framework for creating presentations",40,"blue",45);
lineOne.frameStart = 3;
lineOne.frameEnd = 8;
bilzaa.add(lineOne);

let lineTwo = TextTemplates.lineMid("slides and other educational content",65,"blue",45);
lineTwo.frameStart = 5;
lineTwo.frameEnd = 8;
bilzaa.add(lineTwo);
//--------------------------------
//--------------------------------
let titleTwo = TextTemplates.h1Mid("Salient Features");
titleTwo.frameStart = 8;
// title.frameEnd = 3;
bilzaa.add(titleTwo);


let lineThree = TextTemplates.lineMid("It works on 1 frame per second",40,"blue",45);
lineThree.frameStart = 9;
// lineOne.frameEnd = ;
bilzaa.add(lineThree);

let lineFour = TextTemplates.lineMid("Component Base highly extendable",60,"blue",45);
lineFour.frameStart = 12;
// lineOne.frameEnd = ;
bilzaa.add(lineFour);




console.log("b",bilzaa);
bilzaa.start();