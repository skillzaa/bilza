export default function graphInc(lineSeg, filled = false) {
    lineSeg.setWdHt(20, 20);
    lineSeg.startX = 50;
    lineSeg.startY = 5;
    lineSeg.lineTo(90, 90);
    lineSeg.lineTo(5, 90);
    lineSeg.lineTo(50, 5);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(filled);
    return lineSeg;
}
