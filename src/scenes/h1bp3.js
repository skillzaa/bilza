import { CompFactory as cf, hsl, Scene } from "../bilza.js";
export default function h1bp3(startTime, endTime, hslColorNo) {
    const sce = new Scene(startTime, endTime);
    const txt = cf.text("Test Scene", hsl(0));
    txt.templ.h1();
    txt.theme.color(240);
    sce.add(txt, sce.startTimePlus(0), sce.endTimeMinus(0));
    return sce;
}
