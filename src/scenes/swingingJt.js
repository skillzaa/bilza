import { CompFactory as cf, hsl, Scene } from "../bilza.js";
export default function SwingJt(startTime, endTime, hslColorNo) {
    const scene = new Scene(startTime, endTime);
    const txt = cf.text("Test Scene", hsl(0));
    scene.add(txt, 1, 1);
    txt.templ.jumbotron();
    txt.theme.color(240);
    txt.entryAni.fadeIn();
    txt.exitAni.fadeOut();
    return scene;
}
