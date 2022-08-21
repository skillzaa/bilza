
import Bilza, {IComponent, Ui, CompFactory as cf, hsl} from "./bilza.js";

let bil = new Bilza("bilza", 70);

const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);

const fill = cf.text("Text Demo",hsl(240));

fill.width.set(50);
fill.height.set(20);

fill.border.set(1);
fill.colorBackground.set(hsl(60));
fill.showBackground.set(true);
fill.x.animate(1, 10, 0, 90);
fill.y.animate(11, 20, 0, 90);
fill.x.animate(21, 30, 90, 0);
fill.y.animate(31, 40, 90, 0);

bil.insert.add(fill, 0, 60);
const ui = new Ui(bil);
bil.draw();


