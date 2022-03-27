"use strict";
const bilza = require('../build/bilza_cjs');
const style = new bilza.Style(0);
style.
    test('Adds 1 + 2 to equal 3', () => {
    expect(style.fontSize).toEqual(25);
});
