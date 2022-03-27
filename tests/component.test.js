
const Bilza = require("../build/bilza_cjs").default;
 

let bilza = new Bilza();

test('bilzaa is not nul', () => {
    // console.log(bilza)
    expect(bilza.background.color).toMatch("#efeee3");
  });
