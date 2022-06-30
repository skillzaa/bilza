
import Decrement from "../../../src/aniNumber/filters/decrement.js";
//increment does not need init

test('negative time is not allowed', () => {
expect(()=>{ new Decrement (-2,10,1,100) }).toThrow("time can not be negative");
});

test('end Time can not be equal or smaller than start time', () => {
expect(()=>{ new Decrement (20,10,1,100) }).toThrow("end Time can not be equal or smaller than start time");
});

test('start value can not be less than zero in decrement operation', () => {expect(()=>{ new Decrement (0,10,-10,-20) }).toThrow("start value can not be less than zero in decrement operation");
});


test('insert_add_setup = 0', () => {
let inc = new Decrement(0,10,100,1);
expect(inc.value()).toBeNull();
});


test('update(0) = at 0 ms value = 0', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(0); 
    expect(inc.value()).toBe(100);
});

test('from-0,to-10,startVal-0,endVal-100', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(0);
});

test('from-0,to-10,startVal-1,endVal-100', () => {
    let inc = new Decrement (0,10,100,0);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(50);
});
// /////////////////////////////////////////////////
test('from-0,to-10,startVal-0,endVal-1000', () => {
    let inc = new Decrement (0,10,1000,0);
    inc.update(0); //msDelta is in ms
    expect(inc.value()).toBe(1000);
});
test('from-0,to-10,startVal-0,endVal-1000', () => {
    let inc = new Decrement (0,10,1000,0);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(500);
});
test('from-0,to-10,startVal-0,endVal-1000', () => {
    let inc = new Decrement (0,10,1000,0);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(0);
});

// // ///////////////////////////////////////////////////
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(0);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(0); //msDelta is in ms
    expect(inc.value()).toBe(500);
});

test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(1000); //msDelta is in ms
    expect(inc.value()).toBe(400);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(2000); //msDelta is in ms
    expect(inc.value()).toBe(300);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(2500); //msDelta is in ms
    expect(inc.value()).toBe(250);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(3000); //msDelta is in ms
    expect(inc.value()).toBe(200);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(4000); //msDelta is in ms
    expect(inc.value()).toBe(100);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(5000); //msDelta is in ms
    expect(inc.value()).toBe(0);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(6000); //msDelta is in ms
    expect(inc.value()).toBe(-100);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(7000); //msDelta is in ms
    expect(inc.value()).toBe(-200);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(8000); //msDelta is in ms
    expect(inc.value()).toBe(-300);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(9000); //msDelta is in ms
    expect(inc.value()).toBe(-400);
});
test('from-0,to-10,startVal = -500,endVal =500', () => {
    let inc = new Decrement (0,10,500,-500);
    inc.update(10000); //msDelta is in ms
    expect(inc.value()).toBe(-500);
});