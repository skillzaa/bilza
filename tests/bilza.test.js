
import Bilza from "../src/Bilza.js";

let bil = new Bilza("bilza");

// console.log(bil);

test('Bilza its self is define', () => {
expect(bil).toBeDefined();
});

test('bil.pack is define', () => {
expect(bil.pack).toBeDefined();
});
test('bil.comps is define', () => {
expect(bil.comps).toBeDefined();
});
test('bil.duration is define', () => {
expect(bil.duration).toBeDefined();
});
test('bil.stopWatch is define', () => {
expect(bil.stopWatch).toBeDefined();
});
test('bil.set is define', () => {
expect(bil.set).toBeDefined();
});
test('bil.background is define', () => {
expect(bil.background).toBeDefined();
});

////////------Now check basic functions they must atleast exist

test('bil.drawInit() is define and return true', () => {
expect(bil.drawInit()).toBeTruthy();
});
test('bil.draw() is define and return true', () => {
expect(bil.draw()).toBeTruthy();
});
test('bil.drawEvent() is define and return true', () => {
expect(bil.drawEvent()).toBeTruthy();
});
test('bil.dynamicCanvas() is define and return true', () => {
expect(bil.dynamicCanvas()).toBeTruthy();
});
test('bil.start() is define and return true', () => {
expect(bil.start()).toBeTruthy();
});
test('bil.len() is define and return true', () => {
expect(bil.len()).toBe(0);
});


