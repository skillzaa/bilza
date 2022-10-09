import { hsl } from "../bilza.js";
export default function tickRight(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(10);
    lines.height.set(25);
    lines.seg(0, 80, filled, hsl(hue_0_360), lineWidth)
        .add(20, 100)
        .add(100, 0);
    return lines;
}
