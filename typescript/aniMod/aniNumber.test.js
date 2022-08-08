import AniNumber from "../../src/aniMod/aniNumber.js";


test('false', () => {
    const aniNo = new AniNumber(0);
    expect(aniNo).toExist();
});

// test('getMsDelta', () => {
// let s = new StopWatch();
// let getMsDelta = s.getMsDelta();
//     expect(getMsDelta).toBe(0);
// });
//--;ater since it needs timer
// test('start', () => {
// let s = new StopWatch();
// s.start();
//     // console.log("getMsDelta",getMsDelta);
//     expect(s.getMsDelta()).toBeGreaterThan(0);
// });

// test('start-stop', () => {
// let s = new StopWatch();
// s.start();
//     s.stop();
//     expect(s.getMsDelta()).toBe(0);
// });

