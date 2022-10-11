export default function home(lineSeg, filled) {
    lineSeg.setWdHt(30, 30);
    lineSeg.lineWidth = 10;
    lineSeg.startX = 50;
    lineSeg.startY = 5;
    lineSeg.lineTo(5, 40);
    lineSeg.lineTo(95, 40);
    lineSeg.lineTo(50, 5);
    lineSeg.moveTo(20, 40);
    lineSeg.lineTo(80, 40);
    lineSeg.lineTo(80, 90);
    lineSeg.lineTo(20, 90);
    lineSeg.lineTo(20, 40);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(filled);
    return lineSeg;
}
