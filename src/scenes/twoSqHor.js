import { CompFactory as cf, hsl, Scene } from "../bilza.js";
export default function towSqHor(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120)) {
    const scene = new Scene(startTime, endTime);
    const sq1 = getRect(colorSq1, 0, 0);
    scene.add(sq1);
    const sq2 = getRect(colorSq2, 0, 50);
    scene.add(sq2);
    return scene;
}
function getRect(color, x, y) {
    const rect = cf.fillRect(color);
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(100);
    rect.height.set(50);
    return rect;
}
