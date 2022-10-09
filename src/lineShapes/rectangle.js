export default function rectangle(lines, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(40);
    lines.height.set(40);
    lines.seg(0, 0, lineWidth)
        .add(100, 0)
        .add(100, 100)
        .add(0, 100)
        .add(0, 0)
        .save();
    return lines;
}
