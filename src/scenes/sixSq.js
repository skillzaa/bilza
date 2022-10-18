import { hsl, Scene } from "../bilza.js";
export default function sixSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(60), colorSq5 = hsl(0), colorSq6 = hsl(180)) {
    const scene = new Scene(startTime, endTime);
    const sq1 = getRect(scene, colorSq1, 0, 0);
    const sq2 = getRect(scene, colorSq2, 33, 0);
    const sq3 = getRect(scene, colorSq3, 66, 0);
    const sq4 = getRect(scene, colorSq4, 0, 50);
    const sq5 = getRect(scene, colorSq5, 33, 50);
    const sq6 = getRect(scene, colorSq6, 66, 50);
    return scene;
}
function getRect(scene, color, x, y) {
    const rect = scene.add().fillRect(color);
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(34);
    rect.height.set(50);
}
