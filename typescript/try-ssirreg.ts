// import Bilza, { Ui,CompFactory as cf,hsl} from "./bilza.js";

// let bil = new Bilza("bilza", 70);

// bil.background.color.set(hsl(240,100,85));
// const fc = cf.frameCounter();
// fc.goto(0,70,0)
// bil.insert.alwaysOn(fc);

// const ss = cf.spriteSheetIrregular("../images/ghosts.png");
// //----------------------------------
// //-We define images x , y , width and height for each image since the spriteSheet is irregular
// ss.addImage("blue",27,21,113,112);
// ss.addImage("greenAlien",146,18,116,109);
// ss.addImage("angel",263,20,135,116);
// ss.addImage("redDeamon",396,16,130,123);
// ss.addImage("robot",529,15,121,119);
// ss.addImage("windows",647,22,121,123);
// ss.addImage("military",26,140,118,130);
// ss.addImage("candy",144,140,109,130);
// ss.addImage("chocolate",269,140,134,130);
// ss.addImage("cowboy",402,140,126,130);
// ss.addImage("bowtie",525,140,128,130);
// ss.addImage("wall",653,140,123,130);
// ss.addImage("cat",27,272,121,130);
// ss.addImage("chinese",146,260,118,130);
// ss.addImage("japnese",257,279,139,121);
// ss.addImage("kid",398, 273,121,121);
// ss.addImage("ninja",523,269,121,123);
// ss.addImage("pirate",640, 281,123,111);
// ss.addImage("nurse",29,400,114,132);
// ss.addImage("cop",140,400,116,128);
// ss.addImage("santa",272,400,121,125);
// ss.addImage("queen",392,395,130,130);
// ss.addImage("punk",534,395,111,121);
// ss.addImage("checker",665,411,112,103);
// ss.addImage("stripes",277,529,111,100);
// ss.addImage("glasses",404,528,116,100);
// //----------------------------------
// ss.xAlign = ss.XAlignOpt.Mid;
// ss.yAlign = ss.YAlignOpt.Mid;

// ss.x.set(50);
// ss.y.set(50);

// ss.gotoImage(0, "blue");
// ss.gotoImage(2, "greenAlien");
// ss.gotoImage(4, "angel");
// ss.gotoImage(6, "redDeamon");
// ss.gotoImage(8, "robot");
// ss.gotoImage(10,"windows");
// ss.gotoImage(12,"military");
// ss.gotoImage(14,"candy");
// ss.gotoImage(16,"chocolate");
// ss.gotoImage(18,"cowboy");
// ss.gotoImage(20,"bowtie");
// ss.gotoImage(22,"wall");
// ss.gotoImage(24,"cat");
// ss.gotoImage(26,"chinese");
// ss.gotoImage(28,"japnese");
// ss.gotoImage(30,"kid");
// ss.gotoImage(32,"ninja");
// ss.gotoImage(34,"pirate");
// ss.gotoImage(36,"nurse");
// ss.gotoImage(38,"cop");
// ss.gotoImage(40,"santa");
// ss.gotoImage(42,"queen");
// ss.gotoImage(44,"punk");
// ss.gotoImage(46,"checker");
// ss.gotoImage(48,"stripes");
// ss.gotoImage(50,"glasses");

// bil.insert.add(ss,0,60);
// //-------------------------------
// const txt = cf.rawText("Sprite sheet", hsl(0));
// txt.xAlign = txt.XAlignOpt.Mid;
// txt.x.set(50);
// txt.y.set(80);
// txt.width.set(50);
// bil.insert.add(txt,0,60);
// //-------------------------------
// txt.content.goto(0,"blue");
// txt.content.goto(2,"greenAlien");
// txt.content.goto(4,"angel");
// txt.content.goto(6,"redDeamon");
// txt.content.goto(8,"robot");
// txt.content.goto(10,"windows");
// txt.content.goto(12,"military");
// txt.content.goto(14,"candy");
// txt.content.goto(16,"chocolate");
// txt.content.goto(18,"cowboy");
// txt.content.goto(20,"bowtie");
// txt.content.goto(22,"wall");
// txt.content.goto(24,"cat");
// txt.content.goto(26,"chinese");
// txt.content.goto(28,"japnese");
// txt.content.goto(30,"kid");
// txt.content.goto(32,"ninja");
// txt.content.goto(34,"pirate");
// txt.content.goto(36,"nurse");
// txt.content.goto(38,"cop");
// txt.content.goto(40,"santa");
// txt.content.goto(42,"queen");
// txt.content.goto(44,"punk");
// txt.content.goto(46,"checker");
// txt.content.goto(48,"stripes");
// txt.content.goto(50,"glasses");
// //-------------------------------
// const ui = new Ui(bil);
// bil.draw(); //-------------------------------------//
// /////////////////////////////////////////////////////

