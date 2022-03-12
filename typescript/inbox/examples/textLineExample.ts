import { FontNames } from "../bilzaa2d/pack/fontNames.js.js";
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js.js";
import Triangle from "../../components/triangle/triangle.js";
import Text from "../containers/textGroup/textGroup.js.js";

let b = new Bilzaa2d();
b.background.color = "whitesmoke";

let i = new Text();
i.d.x = 5;
i.d.y = 20;
i.d.fontSize = 80;
i.d.content = "AcTxXWjgqQ"
// i.d.fontName = FontNames.Monaco;
i.d.fontName = FontNames.Monaco;
i.d.fontColor = "blue";
i.d.showBorder = false;
i.d.overline = false;
i.d.fontColor = "yellow"
i.d.backgroundColor = "green";
b.add(i);
console.log("b",b);

b.start();