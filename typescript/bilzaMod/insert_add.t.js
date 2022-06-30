
import Bilza from "../../src/Bilza.js"
import FillRect from "../../src/components/fillRect.js";

test('insert_add_setup = 0', () => {
let bil = new Bilza()
expect(bil.len()).toBe(0);
});

test('Try to add a comp with duration = 0', () => {
let bil = new Bilza()
let c = new  FillRect( );
expect(()=>{ bil.insert.add(c,1,0)}).toThrow("for Insert operation to succeed you need component duration greater than 0");
});
test('missing second argument in insert.add', () => {
    let bil  =  new Bilza();    
let c = new  FillRect( );
expect(()=>{ bil.insert.add(c,1)}).toThrow("for Insert operation to succeed you need component duration greater than 0");
});

test('add second comp with duration =0  ', () => {
let bil = new Bilza()
let a = new  FillRect( );//length = 10;
bil.insert.add(a,0,10); //we are not checking this
let b = new  FillRect( ); //length = 0;
expect(()=>{ bil.insert.add(b,1,0)}).toThrow("for Insert operation to succeed you need component duration greater than 0");
});

test('Blank Frames Error in insert After insert', () => {
let bil = new Bilza()
//-- its startTime will be equal to 0 and end time 10
let a = new  FillRect( );//length = 10;
// a.insertType = a.insertTypeOptions.Insert;
bil.insert.add(a,0,10); //we are not checking this
let b = new  FillRect( ); //
//--insert-add from frame 15 for 10 sec duration
//--the thrid arg in this fn is not endTime rather DURATION
expect(()=>{ bil.insert.add(b,15,10)}).toThrow();
});

test('Blank Frames At Start insert', () => {
let bil = new Bilza()
//-- its startTime will be equal to 5 and duration = 10 
let a = new  FillRect( );//length = 10;
expect(()=>{ bil.insert.add(a,5,10)}).toThrow();
});

test('insert After Append', () => {
let bil = new Bilza()

let a = new  FillRect( );//duration = 10;
bil.insert.append(a,10); //

let b = new  FillRect( );//duration = 10 BUT start time = 15 when bil.len = 10;
expect(()=>{ bil.insert.add(b,15,10)}).toThrow();
});

test('Append-Insert- just add OVERLAP to bil.len ', () => {
let bil = new Bilza()
//--Append-1
let a = new  FillRect( );//length = 10;
bil.insert.append(a,10); //

//--Insert-2
let b = new  FillRect( );//daration = 10;

bil.insert.add(b,5,10);

expect(bil.len(false)).toBe(15);
});
