
import Bilza from "../src/Bilza.js";
 

let bilza = new Bilza();

test('', () => {
expect(bilza.canvasId).toMatch("bilza");
});

test('THIS IS A HUGE CHECK--ITS NOT USELESS', () => {
    expect(bilza.pack).toBeDefined();
});

// test('', () => {
// expect(bilza.getCanvasWidth()).toEqual(800);
// });
