// import Grid from "./gridPlugin/grid.js";
import Equation from "./equation/equation.js";
//===========================================
let canvas = document.getElementById("crown");
// @ts-expect-error
canvas.width = window.innerWidth;
// @ts-expect-error
canvas.height = window.innerHeight;
// @ts-expect-error
let ctx = canvas.getContext('2d');
//===========================================
//--@ts-expect-error
// let g = new Grid(canvas);
//==================Grid Ends ================
let eq = new Equation(ctx);
let f = eq.add_seg().frac();
f.bot.add().sqrt();
f.bot.add().normal("a + ");
f.bot.add().power("b", "2");
f.bot.add().normal(" + c");
f.bot.add().sqrtEnd();
f.top.add().normal("(");
f.top.add().sqrt();
f.top.add().normal("4");
f.top.add().power("x", "3");
f.top.add().sqrtEnd();
f.top.add().power(")", "4/3");
f.top.add().normal(" + (((3c)))");
// g.draw();
eq.draw(100, 100);
// ???????????????????????????????
// setInterval(function(){
//     eq1.state.incX(1);
//     eq1.draw();
//     console.log("animation");
// },1000);
