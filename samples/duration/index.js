import Duration from "../../src/engine/duration.js";
import TestComp from "../../src/compsMod/components/testComp/testComp.js";

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

// expect(dur.len(false)).toBe(15);