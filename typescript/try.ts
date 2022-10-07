import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
grid.colorVerticalLines.set("red");


const comp = bil.add(0,60).curve( 90,10, 0,50, 90,90,"red");
// const comp = bil.add(0,60).curve( 100,100, 250,200, 400,400,"red");
comp.lineWidth.set(10);
comp.showBackground.set(true);
comp.colorBackground.set( hsl(240,20,15));


comp.width.animate(0,10,30,800);
comp.height.animate(11,20,30,400);
// console.log("leftMost" , comp.leftMost());
// console.log("rightMost" , comp.rightMost());
// console.log("topMost" , comp.topMost());
// console.log("bottomMost" , comp.bottomMost());

// comp.midX.animate(1,5,300,800);
// comp.midY.oscillate(1,60,0,400,10,0);
// comp.midX.oscillate(0,60,0,800,5);

// comp.width.set(20);
// comp.height.set(20);
// comp.showBackground.set(true);
// comp.colorBackground.set(hsl(60,40,80));
// comp.border.set(1);
// comp.colorBorder.set("red");
// comp.setPaddings(1);
////////////////////////
// comp.x.animate(0,5,   0,                    comp.rightEdge() );
// comp.y.animate(6,10,  0,                    comp.bottomEdge() );
// comp.x.animate(11,15, comp.rightEdge() ,  0 );
// comp.y.animate(16,20, comp.bottomEdge() , 0);

////////////////////////
bil.draw();

//@ts-expect-error
const ui = new Ui(bil.bil );

