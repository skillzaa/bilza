import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
import PlainText from "./components/plainText.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

bil.background.color.goto(2,"red");
bil.background.color.goto(4,"green");
bil.background.color.goto(6,"blue");
bil.background.color.goto(8,"yellow");
bil.background.color.goto(10,"brown");
bil.background.color.goto(12,"pink");

const plain = cf.rawText("blue");
plain.xAlign = plain.XAlignOpt.Mid;
plain.yAlign = plain.YAlignOpt.Mid;
plain.goto(0,50,50);
plain.fontSize.set(60);
plain.color = "black";

plain.content.set("Cream");
plain.content.goto(2,"RED");
plain.content.goto(4,"GREEN");
plain.content.goto(6,"BLUE");
plain.content.goto(8,"YELLOW");
plain.content.goto(10,"BROWN");
plain.content.goto(12,"PINK");

bil.insert.add(plain,0,15);
const ui = new Ui(bil);
bil.draw();