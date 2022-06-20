
import ConstantNo from "../../src/filters/constantNo.js";
// import FilterState from "../../src/design/filterState.js";

test('setup', () => {
let con = new ConstantNo(1,2,100);    
expect(con).toBeDefined();
});

test('FilterState.Running', () => {
let con = new ConstantNo(1,10,100);    
let fs = con.update(1000);
expect(fs).toMatch("RUNNING");
});

test('get value when running', () => {
let con = new ConstantNo(1,10,100);    
let fs = con.update(5000);
const v = con.value();
expect(v).toBe(100);
});

test('get waiting', () => {
let con = new ConstantNo(5,10,100);    
let fs = con.update(3000);
expect(fs).toMatch("WAITING");
});

test('get null when waiting', () => {
let con = new ConstantNo(5,10,100);    
let fs = con.update(3000);
const v = con.value();
expect(v).toBeNull();
});
test('get null when exhausted', () => {
let con = new ConstantNo(5,10,100);    
let fs = con.update(11000);
expect(fs).toMatch("EXHAUSTED");
});
test('get null when exhausted', () => {
let con = new ConstantNo(5,10,100);    
let fs = con.update(11000);
const v = con.value();
expect(v).toBeNull();
});
//-----------edge cases
test('lets see 10000', () => {
let con = new ConstantNo(5,10,100);    
let fs = con.update(10000);
const v = con.value();
expect(v).toBe(100);
});
test('lets see 10001', () => {
let con = new ConstantNo(5,10,100);    
let fs = con.update(10001);
const v = con.value();
expect(v).toBeNull();
});
test('lets see 4999', () => {
let con = new ConstantNo(5,10,100);    
let fs = con.update(4999);
const v = con.value();
expect(v).toBeNull();
});
test('lets see 5000', () => {
let con = new ConstantNo(5,10,100);    
let fs = con.update(5000);
const v = con.value();
expect(v).toBe(100);
});

