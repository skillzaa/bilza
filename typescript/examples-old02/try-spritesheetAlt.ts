import Bilza, { Ui,CompFactory as cf,hsl,PremadeSpriteSheets } from "../bilza";

let bil = new Bilza("bilza", 70);

bil.background.color.set(hsl(240,100,85));
const fc = cf.frameCounter();
fc.goto(0,70,0)
bil.insert.alwaysOn(fc);

// const grid = cf.grid(hsl(240,100,20));
// bil.insert.alwaysOn(grid);

const ss = PremadeSpriteSheets.ghosts("../images/ghosts.png");
ss.xAlign = ss.XAlignOpt.Mid;
ss.yAlign = ss.YAlignOpt.Mid;

ss.x.set(50);
ss.y.set(50);

ss.gotoImageName(0, "blue");
ss.gotoImageName(2, "greenAlien");
ss.gotoImageName(4, "angel");
ss.gotoImageName(6, "redDeamon");
ss.gotoImageName(8, "robot");
ss.gotoImageName(10,"windows");
ss.gotoImageName(12,"military");
ss.gotoImageName(14,"candy");
ss.gotoImageName(16,"chocolate");
ss.gotoImageName(18,"cowboy");
ss.gotoImageName(20,"bowtie");
ss.gotoImageName(22,"wall");
ss.gotoImageName(24,"cat");
ss.gotoImageName(26,"chinese");
ss.gotoImageName(28,"japanese");
ss.gotoImageName(30,"kid");
ss.gotoImageName(32,"ninja");
ss.gotoImageName(34,"pirate");
ss.gotoImageName(36,"nurse");
ss.gotoImageName(38,"cop");
ss.gotoImageName(40,"santa");
ss.gotoImageName(42,"queen");
ss.gotoImageName(44,"punk");
ss.gotoImageName(46,"checker");
ss.gotoImageName(48,"stripes");
ss.gotoImageName(50,"glasses");

bil.insert.add(ss,0,60);
//-------------------------------
const txt = cf.text("Sprite sheet", hsl(0));
txt.xAlign = txt.XAlignOpt.Mid;
txt.x.set(50);
txt.y.set(80);
txt.width.set(50);
bil.insert.add(txt,0,60);
//-------------------------------
txt.content.goto(0,"blue");
txt.content.goto(2,"greenAlien");
txt.content.goto(4,"angel");
txt.content.goto(6,"redDeamon");
txt.content.goto(8,"robot");
txt.content.goto(10,"windows");
txt.content.goto(12,"military");
txt.content.goto(14,"candy");
txt.content.goto(16,"chocolate");
txt.content.goto(18,"cowboy");
txt.content.goto(20,"bowtie");
txt.content.goto(22,"wall");
txt.content.goto(24,"cat");
txt.content.goto(26,"chinese");
txt.content.goto(28,"japanese");
txt.content.goto(30,"kid");
txt.content.goto(32,"ninja");
txt.content.goto(34,"pirate");
txt.content.goto(36,"nurse");
txt.content.goto(38,"cop");
txt.content.goto(40,"santa");
txt.content.goto(42,"queen");
txt.content.goto(44,"punk");
txt.content.goto(46,"checker");
txt.content.goto(48,"stripes");
txt.content.goto(50,"glasses");
//-------------------------------
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////

