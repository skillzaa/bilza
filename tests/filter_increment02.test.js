// import Increment from "../src/animation/aniNumber/increment.js"

// test('setup', () => {
//     let inc = new Increment(0,10,0,100);
//     expect(inc).toBeDefined();
// });
// test('starting edge cases-inc.update(0) = null since lower bound is not included', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(0); //msDelta is in ms
//     expect(inc.value()).toBeNull();
// });
// test('update 0 ', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(0);//msDelta is in ms
//     expect(inc.value()).toBeNull();
// });
// test('starting edge cases-10ms--also return 1 its ok ', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(10);//msDelta is in ms
//     expect(inc.value()).toBe(1);
// });
// test('starting edge cases-100ms ', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(100);//msDelta is in ms
//     expect(inc.value()).toBe(1);
// });
// test('starting edge cases-inc.update(500) ', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(500);//msDelta is in ms
//     expect(inc.value()).toBe(5);
// });
// test('inc.update(1000) ', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(1000);//msDelta is in ms
//     expect(inc.value()).toBe(10);
// });
// test('inc.update(2000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(2000);//msDelta is in ms
//     expect(inc.value()).toBe(20);
// });
// test('inc.update(3000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(3000);//msDelta is in ms
//     expect(inc.value()).toBe(30);
// });
// test('inc.update(3100);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(3100);//msDelta is in ms
//     expect(inc.value()).toBe(31);
// });
// test('inc.update(3500);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(3500);//msDelta is in ms
//     expect(inc.value()).toBe(35);
// });
// test('inc.update(3900);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(3900);//msDelta is in ms
//     expect(inc.value()).toBe(39);
// });
// test('inc.update(4000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(4000);//msDelta is in ms
//     expect(inc.value()).toBe(40);
// });
// test('inc.update(5000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(5000);//msDelta is in ms
//     expect(inc.value()).toBe(50);
// });
// test('inc.update(6000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(6000);//msDelta is in ms
//     expect(inc.value()).toBe(60);
// });
// test('inc.update(7000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(7000);//msDelta is in ms
//     expect(inc.value()).toBe(70);
// });
// test('inc.update(8000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(8000);//msDelta is in ms
//     expect(inc.value()).toBe(80);
// });
// test('inc.update(9000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(9000);//msDelta is in ms
//     expect(inc.value()).toBe(90);
// });
// test('inc.update(10000);', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(10000);//msDelta is in ms
//     expect(inc.value()).toBe(100);
// });
// test('inc.update(10001);--just one more = null', () => {
//     let inc = new Increment(0,10,0,100);
//     inc.update(10001);//msDelta is in ms
//     expect(inc.value()).toBeNull();
// });
