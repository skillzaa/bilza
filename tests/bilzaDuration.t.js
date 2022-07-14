import Duration from "../../src/bilzaMod/duration.js"

let dur = new Duration();

test('bil.duration.len() = 0', () => {
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.len()).toBe(0);
});

test('duration.entend', () => {
// console.log("_pvt_duration_val", dur._pvt_duration_val);
expect(dur.extend(10)).toBe(10);
});


