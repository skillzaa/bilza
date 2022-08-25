import { hsl } from "../bilza.js";
export default function paddingResponsive(comp) {
    comp.align(1, 1);
    comp.x.set(50);
    comp.y.set(50);
    comp.showBackground.set(true);
    comp.colorBackground.set(hsl(60));
    comp.width.set(50);
    comp.height.set(50);
    comp.border.set(15);
    comp.paddingLeft.animate(1, 5, 0, 20);
    comp.paddingLeft.animate(6, 10, 20, 0);
    comp.paddingRight.animate(11, 15, 0, 20);
    comp.paddingRight.animate(16, 20, 20, 0);
    comp.paddingTop.animate(21, 25, 0, 20);
    comp.paddingTop.animate(26, 30, 20, 0);
    comp.paddingBottom.animate(31, 35, 0, 20);
    comp.paddingBottom.animate(36, 40, 20, 0);
    return comp;
}
