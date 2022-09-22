import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);

//=============================================
const arrow01 = bil.add(0,20).arrow( 50 , 50 , 70 , 50 , hsl(0) );
arrow01.headWidth.animate(0,6,30,60);

arrow01.colorHead.set("green");
arrow01.rotation.animate(1,20,0,360 * 3 );

//-------------------
const ui = new Ui(bil);
bil.draw();