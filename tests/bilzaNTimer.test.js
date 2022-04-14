
import Bilza from "../src/Bilza.js";
 

let bilza = new Bilza();

test('', () => {
expect(bilza).toBeDefined();
});

test('', () => {
expect(bilza.timeStart).toBeNull();
});

test('', () => {
expect(bilza.timeEnd).toEqual(60000);
});
test('', () => {
expect(bilza.getTimeEnd()).toEqual(60000);
});

test('', () => {
expect(bilza.setTimeEnd(2000)).toEqual(2000);
});
test('', () => {
expect(bilza.stop()).toBeTruthy();
});

test('', () => {
expect(bilza.interval).toBeNull();
});

test('', () => {
expect(bilza.msPerFrame).toBeGreaterThanOrEqual(0);
});
