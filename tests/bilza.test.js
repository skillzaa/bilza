
import Bilza from "../src/Bilza.js";
 

let bilza = new Bilza();

test('', () => {
expect(bilza.background).toBeDefined();
});

test('', () => {
expect(bilza.add).toBeDefined();
});

test('', () => {
expect(bilza.chqCollision(0,0)).toBeNull();
});
