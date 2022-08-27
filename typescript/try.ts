import Bilza, {Ui, CompFactory as cf,hsl} from "./bilza.js";


let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.grid());
//--------------------
const line = cf.line(10,10,90,90,hsl(0));
line.lineWidth.set(20);
bil.insert.add(line,0,30);
//--------------------
line.y.oscillate(1,25,10,90,2);
// line.y2.oscillate(1,25,90,10,2);
//--------------------
const ui = new Ui(bil);
bil.draw();