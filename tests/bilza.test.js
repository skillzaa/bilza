"use strict";
// const bilza = require('../build/bilza_cjs');

import Bilza from "../src/index.js";
const bilza = new Bilza();
// style.
// console.log(bilza);

test('Adds 1 + 2 to equal 3', () => {
    expect(bilza.background.color).toBe("#efeee3");
});
