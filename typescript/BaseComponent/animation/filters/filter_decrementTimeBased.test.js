import DecrementTimeBased from "../../../../src/BaseComponent/animation/filters/decrementTimeBased.js"

test('setup', () => {
    let inc = new DecrementTimeBased (0,10,100,0);
    expect(inc).toBeDefined();
});

test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(0); //msDelta is in ms
    expect(inc.value()).toBeNull();
});

//micro time
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(100); //msDelta is in ms
    expect(inc.value()).toBe(490);
});
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(500); //msDelta is in ms
    expect(inc.value()).toBe(450);
});
//normal time
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(1000); //msDelta is in ms
    expect(inc.value()).toBe(400);
});
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(2000); //msDelta is in ms
    expect(inc.value()).toBe(300);
});
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(3000); //msDelta is in ms
    expect(inc.value()).toBe(200);
});
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(4000); //msDelta is in ms
    expect(inc.value()).toBe(100);
});
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(0);
});
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(6000); //msDelta is in ms
    expect(inc.value()).toBe(-100);
});
test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(7000); //msDelta is in ms
    expect(inc.value()).toBe(-200);
});

test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(8000); //msDelta is in ms
    expect(inc.value()).toBe(-300);
});

test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(9000); //msDelta is in ms
    expect(inc.value()).toBe(-400);
});

test('Decrement(0,10,500,-500)', () => {
    let inc = new DecrementTimeBased (0,10,500,-500);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(-500);
});
