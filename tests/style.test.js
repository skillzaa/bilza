
import Style from "../src/design/style.js";

let style = new Style();
//--style has total 18 prop
// console.log(style);
test('5 string props of style', () => {
  expect(style.fontFamily).toBeDefined();
  expect(style.fillStyle).toBeDefined();
  expect(style.strokeStyle).toBeDefined();
  expect(style.shadowColor).toBeDefined();
  expect(style.lineCap).toBeDefined();

});
test('8 numeric props of style', () => {
    expect(style.applyAtMs).toEqual(0); //default value
    expect(style.fontSize).toBeGreaterThanOrEqual(0);
    expect(style.lineWidth).toBeGreaterThanOrEqual(0);
    expect(style.shadowOffsetX).toBeGreaterThanOrEqual(0);
    expect(style.shadowOffsetY).toBeGreaterThanOrEqual(0);
    expect(style.shadowBlur).toBeGreaterThanOrEqual(0);
    expect(style.globalAlpha).toBeGreaterThanOrEqual(0);
    expect(style.lineDash).toEqual([]);

});

