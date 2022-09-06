import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "../bilza.js";

let bil = new Bilza("bilza", 70);
bil.resizeCanvas(600,null);
// bil.insert.alwaysOn(cf.grid(10,10,));
bil.background.color.set(hsl(0,20,30));
//--------------------

const title = cf.text("Bilza Text Templates")
title.setxy(10,10);
title.templ.h1();
title.theme.color(240);
bil.insert.add(title,0,30);

const comp = cf.text("H1",hsl(240));
comp.setxy(70,5);
comp.templ.h1();
comp.theme.color(0);
bil.insert.add(comp,0,30);

const comp02 = cf.text("H2",hsl(60));
comp02.setxy(70,25);
comp02.templ.h2();
comp02.theme.color(300);
bil.insert.add(comp02,0,30);

const comp03 = cf.text("H3",hsl(120));
comp03.setxy(70,45);
comp03.templ.h3();
comp03.theme.color(120);
bil.insert.add(comp03,0,30);

const comp04 = cf.text("H4",hsl(180));
comp04.setxy(70,65);
comp04.templ.h4();
comp04.theme.color(180);
bil.insert.add(comp04,0,30);

const comp05 = cf.text("H5",hsl(300));
comp05.setxy(70,85);
comp05.templ.h5();
comp05.theme.color(240);
bil.insert.add(comp05,0,30);

const comp06 = cf.text("H6",hsl(300));
comp06.setxy(20,70);
comp06.templ.h6();
comp06.theme.color(0);
bil.insert.add(comp06,0,30);

const slim = cf.text("Simple Text")
slim.setxy(10,50);
slim.templ.slim(60)
slim.theme.color(60);
bil.insert.add(slim,0,30);

//--------------------
const ui = new Ui(bil);
bil.draw();

