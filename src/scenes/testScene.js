import { CompFactory as cf, hsl, Scene } from "../bilza.js";
export default function testScene(startTime, endTime, color) {
    const scene = new Scene(startTime, endTime);
    const g = cf.grid();
    scene.add(g);
    const txt = cf.text("Text from scene", hsl(0));
    txt.fontSize.set(120);
    txt.align(1, 1);
    txt.setxy(50, 50);
    scene.add(txt, 1, 1);
    return scene;
}
