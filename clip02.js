import TestComp from "./src/testComp/testComp.js";

export default function clip (name){

let tst  = new TestComp(name);
tst.duration = 15;
tst.color = "red";
tst.useRelativeXY = true;
tst.p.x.setValue(10);
tst.p.y.setValue(10);
// tst.moveX(2,10,tst.offScreenOptions.XLeft,100);
tst.moveX(2,10,100,tst.offScreenOptions.XLeft);
tst.moveY(2,10,tst.offScreenOptions.YBot,tst.offScreenOptions.YTop);
// tst.moveY(2,10,90,0);
// tst.move(2,10,0,90,0,50);
    return tst; 
}
