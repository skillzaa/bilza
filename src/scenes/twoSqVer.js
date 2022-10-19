import { hsl } from "../bilza.js";
export default function twoSqVer(scene, colorSq1 = hsl(0), colorSq2 = hsl(120)) {
    const sq1 = scene.add().fillRect(colorSq1);
    sq1.setxy(0, 0);
    sq1.width.set(50);
    sq1.height.set(100);
    sq1.exitAni.fadeOut();
    sq1.entryAni.leftIn();
    const sq2 = scene.add().fillRect(colorSq2);
    sq2.setxy(50, 0);
    sq2.width.set(50);
    sq2.height.set(100);
    sq2.exitAni.fadeOut();
    sq2.entryAni.rightIn();
    return scene;
}
