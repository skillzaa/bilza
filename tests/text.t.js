import Bilza from "../src/Bilza.js";

let bilza = new Bilza("bilza",1000,1000,Number.MAX_SAFE_INTEGER);

let text = bilza.add.text("abcd","red",0,0,50);
bilza.draw();

test('', () => {
expect(text).toBeDefined();
});

// test('', () => {    
// expect(text.width(bilza.pack)).toEqual(500);
// });

