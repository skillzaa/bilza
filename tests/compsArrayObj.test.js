"use strict";

import Bilza from "../src/index.js";

const bilza = new Bilza();

test('comps exist', () => {
    expect(bilza.comps.length).toBeDefined();
});

test('comps exist', () => {
    expect(bilza.chqCollision()).toBeNull();
});
test('comps exist', () => {
    // where are the args ????
    expect(bilza.drawByDrawLayer()).toBeTruthy();
});

