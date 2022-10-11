export default function cross(lineSeg, filled = false) {
    lineSeg.startX = 5;
    lineSeg.startY = 5;
    lineSeg.setWdHt(20, 30);
    lineSeg.lineTo(95, 95);
    lineSeg.moveTo(5, 95);
    lineSeg.lineTo(95, 5);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(false);
    return lineSeg;
}
