export default function tickLeft(lines, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(10);
    lines.height.set(25);
    lines.seg(100, 80, lineWidth)
        .add(80, 100)
        .add(0, 0)
        .save();
    return lines;
}
