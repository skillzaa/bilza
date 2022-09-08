import { CompFactory as cf, Scene } from "../bilza.js";
export default function SwingJt(startTime, endTime, caption = "Welcome To Bilza.js", hslColorNo = 0) {
    const scene = new Scene(startTime, endTime);
    const txt = cf.text(caption);
    scene.add(txt, 1, 1);
    txt.templ.jumbotron();
    txt.alignRotate(1, 0);
    txt.rotation.oscillate(startTime, endTime, -15, 15, 3);
    txt.theme.color(hslColorNo);
    txt.exitAni.fadeOut();
    return scene;
}
