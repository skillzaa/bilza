import { CompFactory as cf, hsl, Scene } from "../bilza.js";
export default function h1bp3(startTime, endTime, hslColorNo) {
    const scene = new Scene(startTime, endTime);
    const txt = cf.text("Test Scene", hsl(0));
    scene.add(txt, 2, 2);
    txt.templ.jumbotron();
    txt.theme.color(240);
    txt.entryAni.fadeIn();
    txt.exitAni.fadeOut();
    return scene;
}
