const bilzaa = require('../build/bilza_cjs');

const style = new bilzaa.Style(0);
// console.log(style);
test('adds 1 + 2 to equal 3', () => {
    // expect(sum()).toBe(10);
    expect(style.fontSize).toEqual(25);
  });

