import { hsl } from "../bilza.js";
export default function starOfDavid(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(20);
    lines.height.set(35);
    lines.seg(0, 75, filled, hsl(hue_0_360), lineWidth)
        .add(100, 75)
        .add(50, 0)
        .add(0, 75);
    lines.seg(0, 25, filled, hsl(hue_0_360), lineWidth)
        .add(100, 25)
        .add(50, 100)
        .add(0, 25);
    return lines;
}
