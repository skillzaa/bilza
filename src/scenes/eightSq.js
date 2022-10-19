import { hsl } from "../bilza.js";
export default function eightSq(scene, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(60), colorSq5 = hsl(0), colorSq6 = hsl(180), colorSq7 = hsl(0), colorSq8 = hsl(100)) {
    const sq1 = getRect(scene, colorSq1, 0, 0);
    const sq2 = getRect(scene, colorSq2, 25, 0);
    const sq3 = getRect(scene, colorSq3, 50, 0);
    const sq4 = getRect(scene, colorSq4, 75, 0);
    const sq5 = getRect(scene, colorSq5, 0, 50);
    const sq6 = getRect(scene, colorSq6, 25, 50);
    const sq7 = getRect(scene, colorSq7, 50, 50);
    const sq8 = getRect(scene, colorSq8, 75, 50);
    return scene;
}
function getRect(scene, color, x, y) {
    const rect = scene.add().fillRect(color);
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(25);
    rect.height.set(50);
    return rect;
}
