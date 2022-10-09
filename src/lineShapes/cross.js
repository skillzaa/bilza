export default function cross(lines, lineWidth = 4) {
    lines.setxy(0);
    lines.width.set(20);
    lines.height.set(35);
    lines.add(0, 0, 100, 100, lineWidth);
    lines.add(0, 100, 100, 0, lineWidth);
    return lines;
}
