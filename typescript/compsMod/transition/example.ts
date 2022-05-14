import Transition from "./transition.js";
function mydataFn(){
let mydata = {
    msStart : 0,
content: "some text",
x:0,
y:0

};
return mydata;
}


let t = new Transition(mydataFn);
t.add(1);

let two = t.add(2);
two.content = "making progress";

t.add(3);
t.apply(2);
console.log("T",t);