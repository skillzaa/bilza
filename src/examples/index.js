import Bilza, { AniPre, CompFactory as cf } from "../Bilza.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
let grid = cf.grid();
bil.insert.alwaysOn(grid);
let counter = cf.frameCounter();
counter.loc.goto(0, 0, 20);
bil.insert.alwaysOn(counter);
let tst = cf.text("123--123", "#000fff");
tst.duration = 30;
tst.loc.goto(0, 10, 10);
AniPre.TinBout(tst, 2, 8, 50);
bil.insert.append(tst, tst.duration);
bil.init();
bil.start();
