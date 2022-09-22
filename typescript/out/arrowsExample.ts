import Bilza, {Ui,hsl,Scene,Scenes} from "../bilza.js";

let bil = new Bilza("bilza", 70);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);
bil.background.color.set(hsl(240,30,10));

//=============================================

//---Arrow -1 Red
const arrow01 = bil.add(0,20).arrow(50,50,50,10,hsl(0));
arrow01.headFilled.goto(1,true);
arrow01.headWidth.animate(0,6,30,60);

arrow01.rotation.animate(10,20,0,360 * 3 );

//---Arrow -2 Green
const arrow02 = bil.add(0,30).arrow(50,50,10,50,hsl(120));
arrow02.headFilled.goto(2,true);

arrow02.lineWidth.animate(0,10,1,5);
arrow02.headHeight.animate(0,10,30,60);

arrow02.rotation.animate(10,20,0,360 * 2 );

//---Arrow -3 Magenta
const arrow03 = bil.add(0,30).arrow(50,50,60,60,hsl(300));
arrow03.headFilled.goto(3,true);
arrow03.x2.animate(0,8,60,80);
arrow03.y2.animate(0,8,60,80);
arrow03.rotation.animate(10,20,0,360 * 1 );

//-------------------
const ui = new Ui(bil);
bil.draw();