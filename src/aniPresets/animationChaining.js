export default function animationChaining(comp) {
    comp.x.set(0);
    comp.y.set(0);
    comp.width.set(30);
    comp.height.set(30);
    comp.x.animate(1, 10, 0, 90);
    comp.y.animate(11, 20, 0, 90);
    comp.x.animate(21, 30, 90, 0);
    comp.y.animate(31, 40, 90, 0);
    return comp;
}
