import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";

/*
 * - Before init we do not know the width and height of the canvas. 
 * - So how do we get the right-edge and bottom-edge
 * - Why is it important to get the edges.
 * - Option 1 : Use aspect ration and do not allow user to set width and height at random.
 * - Option 2 : Allow user to use any values for canvas width and height just resolve everything at the last moment (everything gets translated at init). 
 * Final::::
 *      -- Have aspect ration but also allow users to resizeCanvas
 *      -- Every thing resolves at the init dont try to resolve         anything before that.
 *      -- We need to introduce classes which store data and get resolved at init. For example
 *          - till-end (for inserting comps into )
 *          - in-mid.
 *          - at_percent
 * Why is init not when the bil is created all the remainig code does not need to be written with the idea that the 
 * --what about insert time and end time in percentages.
 * 
 * 
 * 
 * 
 * 
 */

let bil = new Bilza("bilza", 70);

bil.alwaysOn().grid(10,10,"grey");

const fc = bil.add(0,20).frameCounter(0);
fc.align(0,0);
fc.goto(0,50,50);
fc.fontSize.set(80);
fc.colorBackground.set(hsl(60,75));

const comp = bil.add(0,25).circle(20,hsl(60));
comp.setPaddings(0.25);
comp.showBackground.set(true);
comp.border.set(1);
comp.colorBorder.set(hsl(0));
comp.colorBackground.set(hsl(240));

//===---Animation Settings
    comp.x.set(0);
    comp.y.set(0);
    comp.width.set(20);
    comp.height.set(20);

    comp.x.animate(1, 5, 0, (100 - comp.compWidthPerc()) );
    comp.y.animate(6, 10, 0, 100 - comp.compHeightPerc());
    comp.x.animate(11, 15, 100 - comp.compWidthPerc(), 0);
    comp.y.animate(16, 20, 100 - comp.compHeightPerc(), 0);

//---------------------------------
const ui = new Ui(bil);
bil.draw();