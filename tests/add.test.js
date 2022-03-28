
import Bilza from "../src/Bilza.js";
 

let bilza = new Bilza();

test('', () => {
let txt = bilza.add.text("abc");    
expect(txt).toBeDefined();
});
test('', () => {
let item = bilza.add.counter();    
expect(item).toBeDefined();
});
test('', () => {
let item = bilza.add.list();    
expect(item).toBeDefined();
});

test('', () => {
let item = bilza.add.grid();    
expect(item).toBeDefined();
});

test('', () => {
let item = bilza.add.circle();    
expect(item).toBeDefined();
});

test('', () => {
let item = bilza.add.randomBgShapes();    
expect(item).toBeDefined();
});

