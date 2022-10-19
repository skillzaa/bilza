export default function swingJt(scene, content = "Welcome To Bilza.js", hslColorNo = 0) {
    const txt = scene.add().text(content);
    txt.templ.jumbotron();
    txt.alignRotate(1, 0);
    txt.rotation.oscillate(startTime, endTime, -15, 15, 3);
    txt.theme.color(hslColorNo);
    txt.exitAni.fadeOut();
    return scene;
}
