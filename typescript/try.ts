
import Bilza, {IComponent, Ui, CompFactory as cf, hsl} from "./bilza.js";

let bil = new Bilza("bilza", 70);

const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);

const line = cf.line(10,10,90,90);
line.setRespLoc(false);

line.lineWidth.set(5);
line.color.goto(2,hsl(0));

bil.insert.add(line,0,60);

const ui = new Ui(bil);
bil.draw();


