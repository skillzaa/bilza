export default function rightTriangle(lines, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(40);
    lines.height.set(30);
    lines.seg(0, 0, lineWidth)
        .add(0, 100)
        .add(100, 100)
        .add(0, 0)
        .save();
    return lines;
}
