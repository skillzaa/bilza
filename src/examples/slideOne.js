import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Text from "../corecomps/text.js";
let b = new Bilzaa2d();
b.background.color = "#e0f9f1";
let g = b.components.addGrid();
g.show_numbers = false;
b.add_comp(hdg("The Main  Heading", 30, 10, "red", 70));
b.add_comp(hdg("Left top Heading", 5, 30, "red"));
b.add_comp(hdg("Left mid Heading", 5, 50, "blue"));
b.add_comp(hdg("Left bot Heading", 5, 70, "green"));
b.add_comp(hdg("Right top Heading", 60, 30, "magenta"));
b.add_comp(hdg("Right mid Heading", 60, 50, "crimson"));
b.add_comp(hdg("Right bot Heading", 60, 70, "brown"));
b.start();
function hdg(content = "your content", x = 0, y = 0, color = "blue", fontSize = 40) {
    let t = new Text(content);
    t.x = x;
    t.y = y;
    t.style.fontSize = fontSize;
    t.style.fillStyle = color;
    t.style.shadowOffsetX = 1;
    t.style.shadowOffsetY = 1;
    t.style.shadowBlur = 1;
    t.style.shadowColor = "black";
    return t;
}
