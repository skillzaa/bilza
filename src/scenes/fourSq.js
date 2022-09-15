import { hsl, Scene } from "../bilza.js";
export default function fourSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(300)) {
    const scene = new Scene(startTime, endTime);
    const sq1 = getRect(scene, colorSq1, 0, 0);
    const sq2 = getRect(scene, colorSq2, 50, 0);
    const sq3 = getRect(scene, colorSq3, 0, 50);
    const sq4 = getRect(scene, colorSq4, 50, 50);
    return scene;
}
function getRect(scene, color, x, y) {
    const rect = scene.add().fillRect(color);
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(50);
    rect.height.set(50);
    rect.entryAni.fadeIn();
    rect.exitAni.fadeOut();
    return rect;
}
