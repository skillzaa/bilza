export default function rotateMid(comp) {
    comp.align(1, 1);
    comp.alignRotate(1, 1);
    comp.x.set(50);
    comp.y.set(50);
    comp.width.set(50);
    comp.height.set(50);
    comp.rotation.animate(1, 10, 0, 3 * 360);
    return comp;
}
