import { hsl } from "../bilza.js";
export default function tickLeft(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(10);
    lines.height.set(25);
    lines.seg(100, 80, filled, hsl(hue_0_360), lineWidth)
        .add(80, 100)
        .add(0, 0);
    return lines;
}
