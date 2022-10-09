import { hsl } from "../bilza.js";
export default function triangle(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(20);
    lines.height.set(35);
    lines.seg(0, 75, filled, hsl(hue_0_360), lineWidth)
        .add(100, 75)
        .add(50, 0)
        .add(0, 75);
    return lines;
}
