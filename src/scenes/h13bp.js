import { CompFactory as cf, hsl, Scene } from "../bilza.js";
export default function h13bp(startTime, endTime, titleContent = "", bp1Content = "", bp2Content = "", bp3Content = "", ftNoteContent = "", hslColorNo = 240, bp1EntryTime = 0, bp2EntryTime = 0, bp3EntryTime = 0, ftNoteEntryTime = 0, bp1Y = 35, bp2Y = 55, bp3Y = 75) {
    const scene = new Scene(startTime, endTime);
    if (titleContent !== "") {
        const txt = cf.text(titleContent, hsl(0));
        scene.add(txt);
        txt.templ.h1(50, 5);
        txt.theme.color(hslColorNo);
        txt.entryAni.topIn();
        txt.exitAni.fadeOut();
    }
    if (bp1Content !== "") {
        const bltPt = cf.text(bp1Content);
        scene.add(bltPt, bp1EntryTime);
        bltPt.templ.bltPt(bp1Y).theme.color(hslColorNo)
            .entryAni.fadeIn()
            .exitAni.fadeOut();
    }
    if (bp2Content !== "") {
        const bltPt02 = cf.text(bp2Content);
        scene.add(bltPt02, bp2EntryTime);
        bltPt02.templ.bltPt(bp2Y).theme.color(hslColorNo)
            .entryAni.fadeIn()
            .exitAni.fadeOut();
    }
    if (bp3Content !== "") {
        const bltPt03 = cf.text(bp3Content);
        scene.add(bltPt03, bp3EntryTime);
        bltPt03.templ.bltPt(bp3Y).theme.color(hslColorNo)
            .entryAni.fadeIn()
            .exitAni.fadeOut();
    }
    if (ftNoteContent !== "") {
        const ftnt = cf.text(ftNoteContent);
        scene.add(ftnt, ftNoteEntryTime);
        ftnt.templ.ftNote();
        ftnt.theme.color(hslColorNo);
        ftnt.entryAni.fadeIn();
        ftnt.exitAni.fadeOut();
    }
    return scene;
}
