import Bilza from "../src/Bilza.js";
import TestComp from "../src/testComp/testComp.js"

test('Append Basic', () => {
    let bil  =  new Bilza();
    let a = new TestComp();
let b = new TestComp();
bil.insert.append(a,10);    
bil.insert.append(b,5);    
expect(bil.len(false)).toBe(15);
});

test('Try to append comp with zero duration', () => {
    let bil  =  new Bilza();    
let c = new TestComp();
// c.insertType = c.insertTypeOptions.Append;
expect(()=>{ bil.insert.append(c,0)}).toThrow("for Insert operation to succeed you need component duration greater than 0");
});
test('missing second argument', () => {
    let bil  =  new Bilza();    
let c = new TestComp();
expect(()=>{ bil.insert.append(c)}).toThrow("for Insert operation to succeed you need component duration greater than 0");
});

test('3 X comp-Append duration 30', () => {
let bil = new Bilza();
let c = new TestComp();
let d = new TestComp();
let e = new TestComp();

bil.insert.append(c,10);    
bil.insert.append(d,10);    
bil.insert.append(e,10);    
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(bil.len(false)).toBe(30);
});

test('3 X comp-Append duration different tmiings (total time =18)', () => {
let bil = new Bilza();
let c = new TestComp();
let d = new TestComp();
let e = new TestComp();

bil.insert.append(c,8);    
bil.insert.append(d,6);    
bil.insert.append(e,4);    
expect(bil.len(false)).toBe(18);
});


