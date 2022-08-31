import Bilza, { Slide, Ui, CompFactory as cf, hsl, Scene } from "../bilza.js";
function h1bp3(sceneStartTime, sceneEndTime, contentTitle, contentBp1, appearTimeBp1, contentBp2, appearTimeBp2, contentBp3, appearTimeBp3, themeColor) {
    const scene = new Scene(sceneStartTime, sceneEndTime);
    const comp = cf.text(contentTitle);
    comp.templ.h1();
    comp.theme.color(themeColor);
    scene.add(comp, sceneStartTime, sceneEndTime);
    const bltPt = cf.text(contentBp1);
    bltPt.templ.bltPt(40);
    bltPt.theme.color(themeColor);
    scene.add(bltPt, appearTimeBp1, sceneEndTime);
    const bltPt02 = cf.text(contentBp2);
    bltPt02.templ.bltPt(60);
    bltPt02.theme.color(themeColor);
    scene.add(bltPt02, appearTimeBp2, sceneEndTime);
    const bltPt03 = cf.text(contentBp3);
    bltPt03.templ.bltPt(80);
    bltPt03.theme.color(themeColor);
    scene.add(bltPt03, appearTimeBp3, sceneEndTime);
    return scene;
}
const sc = h1bp3(2, 20, "The Title", "Bp one", 4, "bp2", 6, "bp3", 8, 240);
const bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.frameCounter(hsl(60)));
bil.insert.addScene(sc, 2);
const ui = new Ui(bil);
bil.draw();
const slide = new Slide(2, 20);
slide.addGrid();
slide.addH1("HEADING ONE FROM SLIDE!!!!!", 120);
bil.insert.addScene(slide, 2);
