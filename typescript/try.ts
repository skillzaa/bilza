import Bilza, {IComponent, Ui, CompFactory as cf,PremadeSpriteSheets, hsl,getRandom} from "./bilza.js";


let bil = new Bilza("bilza", 70);

//--------------------
getText("color prop for grid comp is not implemented since",30);
getText("lines have its own variables (colorHorizontalLines colorVerticalLines)",50);
getText("and background has its own prop (colorBackground)",70);

//------------------------------------------------------
function getText(content:string,y:number=50){
    const caption = cf.text("",hsl(240));
    caption.content.set(content);
    caption.align(1,1)// --x align mid , y align bottom
    caption.x.set(50);
    caption.y.set(y);
    caption.fontSize.set(35);
    bil.insert.add(caption,0,15);
}
//--------------------
const ui = new Ui(bil);
bil.draw();