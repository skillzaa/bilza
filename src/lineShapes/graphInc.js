import { hsl } from "../bilza.js";
export default function graphInc(lines, hue_0_360 = 360, filled = true, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(60);
    lines.height.set(40);
    lines.showBackground.set(true);
    lines.seg(0, 100, filled, hsl(hue_0_360), lineWidth)
        .add(33, 55)
        .add(33, 90)
        .add(66, 33)
        .add(66, 66)
        .add(99, 0);
    return lines;
}
