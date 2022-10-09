import { hsl } from "../bilza.js";
export default function rightTriangle(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(40);
    lines.height.set(30);
    lines.seg(0, 0, filled, hsl(hue_0_360), lineWidth)
        .add(0, 100)
        .add(100, 100)
        .add(0, 0);
    return lines;
}
