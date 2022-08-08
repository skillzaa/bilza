import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "./bilza.js";

let bil = new Bilza("bilza", 70);
// bil.background.color.goto(0,hsl(60));
bil.insert.alwaysOn(cf.grid(hsl(30)));
bil.insert.alwaysOn(cf.frameCounter(hsl(60)));

const rect = cf.fillRect( hsl(240) );


bil.insert.add(rect,0,60);

// rect.x.animate(0,5,0,50);

rect.x.goto(0,10);
rect.x.goto(2,20);
rect.x.goto(4,40);

// rect.x.goto(6,60);
// rect.x.goto(8,80);
rect.x.goto(10,0);

rect.x.animate(5,9,40,90);
const ui = new Ui(bil);
bil.draw(8000); // one has to writee 8000 since its Millisecond delta


