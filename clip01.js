import TestComp from "./src/testComp/testComp.js";

export default function clip (name,y=0){
    let tst = new TestComp(name);
    tst.duration = 12;
    tst.p.y.setValue(y);
    tst.moveX(5,10,0,100);
    return tst; 
}
