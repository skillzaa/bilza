export default function arrow(lineSeg, filled) {
    lineSeg.setWdHt(30, 20);
    lineSeg.lineWidth = 10;
    lineSeg.startX = 5;
    lineSeg.startY = 50;
    lineSeg.lineTo(95, 50);
    lineSeg.lineTo(50, 25);
    lineSeg.moveTo(95, 50);
    lineSeg.lineTo(50, 75);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(false);
    return lineSeg;
}
