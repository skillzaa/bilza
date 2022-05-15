
import TestComp from "../src/compsMod/components/testComp/testComp.js"
import Duration from "../src/engine/duration.js"

test('bil.duration.len() = 0', () => {
let dur = new Duration();
expect(dur.len()).toBe(0);
});

test('Insert comp at 0 location with duration = 10, duration.len() still = 10', () => {
let dur = new Duration();
let c = new TestComp(10);
c.insertType = c.insertTypeOptions.Insert;
dur.adjectWhileInsert(c);    
expect(dur.len(false)).toBe(10);
});

test('comp.startTime > bil.duration. when bil.duration == 0 ', () => {
let dur = new Duration();
let c = new TestComp(0);
c.insertType = c.insertTypeOptions.Insert;
expect(()=>{ dur.adjectWhileInsert(c)}).toThrow("for Insert operation to succeed you need component duration greater than 0");
});

test('comp.startTime > bil.duration. when bil.duration != 0 ', () => {
let dur = new Duration();
let a = new TestComp(5);//length = 5;
a.insertType = a.insertTypeOptions.Insert;
dur.adjectWhileInsert(a); //we are not checking this
let b = new TestComp(0); //length = 0;
b.insertType = b.insertTypeOptions.Insert;
expect(()=>{ dur.adjectWhileInsert(b)}).toThrow("for Insert operation to succeed you need component duration greater than 0");
});

test('Blank Frames Error in insert After insert', () => {
let dur = new Duration();
//-- its startTime will be equal to 0 and end time 10
let a = new TestComp(10);//length = 10;
a.insertType = a.insertTypeOptions.Insert;
dur.adjectWhileInsert(a); //we are not checking this
let b = new TestComp(10); //length = 0;
b.insertType = b.insertTypeOptions.Insert;
b.setStartTime(15); //creates 5 sec of blank frames
expect(()=>{ dur.adjectWhileInsert(b)}).toThrow();
});

test('Blank Frames At Start insert', () => {
let dur = new Duration();
//-- its startTime will be equal to 0 and end time 10
let a = new TestComp(10);//length = 10;
a.insertType = a.insertTypeOptions.Insert;
dur.adjectWhileInsert(a); //we are not checking this
a.setStartTime(15); //creates 5 sec of blank frames

expect(()=>{ dur.adjectWhileInsert(a)}).toThrow();
});

test('insert After Append', () => {
let dur = new Duration();

let a = new TestComp(10);//length = 10;
a.insertType = a.insertTypeOptions.Append;
dur.adjectWhileInsert(a); //
// a.setStartTime(0); //StartTime does not matter in append


let b = new TestComp(10);//length = 10;
b.insertType = a.insertTypeOptions.Insert;
b.setStartTime(15); //creates 5 sec of blank frames

expect(()=>{ dur.adjectWhileInsert(b)}).toThrow();
});

test('Append-Insert-Overlap', () => {
let dur = new Duration();
//--Append-1
let a = new TestComp(10);//length = 10;
a.insertType = a.insertTypeOptions.Append;
dur.adjectWhileInsert(a); //

//--Insert-2
let b = new TestComp(10);//daration = 10;
b.insertType = a.insertTypeOptions.Insert;
b.setStartTime(5); //so insert at 5 bil.duration will == 15
dur.adjectWhileInsert(b); //    
});
