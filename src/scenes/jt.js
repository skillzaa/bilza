import { CompFactory as cf, Scene } from "../bilza.js";
export default function SwingJt(startTime, endTime, content = "Welcome To Bilza.js", hslColorNo = 0) {
    const scene = new Scene(startTime, endTime);
    const txt = cf.text(content);
    scene.add(txt);
    txt.align(1, 1);
    txt.x.set(50);
    txt.y.set(50);
    txt.templ.jumbotron()
        .theme.color(hslColorNo)
        .entryAni.bottomIn()
        .exitAni.fadeOut();
    return scene;
}
