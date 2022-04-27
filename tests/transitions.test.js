import Transition from "../src/transition/transition.js";
// We need a function that return an object with the data (factory function)
function mydataFn(){
let mydata = {
    msStart : 0,
content: "initial content",
x:0,
y:0

};
return mydata;
}
// this.d is in component

describe('new Transition', function () {
    let t = new Transition(mydataFn);

test('initial data test', () => {
expect(t.data.content).toMatch("initial content");
expect(t.data.x).toEqual(0);
expect(t.data.y).toEqual(0);

let trans = t.add(100);
trans.content = "changed";
trans.x = 50;
trans.y = 50;
});

test('', () => {
expect(t.data.content).toMatch("initial content");
t.apply(99); //nothing will change before 100 
});

test('', () => {
//---the content is still old    
expect(t.data.content).not.toMatch("changed");
expect(t.data.x).not.toEqual(50);
expect(t.data.y).not.toEqual(50);
t.apply(100);//now it has been changed
});

test('now it has been changed', () => {
expect(t.data.content).toMatch("changed");
expect(t.data.x).toEqual(50);
expect(t.data.y).toEqual(50);
});

});//describe ends
