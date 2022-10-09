export default function starOfDavid(lines, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(20);
    lines.height.set(35);
    lines.seg(0, 75, lineWidth)
        .add(100, 75)
        .add(50, 0)
        .add(0, 75)
        .save();
    lines.seg(0, 25, lineWidth)
        .add(100, 25)
        .add(50, 100)
        .add(0, 25)
        .save();
    return lines;
}
