
import Bilza from "../src/Bilza.js";
// import Component from "../src/compsMod/BaseComponent/component.js";
import TestComp from "../src/compsMod/components/testComp/testComp.js"
import Duration from "../src/engine/duration.js"


let bil  =  new Bilza();
// let tst = new TestComp(12);
// let g = new Grid("#0000ff");
// let t = new Text(20,"Seperate engine");

// bil.insert(tst);
// bil.insert(g);
// bil.insert(t);

test('bil.duration.len() = 0', () => {
let dur = new Duration();
    // console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.len()).toBe(0);
});

test('Add comp-Append duration 10', () => {
let dur = new Duration();
let c = new TestComp(10);
c.insertType = c.insertTypeOptions.Append;
dur.adjectWhileInsert(c);    
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.len(false)).toBe(10);
});

test('Try to append comp with zero duration', () => {
let dur = new Duration();
let c = new TestComp(0);
c.insertType = c.insertTypeOptions.Append;
    
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(()=>{ dur.adjectWhileInsert(c)}).toThrow("for Insert operation to succeed you need component duration greater than 0");
});

test('3 X comp-Append duration 30', () => {
let dur = new Duration();
let c = new TestComp(10);
c.insertType = c.insertTypeOptions.Append;
let d = new TestComp(10);
d.insertType = c.insertTypeOptions.Append;
let e = new TestComp(10);
e.insertType = c.insertTypeOptions.Append;

dur.adjectWhileInsert(c);    
dur.adjectWhileInsert(d);    
dur.adjectWhileInsert(e);    
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.len(false)).toBe(30);
});

test('3 X comp-Append duration 18 different tmiings', () => {
let dur = new Duration();
let c = new TestComp(8);
c.insertType = c.insertTypeOptions.Append;
let d = new TestComp(6);
d.insertType = c.insertTypeOptions.Append;
let e = new TestComp(4);
e.insertType = c.insertTypeOptions.Append;

dur.adjectWhileInsert(c);    
dur.adjectWhileInsert(d);    
dur.adjectWhileInsert(e);    
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.len(false)).toBe(18);
});


