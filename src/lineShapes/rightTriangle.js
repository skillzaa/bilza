export default function rightTriangle(lineSeg, filled = false) {
    lineSeg.startX = 5;
    lineSeg.startY = 95;
    lineSeg.setWdHt(20, 20);
    lineSeg.lineTo(95, 95);
    lineSeg.lineTo(5, 5);
    lineSeg.lineTo(5, 95);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(filled);
    return lineSeg;
}
