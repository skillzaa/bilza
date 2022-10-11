export default function graphInc(lineSeg, filled = false) {
    lineSeg.setWdHt(30, 20);
    lineSeg.startX = 2;
    lineSeg.startY = 90;
    lineSeg.lineTo(30, 50);
    lineSeg.lineTo(30, 85);
    lineSeg.lineTo(60, 30);
    lineSeg.lineTo(60, 70);
    lineSeg.lineTo(95, 5);
    lineSeg.moveTo(0, 0);
    lineSeg.lineTo(0, 95);
    lineSeg.lineTo(95, 95);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(false);
    return lineSeg;
}
