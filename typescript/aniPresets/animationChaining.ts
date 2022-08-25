import { IComponent } from "../bilza.js";

export default function animationChaining(comp :IComponent){
comp.x.set(0);
comp.y.set(0);

comp.width.set(30);
comp.height.set(30);

comp.x.animate(1, 5, 0, 90);
comp.y.animate(6, 10, 0, 90);
comp.x.animate(11, 15, 90, 0);
comp.y.animate(16, 20, 90, 0);

comp.setStartTime(0);
comp.duration = 25;

return comp;
}