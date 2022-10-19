export default function jt(scene, content = "Welcome To Bilza.js", hslColorNo = 0) {
    const txt = scene.add().text(content);
    txt.align(1, 1);
    txt.x.set(50);
    txt.y.set(50);
    txt.templ.jumbotron()
        .theme.color(hslColorNo)
        .entryAni.fadeIn()
        .exitAni.fadeOut();
    return scene;
}
