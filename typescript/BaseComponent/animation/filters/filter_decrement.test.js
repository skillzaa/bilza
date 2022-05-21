import Decrement from "../../../../src/BaseComponent/animation/filters/decrement.js"

test('setup', () => {
    let inc = new Decrement (0,10,100,0);
    expect(inc).toBeDefined();
});

test('starting edge cases-inc.update(0) = null not included', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(0); //msDelta is in ms
    expect(inc.value()).toBeNull();
});
test('inc.update(1000) = 90 or 90%', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(1000); //msDelta is in ms
    expect(inc.value()).toBe(90);
});
test('inc.update(2000) = 80 or 80%', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(2000); //msDelta is in ms
    expect(inc.value()).toBe(80);
});
test('inc.update(3000) = 70 or 70%', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(3000); //msDelta is in ms
    expect(inc.value()).toBe(70);
});
test('inc.update(4000)', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(4000); //msDelta is in ms
    expect(inc.value()).toBe(60);
});
test('inc.update(5000)', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(50);
});
test('inc.update(6000)', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(6000); //msDelta is in ms
    expect(inc.value()).toBe(40);
});
test('inc.update(9000)', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(9000); //msDelta is in ms
    expect(inc.value()).toBe(10);
});
test('inc.update(10000)', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(0);
});

