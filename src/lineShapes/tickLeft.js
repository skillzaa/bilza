export default function rightTriangle(lineSeg, filled = false) {
    lineSeg.startX = 95;
    lineSeg.startY = 70;
    lineSeg.setWdHt(10, 20);
    lineSeg.lineTo(75, 90);
    lineSeg.lineTo(2, 2);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(false);
    return lineSeg;
}
