export default function h13bp(scene, hslColorNo = 240, titleContent = "", bp1Content = "", bp1EntryTime = 0, bp2Content = "", bp2EntryTime = 0, bp3Content = "", bp3EntryTime = 0, ftNoteContent = "", ftNoteEntryTime = 0, titleY = 5) {
    if (titleContent !== "") {
        const txt = scene.add().text(titleContent).templ.hdg();
        txt.y.set(titleY);
        txt.theme.color(hslColorNo);
        txt.entryAni.topIn();
        txt.exitAni.fadeOut();
    }
    if (bp1Content !== "") {
        const bltPt = scene.add(bp1EntryTime, 0).text(bp1Content);
        bltPt.templ.bltPt(1, 35, 7).theme.color(hslColorNo)
            .entryAni.fadeIn()
            .exitAni.fadeOut();
    }
    if (bp2Content !== "") {
        const bltPt02 = scene.add(bp2EntryTime, 0).text(bp2Content);
        bltPt02.templ.bltPt(1, 55, 7).theme.color(hslColorNo)
            .entryAni.fadeIn()
            .exitAni.fadeOut();
    }
    if (bp3Content !== "") {
        const bltPt03 = scene.add(bp3EntryTime, 0).text(bp3Content);
        bltPt03.templ.bltPt(1, 75, 7).theme.color(hslColorNo)
            .entryAni.fadeIn()
            .exitAni.fadeOut();
    }
    if (ftNoteContent !== "") {
        const ftnt = scene.add(ftNoteEntryTime).text(ftNoteContent);
        ftnt.templ.ftNote(0, 92, 5);
        ftnt.theme.color(hslColorNo);
        ftnt.entryAni.leftIn();
        ftnt.exitAni.fadeOut();
    }
    return scene;
}
