import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from "../Bilza.js";
import topInHdg from "../clips/topInHdg.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let c = cf.frameCounter();
c.loc.goto(0,90,0);
bil.insert.alwaysOn(c);

//---Main Title
//---This should decide the length of the video, so lets make this the only appended component.
let mainTitle = topInHdg ("The Title Of The Talk With Mr J.D Miller","#f00000",3,20,0,2);
bil.insert.append(mainTitle,mainTitle.duration);

//---First Bullet Point
let firstBullet = topInHdg ("First bullet point","#008000",20,20,3,5);
firstBullet.dynWidth.setValue(50);
bil.insert.add(firstBullet,0,60);

//---Second Bullet Point
let secondBullet = topInHdg ("Second bullet point","#008000",40,20,6,8);
firstBullet.dynWidth.setValue(50);
bil.insert.add(secondBullet,0,60);
//---Second Bullet Point

let thirdBullet = topInHdg ("Third bullet point","#008000",70,20,9,11);
firstBullet.dynWidth.setValue(50);
bil.insert.add(thirdBullet,0,60);

////////////////////////////////////////////
bil.init();
bil.start();
