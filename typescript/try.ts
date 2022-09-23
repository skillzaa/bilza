import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.resizeCanvas(300,250);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);
bil.background.color.set(hsl(240,30,10));

//=============================================

//---Arrow -1 Red
const arrow01 = bil.add(0,25).arrow(50,50,50,10,hsl(0));
arrow01.headWidth.animate(0,6,6,12);

arrow01.rotation.animate(10,20,0,360 * 3 );

//---Arrow -2 Green
const arrow02 = bil.add(0,25).arrow(50,50,10,50,hsl(120));
arrow02.headFilled.goto(2,false);

arrow02.lineWidth.animate(0,10,1,5);
arrow02.headHeight.animate(0,10,4,8);

arrow02.rotation.animate(10,20,0,360 * 2 );


//-------------------
const ui = new Ui(bil);
bil.draw();
