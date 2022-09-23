import Bilza, {Ui,hsl,Scene,Scenes} from "../bilza.js";

let bil = new Bilza("bilza", 70);
// bil.resizeCanvas(300,250);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);
bil.background.color.set(hsl(240,30,10));

//=============================================

//---Arrow -1 Red
const arrow01 = bil.add(0,25).arrow(10,10,70,10,hsl(0));
//---Arrow -2 Green
const arrow02 = bil.add(0,25).arrow(50,50,30,50,hsl(120));
arrow02.rotation.animate(2,20,0,360 * 4);
arrow01.headFilled.set(false);
arrow02.headFilled.set(false);
//-------------------
const ui = new Ui(bil);
bil.draw();
