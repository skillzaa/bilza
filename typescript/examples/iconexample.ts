
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import FrameCounter from "../components/frameCounter/frameCounter.js";
import Text from "../components/text/text.js";
import Icon from "../components/icon/icon.js";
import dashedGrid from "../customTemplates/gridTemplates/dashedGrid.js";
import {UTFIcons} from "../components/icon/utfIcons.js";

let b = new Bilzaa2d();
let dg = dashedGrid();
let fc = new FrameCounter();
fc.x = 90;
fc.y = 90;
b.add_comp(fc);

let t = new Text();
t.compData.data.content = "?";
t.compData.data.x = 50;
t.compData.data.y = 1;
t.styleText.fontSize = 600;
t.styleText.fillStyle = "red";
b.add_comp(t);

function getIcon(iconCode :UTFIcons=UTFIcons.HeavyCheckMark,x=0, y=0, color = "green",fontSize = 100){
    let icon = new Icon(iconCode);
    icon.style.fontSize = fontSize;
    icon.style.fillStyle = color;
    icon.x = x;
    icon.y = y;
    return icon;
}

b.add_comp(getIcon());
b.add_comp(getIcon(UTFIcons.BallotX,5,0,"red"));
b.add_comp(getIcon(UTFIcons.CrossSword,10,0,"blue"));
b.add_comp(getIcon(UTFIcons.Danger,15,0,"green"));
b.add_comp(getIcon(UTFIcons.FleurDeLis,20,0,"crimson"));
b.add_comp(getIcon(UTFIcons.Heart,25,0,"black"));
b.add_comp(getIcon(UTFIcons.HeavyCheckMark,30,0,"brown"));
b.add_comp(getIcon(UTFIcons.TeaCup,35,0,"lightgreen"));
b.add_comp(getIcon(UTFIcons.YinYang,45,0,"crimson"));


b.start();

