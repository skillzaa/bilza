import Increment from "../../../../src/BaseComponent/animation/filters/increment.js"

test('setup', () => {
    let inc = new Increment (0,10,1,100);
    expect(inc).toBeDefined();
});

test('update(0) = null not included', () => {
    let inc = new Increment (0,10,0,100);
    inc.update(0); //msDelta is in ms
    expect(inc.value()).toBeNull();
});
test('update(10,000ms) = null not included', () => {
    let inc = new Increment (0,10,0,100);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(100);
});
test('from-0,to-10,startVal-0,endVal-100', () => {
    let inc = new Increment (0,10,0,100);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(100);
});
test('from-0,to-10,startVal-1,endVal-100', () => {
    let inc = new Increment (0,10,0,100);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(50);
});
/////////////////////////////////////////////////
test('from-0,to-10,startVal-0,endVal-1000', () => {
    let inc = new Increment (0,10,0,1000);
    inc.update(0); //msDelta is in ms
    expect(inc.value()).toBeNull();
});
test('from-0,to-10,startVal-0,endVal-1000', () => {
    let inc = new Increment (0,10,0,1000);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(500);
});
test('from-0,to-10,startVal-0,endVal-1000', () => {
    let inc = new Increment (0,10,0,1000);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(1000);
});

///////////////////////////////////////////////////
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Increment (0,10,-500,500);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(0);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Increment (0,10,-500,500);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(500);
});
//--
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Increment (0,10,-500,500);
    inc.update(1000); //msDelta is in ms
    expect(inc.value()).toBe(-400);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Increment (0,10,-500,500);
    inc.update(2000); //msDelta is in ms
    expect(inc.value()).toBe(-300);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Increment (0,10,-500,500);
    inc.update(2500); //msDelta is in ms
    expect(inc.value()).toBe(-250);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Increment (0,10,-500,500);
    inc.update(4000); //msDelta is in ms
    expect(inc.value()).toBe(-100);
});