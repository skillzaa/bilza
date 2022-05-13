export default function drawByDrawLayer(compsArray, msDelta, drawLayer, pack) {
    for (let i = 0; i < compsArray.length; i++) {
        let comp = compsArray[i];
        if (comp.drawLayer == drawLayer) {
            if (qualifyForDraw(comp, msDelta)) {
                pack.save();
                comp.update(msDelta, pack);
                comp.draw(pack);
                pack.restore();
            }
        }
    }
    return true;
}
function qualifyForDraw(comp, msDelta) {
    if (comp.insertType == comp.insertTypeOptions.AlwaysOn) {
        return true;
    }
    if (comp.getStartTime(true) <= msDelta && comp.getEndTime(true) > msDelta) {
        return true;
    }
    return false;
}
