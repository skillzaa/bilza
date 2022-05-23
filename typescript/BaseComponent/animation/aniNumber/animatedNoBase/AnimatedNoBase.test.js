
import AnimatedNoBase from "../../../../../src/BaseComponent/animation/aniNumber/AnimatedNoBase.js";


test('Bilza its self is define', () => {
let no = new AnimatedNoBase();
expect(no).toBeDefined();
});

test('not init so value = default value =0', () => {
let no = new AnimatedNoBase();
expect(no.value()).toBe(0);
});
test('default value = 10', () => {
let no = new AnimatedNoBase(10);
expect(no.value()).toBe(10);
});

test('after default value check setValue', () => {
let no = new AnimatedNoBase(10);
no.setValue(22);
no.update(0); //the runSetValue does not need msDelta
expect(no.value()).toBe(22);
});

test('setValue does not work without update', () => {
let no = new AnimatedNoBase(10);
no.setValue(22);
// no.update(0); //the runSetValue does not need msDelta
expect(no.value()).toBe(10);
});
 



     


