import Bilza  from "../../src/index.js";
//---lets create a 60 seconds clip
let bilzaa = new Bilza("bilza",800,350,15000);

//-- lets create a title that will stay for the entire duration
//----The permanent Title
bilzaa.add.grid();
bilzaa.add.frameCounter(0,300,bilzaa.getTimeEnd());
let title = bilzaa.add.text("Introducing Bilza Library","yellow",40,0,
bilzaa.getTimeEnd(),50,20);
title.d.colorBorder = "red";
title.d.widthBorder = 3;
title.d.colorContentBg = "blue"
title.d.flagDrawBorder = true;
title.d.flagDrawContentArea = true;
//----heading fn

function createItem(content,msStart=0,y){
    let itemOne = bilzaa.add.text(content,"green",25,msStart,
    bilzaa.getTimeEnd(),10,y);
    let trans  = itemOne.addTransition(msStart + 1000);
    trans.flagDrawBorder = true;
    trans.colorBorder = "red";
    trans.fontColor = "yellow";
    trans.widthBorder = 5;
    }
//--show headings one by one

createItem("A framework for creating javascript presentations",2000,70);
createItem("Emphasis is on education",4000,120);
createItem("slides, presentation etc",6000,170);
createItem("formulas, tables, lists",8000,220);

///////////////////////////////
bilzaa.start();
