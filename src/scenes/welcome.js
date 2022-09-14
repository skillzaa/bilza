import { hsl, Scene } from "../bilza.js";
export default function welcome(startTime, endTime, hslColorNo) {
    const scene = new Scene(startTime, endTime);
    const txt = scene.add(startTime, endTime).text("Test Scene", hsl(0));
    txt.templ.hdg();
    txt.theme.color(hslColorNo);
    return scene;
}
