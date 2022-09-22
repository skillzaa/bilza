import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);
bil.background.color.set(hsl(240,30,10));
//=============================================
const arrow = bil.add(0,60).arrow(50,50,30,30,hsl(0));
// arrow.x2.animate(1,10,50,90);
// arrow.y2.animate(1,10,50,90);
arrow.rotation.animate(0,5,0,360 *2);
//-------------------
const ui = new Ui(bil);
bil.draw();