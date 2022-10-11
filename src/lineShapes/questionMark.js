export default function questionMark(lineSeg, filled) {
    lineSeg.setWdHt(10, 20);
    lineSeg.lineWidth = 15;
    lineSeg.startX = 15;
    lineSeg.startY = 20;
    lineSeg.lineTo(15, 10);
    lineSeg.lineTo(95, 10);
    lineSeg.lineTo(95, 50);
    lineSeg.lineTo(30, 50);
    lineSeg.lineTo(30, 70);
    lineSeg.moveTo(30, 90);
    lineSeg.lineTo(30, 94);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(false);
    return lineSeg;
}
