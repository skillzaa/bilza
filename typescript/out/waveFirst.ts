import Bilza, {Ui,hsl,Scene,Scenes} from "../bilza.js";

let bil = new Bilza("bilza", 70);
// bil.resizeCanvas(1000,500);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);

//=============================================
const wave = bil.add(0,60).wave();
wave.showBackground.set(true);
wave.colorBackground.set(hsl(60,30,80))
wave.align(1,1);
wave.alignRotate(1,1);
wave.x.set(50);
wave.y.set(50);

wave.width.set(50);
wave.height.set(50);

wave.border.set(1);
wave.colorBorder.set("green");
// wave.width.animate(1,5,50,90);
// wave.height.animate(6,10,50,90);
// wave.rotation.animate(1,5,0,360 * 2);
//-------------------
const ui = new Ui(bil);
bil.draw();