import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);
bil.background.color.set(hsl(240,30,10));
//=============================================
const arrow01 = bil.add(0,60).arrow(10,10,50,10,hsl(0));
const arrow02 = bil.add(0,60).arrow(50,50,10,50,hsl(120));

arrow01.headWidth.animate(0,10,30,90);

arrow02.lineWidth.animate(0,10,1,20);
arrow02.headHeight.animate(0,10,30,90);

// arrow01.y2.animate(1,10,50,90);

const arrow03 = bil.add(0,60).arrow(50,50,70,70,hsl(300));
arrow03.headFilled.goto(3,true);
arrow03.rotation.animate(1,60,0,360 * 20);
//-------------------
const ui = new Ui(bil);
bil.draw();