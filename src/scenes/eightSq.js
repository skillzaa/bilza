import { CompFactory as cf, hsl, Scene } from "../bilza.js";
export default function sixSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(60), colorSq5 = hsl(0), colorSq6 = hsl(180), colorSq7 = hsl(0), colorSq8 = hsl(100)) {
    const scene = new Scene(startTime, endTime);
    const sq1 = getRect(colorSq1, 0, 0);
    scene.add(sq1);
    const sq2 = getRect(colorSq2, 25, 0);
    scene.add(sq2);
    const sq3 = getRect(colorSq3, 50, 0);
    scene.add(sq3);
    const sq4 = getRect(colorSq4, 75, 50);
    scene.add(sq4);
    const sq5 = getRect(colorSq5, 0, 50);
    scene.add(sq5);
    const sq6 = getRect(colorSq6, 25, 50);
    scene.add(sq6);
    const sq7 = getRect(colorSq7, 50, 50);
    scene.add(sq7);
    const sq8 = getRect(colorSq8, 75, 50);
    scene.add(sq8);
    return scene;
}
function getRect(color, x, y) {
    const rect = cf.fillRect(color);
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(25);
    rect.height.set(50);
    return rect;
}
