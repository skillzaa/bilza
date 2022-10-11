export default function tickRight(lineSeg, filled = false) {
    lineSeg.startX = 5;
    lineSeg.startY = 70;
    lineSeg.setWdHt(10, 20);
    lineSeg.lineTo(10, 90);
    lineSeg.lineTo(95, 0);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(false);
    return lineSeg;
}
