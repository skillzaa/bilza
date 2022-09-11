import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "../bilza.js";

/**
 * Args
 * -- scene start time
 * -- scene end time
 * ----------------------
 * -- title content
 * 
 * -- bp 1 content-- null | string
 * -- bp 1 appear time
 * 
 * -- bp 2 content-- null | string
 * -- bp 2 appear time
 * 
 * -- bp 3 content -- null | string
 * -- bp 3 appear time 
 * 
 * -- ftNote content
 * -- ftNote appear time --XXXX no
 */

function h1bp3 (
    sceneStartTime :number,
    sceneEndTime :number,
    contentTitle :string,
    contentBp1 :string,
    appearTimeBp1 :number,
    contentBp2 :string,
    appearTimeBp2 :number,
    contentBp3 :string,
    appearTimeBp3 :number,
    themeColor :number
):Scene{
const scene = new Scene(sceneStartTime,sceneEndTime);

const comp = cf.text( contentTitle);

comp.templ.h1();
comp.theme.color(themeColor);
scene.add(comp,sceneStartTime,sceneEndTime);

const bltPt = cf.text(contentBp1);
bltPt.templ.bltPt(40);
bltPt.theme.color(themeColor);
scene.add(bltPt,appearTimeBp1,sceneEndTime);

const bltPt02 = cf.text(contentBp2);
bltPt02.templ.bltPt(60);
bltPt02.theme.color(themeColor);
scene.add(bltPt02,appearTimeBp2,sceneEndTime);

const bltPt03 = cf.text(contentBp3);
bltPt03.templ.bltPt(80);
bltPt03.theme.color(themeColor);
scene.add(bltPt03,appearTimeBp3,sceneEndTime);
//--------------------
return scene;
}

//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------

const sc = h1bp3(2,20,"The Title","Bp one",4,"bp2",6,"bp3",8,240);

const bil = new Bilza("bilza",70);

bil.insert.alwaysOn(cf.frameCounter(60));
bil.insert.addScene(sc);

const ui = new Ui(bil);
bil.draw();


/////////////////---slide demo
const slide = new Slide(2,20);
slide.addGrid();
slide.addH1("HEADING ONE FROM SLIDE!!!!!",120);
bil.insert.addScene(slide);

// console.log("slide",slide);
