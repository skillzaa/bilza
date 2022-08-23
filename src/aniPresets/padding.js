import { hsl } from "../bilza.js";
export default function padding(comp) {
    comp.align(1, 1);
    comp.x.set(50);
    comp.y.set(50);
    comp.showBackground.set(true);
    comp.colorBackground.set(hsl(60));
    comp.width.set(50);
    comp.height.set(50);
    comp.border.set(15);
    comp.paddingLeft.animate(1, 5, 0, 200);
    comp.paddingLeft.animate(6, 10, 200, 0);
    comp.paddingRight.animate(11, 15, 0, 200);
    comp.paddingRight.animate(16, 20, 200, 0);
    comp.paddingTop.animate(21, 25, 0, 200);
    comp.paddingTop.animate(26, 30, 200, 0);
    comp.paddingBottom.animate(31, 35, 0, 200);
    comp.paddingBottom.animate(36, 40, 200, 0);
    return comp;
}
