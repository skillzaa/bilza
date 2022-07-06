
// import Bilza from "../src/bilza.js"
import StopWatch from "../../src/bilzaMod/stopWatch.js";



test('check stop watch', () => {
let s = new StopWatch();
    expect(s.isRunning()).toBeFalsy();
});

test('getMsDelta', () => {
let s = new StopWatch();
let getMsDelta = s.getMsDelta();
    expect(getMsDelta).toBe(0);
});
//--;ater since it needs timer
// test('start', () => {
// let s = new StopWatch();
// s.start();
//     // console.log("getMsDelta",getMsDelta);
//     expect(s.getMsDelta()).toBeGreaterThan(0);
// });

test('start-stop', () => {
let s = new StopWatch();
s.start();
    s.stop();
    expect(s.getMsDelta()).toBe(0);
});

