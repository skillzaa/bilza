export default function rectangle(lineSeg, filled) {
    lineSeg.startX = 0;
    lineSeg.startY = 0;
    lineSeg.setWdHt(20, 20);
    lineSeg.add(100, 0);
    lineSeg.add(100, 100);
    lineSeg.add(0, 100);
    lineSeg.add(0, 0);
    lineSeg.setLineJoin("round");
    lineSeg.setFilled(filled);
    return lineSeg;
}
