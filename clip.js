import TestComp from "./src/testComp/testComp.js";

export default function testClip (name,y=0){
    let tst = new TestComp(name);
    tst.duration = 12;
    tst.p.y.setValue(y);
    // tst.moveX(5,10,0,200);
    // tst.p.x.increment(5,10,0,200); 
    // tst.p.y.increment(5,10,0,200);
    return tst; 
}
