import TestComp from "./src/testComp/testComp.js";

export default function clip (name){

let tst  = new TestComp(name);
tst.duration = 15;
tst.color = "red";
tst.useRelativeXY = true;
tst.p.x.setValue(0);
tst.p.y.setValue(0);
tst.moveX(2,10,0,90);
// tst.move(2,10,0,90,0,50);
    return tst; 
}
