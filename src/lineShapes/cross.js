import { hsl } from "../bilza.js";
export default function cross(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.width.set(20);
    lines.height.set(35);
    lines.add(0, 0, 100, 100, hsl(hue_0_360), lineWidth);
    lines.add(0, 100, 100, 0, hsl(hue_0_360), lineWidth);
    return lines;
}
