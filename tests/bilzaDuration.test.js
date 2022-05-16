
// import Bilza from "../src/Bilza.js";
// import Component from "../src/compsMod/BaseComponent/component.js";
// import TestComp from "../src/compsMod/components/testComp/testComp.js"
// import Text from "../src/compsMod/components/text/text.js";
// import Grid from "../src/compsMod/components/grid/grid.js";
import Duration from "../src/engine/duration.js"

let dur = new Duration();

test('bil.duration.len() = 0', () => {
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.len()).toBe(0);
});

test('duration.entend', () => {
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.extend(10)).toBe(10);
});


