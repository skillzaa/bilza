export default function exclamationMark(lineSeg, filled) {
    lineSeg.startX = 50;
    lineSeg.startY = 5;
    lineSeg.lineWidth = 15;
    lineSeg.setWdHt(10, 20);
    lineSeg.lineTo(50, 65);
    lineSeg.moveTo(50, 85);
    lineSeg.lineTo(50, 93);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(false);
    return lineSeg;
}
