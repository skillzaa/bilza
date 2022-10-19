import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

///////////////////////////////////////////////////
const bil = new Bilza("bilza");

bil.background.color.set(hsl(240,90,95));
bil.add(0,30).canvasBorder( hsl(0,70,20) ,0.5);
//----------------------------------------------//
const scene = bil.addScene(3,10);
// scene.add().
scene.add( ).grid("red");
scene.add(2,2).text("Scene 001");
scene.addLineShape().arrow(0).sexy(50);
// scene.addLineShape().cross();
// console.log("scenePack" , scenePack);

console.log("bil",bil);

// const home = scenePack.lineShapes. .add(0,60).home(0,true,10).sexy(2,10);
// const home = bil.lineShapes.add(0,60).home(0,true,10).sexy(2,10);
// home.setPaddings(1).setWdHt(20,20).border.set(1);

// bil.lineShapes.add(0,60).exclamationMark(0,true,10).sexy( 26 ,10).setPaddings(1).setWdHt(10,20).border.set(1);

// bil.lineShapes.add(0,60).questionMark(120,true,10).sexy( 50,10).setPaddings(1).setWdHt(15,20).border.set(1);

// bil.lineShapes.add(0,60).starOfDavid(300,true,10).sexy( 75 ,10).setPaddings(1).setWdHt( 15,20).border.set(1);


////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);
console.log("bil",bil);

//@ts-expect-error
const ui = new Ui(bil.bil );

