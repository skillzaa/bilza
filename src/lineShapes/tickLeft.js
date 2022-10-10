import { hsl } from "../bilza.js";
export default function tickLeft(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(10);
    lines.height.set(25);
    lines.add(100, 80, 80, 100, hsl(hue_0_360), lineWidth);
    lines.add(80, 100, 0, 0, hsl(hue_0_360), lineWidth);
    return lines;
}
