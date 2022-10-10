export default function starOfDavid(lineSeg, filled) {
    lineSeg.startX = 0;
    lineSeg.startY = 75;
    lineSeg.setWdHt(20, 35);
    lineSeg.lineTo(100, 75);
    lineSeg.lineTo(50, 0);
    lineSeg.lineTo(0, 75);
    lineSeg.fill();
    lineSeg.moveTo(0, 25);
    lineSeg.lineTo(100, 25);
    lineSeg.lineTo(50, 100);
    lineSeg.lineTo(0, 25);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(filled);
    return lineSeg;
}
