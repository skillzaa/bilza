import { hsl } from "../bilza.js";
export default function tickRight(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.width.set(10);
    lines.height.set(25);
    lines.add(0, 80, 20, 100, hsl(hue_0_360), lineWidth);
    lines.add(20, 100, 100, 0, hsl(hue_0_360), lineWidth);
    return lines;
}
