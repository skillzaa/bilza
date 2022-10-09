export default function tickRight(lines, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(10);
    lines.height.set(25);
    lines.seg(0, 80, lineWidth)
        .add(20, 100)
        .add(100, 0)
        .save();
    return lines;
}
