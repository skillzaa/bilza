import { hsl } from "../bilza.js";
export default function towSqHor(scene, colorSq1 = hsl(0), colorSq2 = hsl(120)) {
    const sq1 = scene.add().fillRect(colorSq1);
    sq1.setxy(0, 0);
    sq1.width.set(100);
    sq1.height.set(50);
    const sq2 = scene.add().fillRect(colorSq2);
    sq2.setxy(0, 50);
    sq2.width.set(100);
    sq2.height.set(50);
}
