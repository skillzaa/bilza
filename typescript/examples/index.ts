import Bilza, { XAlignment, YAlignment,TextTempl,OffScreenXOpt,OffScreenYOpt, AniPre, CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

//--create the component
let grid = cf.grid();
//--insert the component
bil.insert.alwaysOn(grid);

//--create the component
let counter = cf.frameCounter();
console.log("version",counter.version);
//--The initial location set at frame 0
counter.loc.goto(0,0,20);
//--insert the component
bil.insert.alwaysOn(counter);

//--create the component
let tst = TextTempl.TinHdg("TinHdg","#ff0000",1,2,50,10,50);
//--insert the component
bil.insert.append(tst, 20);

let bullet01 = cf.text("Bullet point for the heading","#008000",);
bullet01.loc.goto(0,bullet01.offScreenXOpt.XLeft,40);
bullet01.loc.animate(4,7,OffScreenXOpt.XLeft,50,40,40,XAlignment.Right,XAlignment.Mid);
//--Insert the component into engine
bil.insert.add(bullet01,0,20);
////////////////////////////////////////////
//--create the component
let bullet02 = cf.text("Bullet point for the heading","#008000",);
bullet02.loc.goto(0,bullet01.offScreenXOpt.XLeft,60);
bullet02.loc.animate(8,12,OffScreenXOpt.XLeft,50,60,60,XAlignment.Right,XAlignment.Mid);
//--Insert the component into engine
bil.insert.add(bullet02,0,20);
////////////////////////////////////////////
//--create the component
let bullet03 = cf.text("Bullet point for the heading","#008000",);
bullet03.loc.goto(0,bullet01.offScreenXOpt.XLeft,80);
bullet03.loc.animate(13,16,OffScreenXOpt.XLeft,50,80,80,XAlignment.Right,XAlignment.Mid);
//--Insert the component into engine
bil.insert.add(bullet03,0,20);
////////////////////////////////////////////
bil.init();
bil.start();