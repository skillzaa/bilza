
// import Bilza from "../src/Bilza.js";
// import Component from "../src/compsMod/BaseComponent/component.js";
// import TestComp from "../src/compsMod/components/testComp/testComp.js"
// import Text from "../src/compsMod/components/text/text.js";
// import Grid from "../src/compsMod/components/grid/grid.js";
import Duration from "../src/engine/duration.js"
/**
 * Test the basics all important pieces should be there
 */
let dur = new Duration();

// let tst = new TestComp(12);
// let g = new Grid("#0000ff");
// let t = new Text(20,"Seperate engine");

// bil.insert(tst);
// bil.insert(g);
// bil.insert(t);

test('bil.duration.len() = 0', () => {
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.len()).toBe(0);
});


